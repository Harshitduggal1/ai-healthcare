import { Grid, Text, Box } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { ProductCard } from "../card";
import { LuFilm, LuSpeaker, LuVideotape } from "react-icons/lu";
import { motion } from "framer-motion";
import { gsap } from "gsap";

// Triple-gradient background colors
const cardBackgrounds = [
  "linear-gradient(135deg, #f9a8d4 0%, #f38ba0 100%)", // Gradient for Daily Health Insights
  "linear-gradient(135deg, #a2c2e8 0%, #e4a1f3 100%)", // Gradient for Personalized Wellness Tips
  "linear-gradient(135deg, #d6e1ff 0%, #c6ffdd 100%)", // Gradient for Symptom Tracker & Advice
];

// GSAP Animations on Mount
const useGsapAnimation = (el: React.MutableRefObject<null>) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      { opacity: 0, scale: 0.8, rotate: 15 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1.3, ease: "power3.out" }
    );
  }, []);
};

const Recommendations = () => {
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
      {/* Card 1 - Daily Health Insights */}
      <motion.div
        ref={cardRef1}
        whileHover={{ scale: 1.1, rotate: 5, skewX: 6 }}
        whileTap={{ scale: 0.95 }}
      >
        <Box
          bg={cardBackgrounds[0]}
          borderRadius="lg"
          p={6}
          boxShadow="0px 15px 25px rgba(0, 0, 0, 0.2)"
          className="card"
        >
          <ProductCard icon={LuVideotape} title={"🩺 Daily Health Insights"}>
            <Text fontWeight={"extrabold"} color="white">
              Receive daily, AI-driven health insights tailored to your symptoms, 
              mood, and overall health condition. Enhance your wellness journey with 
              personalized recommendations based on your unique health records.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>

      {/* Card 2 - Personalized Wellness Tips */}
      <motion.div
        ref={cardRef2}
        whileHover={{ scale: 1.1, rotate: -5, skewY: 6 }}
        whileTap={{ scale: 0.95 }}
      >
        <Box
          bg={cardBackgrounds[1]}
          borderRadius="lg"
          p={6}
          boxShadow="0px 15px 25px rgba(0, 0, 0, 0.2)"
          className="card"
        >
          <ProductCard icon={LuFilm} title={"💡 Personalized Wellness Tips"}>
            <Text fontWeight={"extrabold"} color="white">
              Get tailored wellness tips and lifestyle recommendations. Our AI 
              analyzes your health data to provide daily advice that aligns with 
              your personal needs and goals.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>

      {/* Card 3 - Symptom Tracker & Advice */}
      <motion.div
        ref={cardRef3}
        whileHover={{ scale: 1.1, rotate: 5, skewX: -6 }}
        whileTap={{ scale: 0.95 }}
      >
        <Box
          bg={cardBackgrounds[2]}
          borderRadius="lg"
          p={6}
          boxShadow="0px 15px 25px rgba(0, 0, 0, 0.2)"
          className="card"
        >
          <ProductCard icon={LuSpeaker} title={"🔍 Symptom Tracker & Advice"}>
            <Text fontWeight={"extrabold"} color="white">
              Track your symptoms and receive targeted advice from our advanced 
              AI system. Monitor changes in your health and get timely guidance 
              to improve your well-being.
            </Text>
          </ProductCard>
        </Box>
      </motion.div>
    </Grid>
  );
};

export default Recommendations;
