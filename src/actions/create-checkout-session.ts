"use server";

import { db, stripe } from "@/lib";
import { currentUser } from "@clerk/nextjs/server";

const createCheckoutSession = async (planType: string, billingCycle: string) => {
    const user = await currentUser();

    if (!user) {
        throw new Error("You must be signed in to create a checkout session");
    }

    const dbUser = await db.user.findUnique({
        where: { id: user.id },
    });

    if (!dbUser) {
        throw new Error("User not found");
    }

    // Define pricing details based on selected plan and billing cycle
    const plans: { [key: string]: { [key: string]: number } } = {
        Basic: { monthly: 0, annual: 0 },
        Premium: { monthly: 19900, annual: 199000 },
        Enterprise: { monthly: 99900, annual: 999000 },
    };

    const priceInCents = plans[planType]?.[billingCycle];
    
    if (priceInCents === undefined) {
        throw new Error("Invalid plan type or billing cycle");
    }

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            invoice_creation: { enabled: true },
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: `NEXAUAR.AI ${planType} Plan (${billingCycle})`,
                        },
                        unit_amount: priceInCents,
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/account/billing?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/congrats`,
            metadata: { userId: dbUser.id, planType, billingCycle },
        });

        // Update user record with Stripe session ID
        await db.user.update({
            where: { id: dbUser.id },
            data: { stripeCustomerId: session.id },
        });

        console.log("Session created", session.id);

        return session;
    } catch (error) {
        console.error("Error creating session", error);
    }
};

export default createCheckoutSession;