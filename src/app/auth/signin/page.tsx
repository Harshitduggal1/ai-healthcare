"use client";

import { Icons } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import background from "@/global/images/background.png";
import { useSignIn } from "@clerk/nextjs";
import { EyeIcon, EyeOffIcon, LoaderIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import favicon from "@/global/images/favicon.png";

const SignInPage = () => {
    const router = useRouter();
    const { isLoaded, signIn, setActive } = useSignIn();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isLoaded) return;

        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }

        setIsLoading(true);

        try {
            const signInAttempt = await signIn.create({
                identifier: email,
                password,
                redirectUrl: "/auth/auth-callback",
            });

            if (signInAttempt.status === "complete") {
                await setActive({ session: signInAttempt.createdSessionId });
                router.push("/dashboard");
            } else {
                console.error(JSON.stringify(signInAttempt, null, 2));
                toast.error("Invalid email or password. Please try again.");
            }
        } catch (error: any) {
            console.error(JSON.stringify(error, null, 2));
            switch (error.errors[0]?.code) {
                case "form_identifier_not_found":
                    toast.error("This email is not registered. Please sign up first.");
                    break;
                case "form_password_incorrect":
                    toast.error("Incorrect password. Please try again.");
                    break;
                case "too_many_attempts":
                    toast.error("Too many attempts. Please try again later.");
                    break;
                default:
                    toast.error("An error occurred. Please try again.");
                    break;
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex h-screen">
            {/* Left side background */}
            <div className="hidden md:block w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${background.src})` }}>
            </div>

            {/* Right side Sign In form */}
            <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-8 py-12">
                <div className="flex flex-col text-center gap-1 mb-8">
                    <Link href="/">
                        <img src={favicon.src} alt="Logo" className="w-12 h-12 mx-auto" />
                    </Link>
                    <h1 className="text-4xl font-extrabold font-heading text-gradient bg-gradient-to-r from-orange-500 to-fuchsia-500 text-transparent bg-clip-text mt-4">
                        Sign In
                    </h1>
                    <p className="font-bold text-gradient text-lg bg-gradient-to-r from-orange-500 to-fuchsia-500 text-transparent bg-clip-text mt-4">
                       🎉 Welcome back! Sign in to your account.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="w-full max-w-sm">
                    {/* Email Field */}
                    <div className="space-y-1">
                        <Label htmlFor="email" className="text-sm font-semibold text-gray-500 dark:text-white pr-8">
                            Email address
                            </Label>
                    <div className="relative w-full h-12 overflow-hidden rounded-md p-[1px] bg-transparent focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] inline-flex animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF00FF_0%,#87CEFA_50%,#FFA500_100%)]" />
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            disabled={isLoading}
                            onChange={(e) => setEmail(e.target.value)}
                            className="relative  bg-white text-black border-none placeholder:text-gray-400 font-bold focus:outline-none rounded-md" />

                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="mt-4 space-y-1">
                        <Label htmlFor="password" className="text-sm font-semibold text-gray-500 dark:text-white pr-8">
                            Password
                            </Label>
                    <div className="relative w-full h-12 overflow-hidden rounded-md p-[1px] bg-transparent focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] inline-flex animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF00FF_0%,#87CEFA_50%,#FFA500_100%)]" />
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            disabled={isLoading}
                            onChange={(e) => setPassword(e.target.value)}
                            className="relative  bg-white text-black border-none placeholder:text-gray-400 font-bold focus:outline-none rounded-md" />
                            <Button
                                type="button"
                                size="icon"
                                variant="ghost"
                                disabled={isLoading}
                                className="absolute top-1 right-1 hover:translate-y-0"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOffIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
                            </Button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <Button type="submit" size="default" disabled={isLoading} className="w-full bg-gradient-to-r from-orange-500 to-fuchsia-500 font-extrabold">
                            {isLoading ? <LoaderIcon className="w-4 h-4 animate-spin" /> : "Sign In"}
                        </Button>
                    </div>
                </form>

                {/* Footer */}
                <div className="flex mt-2">
                    <p className="font-semibold text-zinc-500 text-center w-full text-base">
                        Don&apos;t have an account? <Link href="/auth/signup" className="text-fuchsia-600 font-extrabold text-base">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;