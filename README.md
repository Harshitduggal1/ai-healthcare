This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
NEXAURA.AI
https://github.com/Harshitduggal1/ai-healthcar





First, run the development server:

```bash
 git clone https://github.com/Harshitduggal1/ai-healthcare
then bun install
bun run dev

<img width="1440" alt="Screenshot 2024-09-15 at 15 43 23" src="https://github.com/user-attachments/assets/c6e83f22-b525-4f01-b63f-c9b75b8d16f8">

.env
--------------------------------------------------------------------------------
DATABASE_URL="postgresql://Nexaura_owner:password@host/Nexaura?sslmode=require"

# Uncomment next line if you use Prisma <5.10
# DATABASE_URL_UNPOOLED="postgresql://Nexaura_owner:password@host/Nexaura?sslmode=require"

# app
NEXT_PUBLIC_APP_NAME=Nexaura.ai
NEXT_PUBLIC_APP_URL=http://localhost:3000

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in?redirect_url=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up?redirect_url=/dashboard

# google
NEXT_PUBLIC_GOOGLE_API_KEY="your_google_api_key"

# stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
