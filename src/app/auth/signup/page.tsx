"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "sonner";
import { EyeIcon, EyeOffIcon, LoaderIcon } from "lucide-react";
import { useSignUp } from "@clerk/nextjs";
import favicon from "@/global/images/favicon.png";
import background from "@/global/images/background.png";

const SignUpPage = () => {
    const router = useRouter();
    const { isLoaded, signUp, setActive } = useSignUp();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [code, setCode] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isVerifying, setIsVerifying] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLoaded) return;
        if (!name || !email || !password) {
            toast.error("Please fill in all fields");
            return;
        }
        setIsLoading(true);
        try {
            await signUp.create({
                emailAddress: email,
                password,
                firstName: name.split(" ")[0],
                lastName: name.split(" ")[1] || "",
            });
            await signUp.prepareEmailAddressVerification({
                strategy: "email_code",
            });
            setIsVerified(true);
        } catch (error: any) {
            console.log(JSON.stringify(error, null, 2));
            switch (error.errors[0]?.code) {
                case "form_identifier_exists":
                    toast.error("This email is already registered. Please sign in.");
                    break;
                case "form_password_pwned":
                    toast.error("The password is too common. Please choose a stronger password.");
                    break;
                case "form_param_format_invalid":
                    toast.error("Invalid email address. Please enter a valid email address.");
                    break;
                case "form_password_length_too_short":
                    toast.error("Password is too short. Please choose a longer password.");
                    break;
                default:
                    toast.error("An error occurred. Please try again.");
                    break;
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLoaded) return;
        if (!code) {
            toast.error("Please enter the verification code");
            return;
        }
        setIsVerifying(true);
        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
            });
            if (completeSignUp.status === "complete") {
                await setActive({ session: completeSignUp.createdSessionId });
                router.push("/auth/auth-callback");
            } else {
                console.error(JSON.stringify(completeSignUp, null, 2));
                toast.error("Invalid verification code. Please try again.");
            }
        } catch (error) {
            console.error("Error:", JSON.stringify(error, null, 2));
            toast.error("An error occurred. Please try again.");
        } finally {
            setIsVerifying(false);
        }
    };

    return isVerified ? (
        <div className="relative flex items-center justify-end h-screen">
            <img src={background.src} alt="Background" className="absolute inset-0 w-full h-full object-cover" style={{ clipPath: "inset(0 50% 0 0)" }} />
            <div className="relative flex flex-col items-center gap-y-6 max-w-md w-full right-0 mr-8">
                <Link href="/">
                    <img src={favicon.src} alt="Logo" className="w-12 h-12 mx-auto" />
                </Link>
                <h1 className="text-2xl font-bold font-heading mt-2">
                    Please check your email
                </h1>
                <p className="text-muted-foreground">
                    We've sent a verification code to {email}
                </p>
                <form onSubmit={handleVerify} className="w-full">
                    <div className="space-y-2 flex flex-col items-center justify-center">
                        <Label htmlFor="code">
                            Verification Code
                        </Label>
                        <InputOTP
                            maxLength={6}
                            value={code}
                            disabled={isVerifying}
                            onChange={(e) => setCode(e)}
                            className="pt-2"
                        >
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                    <div className="mt-6">
                        <Button
                            size="default"
                            type="submit"
                            disabled={isVerifying}
                            className="w-full"
                        >
                            {isVerifying ? (
                                <LoaderIcon className="w-4 h-4 animate-spin" />
                            ) : "Verify Code"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    ) : (
        <div className="flex h-screen">
            {/* Left side background */}
            <div className="hidden md:block w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${background.src})` }}>
            </div>

            {/* Right side Sign Up form */}
            <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-8 py-12">
                <div className="flex flex-col text-center gap-1 mb-8">
                    <img src={favicon.src} alt="Logo" className="w-12 h-12 mx-auto" />
                    <h1 className="text-4xl font-extrabold font-heading text-gradient bg-gradient-to-r from-fuchsia-500 to-orange-500 text-transparent bg-clip-text mt-4">
                        Sign Up
                    </h1>
                    <p className="font-bold text-gradient text-lg bg-gradient-to-r from-orange-500 to-fuchsia-500 text-transparent bg-clip-text mt-4">
                        Create an account to start using NEXAURA.AI
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="w-full max-w-sm">
                    {/* Full Name Field */}
                    <div className="space-y-1">
                        <Label htmlFor="name" className="text-sm font-semibold text-gray-500 dark:text-white pr-8">
                            Full Name
                        </Label>
                        <div className="relative w-full h-12 overflow-hidden rounded-md p-[1px] bg-transparent focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] inline-flex animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF00FF_0%,#87CEFA_50%,#FFA500_100%)]" />
                            <Input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                disabled={isLoading}
                                onChange={(e) => setName(e.target.value)}
                                className="relative bg-white text-black border-none placeholder:text-gray-400 font-bold focus:outline-none rounded-md"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1 mt-4">
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
                                className="relative bg-white text-black border-none placeholder:text-gray-400 font-bold focus:outline-none rounded-md"
                            />
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
                                className="relative bg-white text-black border-none placeholder:text-gray-400 font-bold focus:outline-none rounded-md"
                            />
                            <Button
                                type="button"
                                size="icon"
                                variant="ghost"
                                disabled={isLoading}
                                className="absolute top-1 right-1"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOffIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
                            </Button>
                        </div>
                    </div>
                    
                    {/* Submit Button */}
                    <div className="mt-6">
                        <Button
                            type="submit"
                            size="default"
                            disabled={isLoading}
                            className={`w-full ${isLoading ? "bg-gray-400" : "bg-gradient-to-r from-orange-500 to-fuchsia-500"} text-white rounded-full px-4 py-2 text-sm font-extrabold`}
                        >
                            {isLoading ? <LoaderIcon className="w-4 h-4 animate-spin" /> : "Continue"}
                        </Button>
                    </div>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-xl text-gradient bg-gradient-to-r from-orange-500 to-fuchsia-500 bg-clip-text">
                        Been here before? <Link href="/auth/signin" className="text-fuchsia-600 font-extrabold">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;