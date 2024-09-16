import { Grid, Text, Box } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { ProductCard } from "../card";
import { LuBarChartBig, LuPodcast, LuTrendingUp } from "react-icons/lu";
import { motion } from "framer-motion";
import { gsap } from "gsap";

// Triple-gradient background colors
const cardBackgrounds = [
  "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)", // Gradient for Remote Health Monitoring
  "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)", // Gradient for Virtual Health Assistant
  "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)", // Gradient for Predictive Health Analytics
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

const Monitoring = () => {
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
      {/* Card 1 - Remote Health Monitoring */}
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
          <ProductCard icon={LuPodcast} title={"🌐 Remote Health Monitoring"}>
            <Text fontWeight={"extrabold"} color="white">
              Monitor patient health remotely with advanced AI algorithms. 
              Track vital signs and health metrics in real-time for timely 
              interventions and personalized care.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>

      {/* Card 2 - Virtual Health Assistant */}
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
          <ProductCard icon={LuTrendingUp} title={"🤖 Virtual Health Assistant"}>
            <Text fontWeight={"extrabold"} color="white">
              Enhance patient support with our AI-powered Virtual Health Assistant. 
              Provide 24/7 assistance, answer health queries, and manage care plans 
              with natural language understanding.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>

      {/* Card 3 - Predictive Health Analytics */}
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
          <ProductCard icon={LuBarChartBig} title={"📈 Predictive Health Analytics"}>
            <Text fontWeight={"extrabold"} color="white">
              Utilize machine learning to predict health trends and potential issues. 
              Leverage data-driven insights to optimize treatment plans and improve 
              patient outcomes.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>
    </Grid>
  );
};

export default Monitoring;
