"use client";

import Image from "next/image";
import acmelogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <section className="w-[90%] m-auto md:container h-[20vh] items-center flex">
      <div className="flex items-center gap-8 overflow-hidden">
        <div className="flex flex-none">
          <h2 className="text-sm font-light md:text-lg text-white/80 font-tomorrow">
            Trusted by:
          </h2>
        </div>

        <div className="flex flex-1 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] overflow-hidden">
          <motion.div
            initial={{ translateX: "-50%" }}
            animate={{
              translateX: "0%",
              transition: {
                repeat: Infinity,
                ease: "linear",
                duration: 10,
              },
            }}
            className="flex flex-none gap-10 overflow-hidden pr-11"
          >
            {[
              acmelogo,
              apexLogo,
              celestialLogo,
              quantumLogo,
              pulseLogo,
              echoLogo,
              acmelogo,
              apexLogo,
              celestialLogo,
              quantumLogo,
              pulseLogo,
              echoLogo,
            ].map((logo, index) => (
              <Image
                src={logo}
                alt={`Logo ${index}`}
                key={index}
                width={100}  // Adjust width as needed
                height={60}  // Adjust height as needed
                className="w-auto h-6"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
