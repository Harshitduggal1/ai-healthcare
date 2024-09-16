import { Grid, Text, Box } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { ProductCard } from "../card";
import { LuBug, LuCode, LuRocket } from "react-icons/lu";
import { motion } from "framer-motion";
import { gsap } from "gsap";

// Triple-gradient background colors
const cardBackgrounds = [
  "linear-gradient(135deg, #fbc2eb 0%, #a6c0fe 100%)", // Gradient for Real-Time Incident Alerts
  "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)", // Gradient for Smart Incident Analysis
  "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)", // Gradient for Resource Allocation Optimizer
];

// GSAP Animations on Mount
const useGsapAnimation = (el: React.MutableRefObject<null>) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      { opacity: 0, scale: 0.8, rotate: 15 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);
};

const Emergency = () => {
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
      {/* Card 1 - Real-Time Incident Alerts */}
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
          <ProductCard icon={LuCode} title={"🚨 Real-Time Incident Alerts"}>
            <Text fontWeight={"extrabold"} color="white">
              Receive immediate alerts for critical incidents with our AI-powered 
              system. Enhance emergency response times with real-time notifications 
              and actionable insights.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>

      {/* Card 2 - Smart Incident Analysis */}
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
          <ProductCard icon={LuBug} title={"🔍 Smart Incident Analysis"}>
            <Text fontWeight={"extrabold"} color="white">
              Analyze emergencies efficiently with AI-driven tools. Gain detailed 
              insights and prioritize actions to manage and resolve incidents swiftly.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>

      {/* Card 3 - Resource Allocation Optimizer */}
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
          <ProductCard icon={LuRocket} title={"📊 Resource Allocation Optimizer"}>
            <Text fontWeight={"extrabold"} color="white">
              Optimize resource allocation during emergencies with our AI system. 
              Ensure effective utilization and coordination for improved crisis management.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>
    </Grid>
  );
};

export default Emergency;
