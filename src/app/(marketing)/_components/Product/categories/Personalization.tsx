import { Grid, Text, Box } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { ProductCard } from "../card";
import { LuPalette, LuPencilRuler, LuShapes } from "react-icons/lu";
import { motion } from "framer-motion";
import { gsap } from "gsap";

// Triple-gradient background colors
const cardBackgrounds = [
  "linear-gradient(135deg, #fbc2eb 0%, #a6c0fe 100%)", // Gradient for Personalized Wellness Plans
  "linear-gradient(135deg, #fbc2eb 0%, #e6dee9 100%)", // Gradient for Holistic Health Insights
  "linear-gradient(135deg, #dcb0ff 0%, #ff9a9e 100%)", // Gradient for Real-Time Wellness Monitoring
];

// GSAP Animations on Mount
const useGsapAnimation = (el: React.MutableRefObject<null>) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      { opacity: 0, scale: 0.8, rotate: 10 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);
};

const Personalization = () => {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);

  useGsapAnimation(cardRef1);
  useGsapAnimation(cardRef2);
  useGsapAnimation(cardRef3);

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      w={"100%"}
      mt={6}
      gap={6}
      px={6}
    >
      {/* Card 1 - Personalized Wellness Plans */}
      <motion.div
        ref={cardRef1}
        whileHover={{ scale: 1.1, rotate: 2, skewX: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <Box
          bg={cardBackgrounds[0]}
          borderRadius="lg"
          p={6}
          boxShadow="0px 15px 25px rgba(0, 0, 0, 0.2)"
          className="card"
        >
          <ProductCard icon={LuPencilRuler} title={"💪 Personalized Wellness Plans"}>
            <Text fontWeight={"extrabold"} color="white">
              Tailor wellness programs to individual health needs with our AI-driven 
              solution. Get customized fitness, nutrition, and mental health plans to 
              enhance overall well-being and achieve personal health goals.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>

      {/* Card 2 - Holistic Health Insights */}
      <motion.div
        ref={cardRef2}
        whileHover={{ scale: 1.1, rotate: -2, skewY: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <Box
          bg={cardBackgrounds[1]}
          borderRadius="lg"
          p={6}
          boxShadow="0px 15px 25px rgba(0, 0, 0, 0.2)"
          className="card"
        >
          <ProductCard icon={LuPalette} title={"🧘‍♂️ Holistic Health Insights"}>
            <Text fontWeight={"extrabold"} color="white">
              Access comprehensive health insights with our AI system. Gain valuable 
              knowledge about your health patterns and receive recommendations for 
              balanced living and stress management.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>

      {/* Card 3 - Real-Time Wellness Monitoring */}
      <motion.div
        ref={cardRef3}
        whileHover={{ scale: 1.1, rotate: 2, skewX: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <Box
          bg={cardBackgrounds[2]}
          borderRadius="lg"
          p={6}
          boxShadow="0px 15px 25px rgba(0, 0, 0, 0.2)"
          className="card"
        >
          <ProductCard icon={LuShapes} title={"🔍 Real-Time Wellness Monitoring"}>
            <Text fontWeight={"extrabold"} color="white">
              Monitor your health in real-time with advanced AI tools. Track metrics 
              and receive instant feedback to stay on top of your wellness journey.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>
    </Grid>
  );
};

export default Personalization;
