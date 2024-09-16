import { Grid, Text, Box } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { ProductCard } from "../card";
import { LuLayers, LuPenLine, LuText } from "react-icons/lu";
import { motion } from "framer-motion";
import { gsap } from "gsap";

// Triple-gradient background colors
const cardBackgrounds = [
  "linear-gradient(135deg, #d3cce3 0%, #e9e4f0 100%)", // Gradient for Early Disease Detection
  "linear-gradient(135deg, #fbc2eb 0%, #a6c0fe 100%)", // Gradient for Predictive Health Analytics
  "linear-gradient(135deg, #ff9a9e 0%, #fbdc77 100%)", // Gradient for Personalized Treatment Plans
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

const Detection = () => {
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
      {/* Card 1 - Early Disease Detection */}
      <motion.div
        ref={cardRef1}
        whileHover={{ scale: 1.1, rotate: 2, skewX: 3 }}
        whileTap={{ scale: 0.95 }}
      >
        <Box
          bg={cardBackgrounds[0]}
          borderRadius="lg"
          p={6}
          boxShadow="0px 15px 25px rgba(0, 0, 0, 0.2)"
          className="card"
        >
          <ProductCard icon={LuText} title={"🩺 Early Disease Detection"}>
            <Text fontWeight={"extrabold"} color="white">
              Harness cutting-edge AI to identify diseases at their earliest stages. 
              Enhance diagnostic accuracy and improve patient outcomes with real-time 
              analysis and predictive insights.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>

      {/* Card 2 - Predictive Health Analytics */}
      <motion.div
        ref={cardRef2}
        whileHover={{ scale: 1.1, rotate: -2, skewY: 3 }}
        whileTap={{ scale: 0.95 }}
      >
        <Box
          bg={cardBackgrounds[1]}
          borderRadius="lg"
          p={6}
          boxShadow="0px 15px 25px rgba(0, 0, 0, 0.2)"
          className="card"
        >
          <ProductCard icon={LuPenLine} title={"📈 Predictive Health Analytics"}>
            <Text fontWeight={"extrabold"} color="white">
              Utilize advanced AI to forecast potential health risks. Leverage data-driven 
              insights for personalized prevention strategies and proactive health management.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>

      {/* Card 3 - Personalized Treatment Plans */}
      <motion.div
        ref={cardRef3}
        whileHover={{ scale: 1.1, rotate: 2, skewX: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <Box
          bg={cardBackgrounds[2]}
          borderRadius="lg"
          p={6}
          boxShadow="0px 15px 25px rgba(0, 0, 0, 0.2)"
          className="card"
        >
          <ProductCard icon={LuLayers} title={"🔬 Personalized Treatment Plans"}>
            <Text fontWeight={"extrabold"} color="white">
              Generate tailored treatment plans with AI-driven precision. Ensure optimal 
              therapy choices based on individual patient data and historical health trends.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>
    </Grid>
  );
};

export default Detection;
