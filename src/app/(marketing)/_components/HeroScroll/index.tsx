"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import dashimg from "@/public/images/dashimg.png"
export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold bg-clip-text text-transparent text-pretty  bg-gradient-to-b from-fuchsia-500 to-red-500 ">
            Get a glimpse of  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              the dashboard
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={dashimg}// Path should not include 'public'
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}