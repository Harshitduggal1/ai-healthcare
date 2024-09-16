"use client";

import React from "react";
import { companies, testimonials } from "@/components/ui/data";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const Reviews = () => {
  return (
    <section id="testimonials" className="py-20 flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-fuchsia-500">
        <TypewriterEffectSmooth words={words} />
      </h1>

      <div className="flex flex-col items-center mt-10">
        <div className="h-[40rem] rounded-md flex flex-col bg-white items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
          <div className="flex items-center mt-4">
            <AnimatedTooltip items={people} />
            <span className="ml-6 text-xl">⭐️⭐️⭐️⭐️⭐️</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex gap-2 items-center">
                <img
                  src={company.img}
                  alt={company.name}
                  className="w-10"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const words = [
  { text: "+3500", classname:" bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-fuchsia-500" },
  { text: "Customers", classname:"bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-fuchsia-500 "},
  { text: "Loving", classname:"bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-fuchsia-500"},
  { text: "NEXAURA.AI",classname:"bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-fuchsia-500 " },
];

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export default Reviews;