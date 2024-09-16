import { Grid, Text, Box } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { ProductCard } from "../card";
import { LuBarChart, LuInstagram, LuMegaphone } from "react-icons/lu";
import { motion } from "framer-motion";
import { gsap } from "gsap";

// Triple-gradient background colors
const cardBackgrounds = [
  "linear-gradient(135deg, #f6d365 0%, #fda085 100%)", // Gradient for Predictive Health Insights
  "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)", // Gradient for Risk Factor Identification
  "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)", // Gradient for Health Trend Analysis // Gradient 3
];

// GSAP Animations on Mount
const useGsapAnimation = (el: React.MutableRefObject<null>) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      { opacity: 0, scale: 0.8, rotate: 5 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1, ease: "power3.out" }
    );
  }, []);
};

const Analytics = () => {
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
      {/* Card 1 - Predictive Health Insights */}
      <motion.div
        ref={cardRef1}
        whileHover={{ scale: 1.1, rotate: 2, skewX: 3 }}
        whileTap={{ scale: 0.9 }}
      >
        <Box
          bg={cardBackgrounds[0]}
          borderRadius="lg"
          p={6}
          boxShadow="0px 15px 25px rgba(0, 0, 0, 0.2)"
          className="card"
        >
          <ProductCard icon={LuBarChart} title={"📊 Predictive Health Insights"}>
            <Text fontWeight={"extrabold"} color="white">
              Leverage AI to gain deep insights into patient health trends. 
              Predict potential health issues and tailor interventions proactively 
              for improved outcomes.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>

      {/* Card 2 - Risk Factor Identification */}
      <motion.div
        ref={cardRef2}
        whileHover={{ scale: 1.1, rotate: -2, skewY: 3 }}
        whileTap={{ scale: 0.9 }}
      >
        <Box
          bg={cardBackgrounds[1]}
          borderRadius="lg"
          p={6}
          boxShadow="0px 15px 25px rgba(0, 0, 0, 0.2)"
          className="card"
        >
          <ProductCard icon={LuMegaphone} title={"🔍 Risk Factor Identification"}>
            <Text fontWeight={"extrabold"} color="white">
              Identify and assess risk factors with advanced AI algorithms. 
              Enable early detection and personalized prevention strategies for 
              chronic diseases and health conditions.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>

      {/* Card 3 - Health Trend Analysis */}
      <motion.div
        ref={cardRef3}
        whileHover={{ scale: 1.1, rotate: 2, skewX: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <Box
          bg={cardBackgrounds[2]}
          borderRadius="lg"
          p={6}
          boxShadow="0px 15px 25px rgba(0, 0, 0, 0.2)"
          className="card"
        >
          <ProductCard icon={LuInstagram} title={"💡 Health Trend Analysis"}>
            <Text fontWeight={"extrabold"} color="white">
              Stay informed with real-time analysis of health trends. 
              Utilize AI to monitor patient data and adapt treatment plans based 
              on evolving health patterns and predictive models.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>
    </Grid>
  );
};

export default Analytics;
