'use client';
import React from 'react';
import { Vortex } from '@/components/ui/vortex';

export default function Newsletter() {
  return (
    <div className="relative mx-auto mt-20 h-[40rem] w-full overflow-hidden rounded-md lg:mt-40">
      <Vortex
        className="flex h-full w-full flex-col items-center justify-center md:px-10"
      >
        <div className="flex flex-col items-center justify-center">
        <div className="flex h-full w-[80vw] flex-col rounded-[20px] border-[2px] border-[#e5a2ff] p-4 lg:w-[40vw] lg:gap-4">


        <h2 className="text-center text-4xl font-extrabold text-white lg:text-5xl">
              Contact Us
            </h2>
          
            <p className="mx-auto mt-2 text-center font-semibold text-[10px] lg:w-3/4 lg:text-[15px] lg:text-lg">
    <span className="bg-gradient-to-r from-fuchsia-600 via-purple-400 to-sky-500 bg-clip-text text-transparent">
        Be among the first to access exclusive beta features of NEXAURA.AI included in our basic plan.
        Additionally, enjoy a special 25% discount🎉🎉 on your premium plan with our MAGIC invitation link.
    </span>
   
</p>     <div className="relative mt-4 w-full">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="mx-auto flex flex-col items-center justify-center gap-4 lg:w-[80%]"
              >
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="h-full w-full rounded-full border border-white/30 bg-white/10 px-4 py-2 text-center text-sm text-white placeholder-white/50 focus:border-white/50 focus:outline-none lg:text-lg"
                />
               <button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-fuchsia-600 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent font-extrabold">
  Claim Discount
  </div>
</button>
              </form>
            </div>
          </div>
        </div>
      </Vortex>
      {/* top shadow */}
      <div className="absolute left-0 right-0 top-0 h-2/4 bg-gradient-to-t from-transparent to-[#07070C]"></div>
      {/* bottom shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-2/4 bg-gradient-to-t from-[#07070C] to-transparent"></div>
    </div>
  );
}
