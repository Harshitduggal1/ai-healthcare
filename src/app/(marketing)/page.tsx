import Header from "./_components/Header";
import Audience from "./_components/Audience";
import Features from "./_components/Features";
import Product from "./_components/Product";
import Pricing from "./_components/Pricing";
import Newsletter from "./_components/Newsletter";
import Reviews from "./_components/Reviews";

import  Lamp  from "./_components/Lamp";
import Follow from "./_components/Follow";
import BrandSlide from "@/components/BrandSlide";

import { HeroScrollDemo } from "./_components/HeroScroll";


export default function Home() {
    return (
      <main>
        <Header />
        <div className="text-5xl font-extrabold text-center mt-4 pr-4 bg-clip-text text-transparent text-pretty  bg-gradient-to-b from-fuchsia-500 to-red-500">
          Companies that trust us
        </div>
      
      
      
        <BrandSlide />
        <HeroScrollDemo/>
        <Features />
        <Reviews/>
       
        <Audience />
        <Product />
        <Pricing />
   
        <Lamp/>
        <Newsletter />
        <Follow/>

      </main>
    );
}