"use client";

import { useRef } from "react";
import type { ConfettiRef } from "@/components/ui/confetti";
import Confetti from "@/components/ui/confetti";
import Image from "next/image";
import Link from "next/link";

import GithubLogo from "@/public/images/svg/Github-Logo.svg";
import InstagramLogo from "@/public/images/svg/Instagram-Logo.svg";
import LinkedinLogo from "@/public/images/svg/LinkedIn-Logo.svg";
import TiktokLogo from "@/public/images/svg/Tiktok-Logo.svg";
import TwitterLogo from "@/public/images/svg/X-Twitter-Logo.svg";
import YouTubeLogo from "@/public/images/svg/Youtube-Logo.svg";

export default function Followus() {
  const confettiRef = useRef<ConfettiRef>(null);
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative z-[99] mt-40 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-bg-default md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-fuchsia-500 to-red-600 bg-clip-text px-4 text-center text-8xl font-extrabold leading-none text-transparent">
        Follow us on
      </span>

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 w-full h-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />

      <div className="mx-auto max-w-6xl">
        

        <div className="mt-10">
          <div className="flex flex-wrap justify-center gap-6">
          <a
              href="https://github.com/harshitduggal1"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image src={GithubLogo} alt="Github Logo" width={40} height={40} />
            </a>
            <a
              href="https://x.com/harshitduggal5"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image src={TwitterLogo} alt="X/Twitter Logo" width={40} height={40} />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image src={YouTubeLogo} alt="YouTube Logo" width={40} height={40} />
            </a>
           
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image src={InstagramLogo} alt="Instagram Logo" width={40} height={40} />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image src={TiktokLogo} alt="TikTok Logo" width={40} height={40} />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image src={LinkedinLogo} alt="Linkedin Logo" width={40} height={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}