"use client"
import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useRef, useEffect } from "react";
import { LuBot, LuGauge, LuCreditCard, LuLanguages, LuLayoutTemplate, LuLifeBuoy } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      featureRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featureRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <Flex
      ref={featureRef}
      id="features"
      direction="column"
      justify="center"
      align="center"
      my={24}
      px={4}
      maxW="1200px"
      mx="auto"
      p={8}
      rounded="lg"
      shadow="lg"
      bg="linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)"
      position="relative"
      overflow="hidden"
    >
      <Heading
        fontSize={{ base: "4xl", md: "5xl" }}
        textAlign="center"
        color="#333"
        mb={12}
        bgClip="text"
        bgGradient="linear(to-r, #ff0081, #ff8c00)"
        animation="fadeIn 1.5s ease-out forwards"
      >
        <TypewriterEffectSmooth words={words} />
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
        gap={8}
        w="full"
        position="relative"
      >

        {Cards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title}>
            {card.text}
          </Card>
        ))}
      </Grid>
    </Flex>
  );
};

interface CardProps {
  icon: IconType;
  title: string;
  children: React.ReactNode;
}

const Card = ({ icon: IconComponent, title, children }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
        y: -10,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
      className="card-container"
    >
      <Flex
        mb={4}
        p={3}
        rounded="full"
        bg="rgba(255, 0, 130, 0.1)"
        align="center"
        justify="center"
        transition="all 0.25s ease"
        _hover={{
          bg: "rgba(255, 140, 0, 0.1)",
        }}
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      >
        <IconComponent fontSize={50} color="#ff0081" />
      </Flex>
      <Heading
        fontSize="lg"
        mb={3}
        color="#333"
        textAlign="center"
        bgClip="text"
        bgGradient="linear(to-r, #ff0081, #ff8c00)"
        animation="fadeInUp 1s ease-out"
      >
        {title}
      </Heading>
      <Text fontSize="md" color="gray.700" textAlign="center">
        {children}
      </Text>
    </motion.div>
  );
};

const words = [
  { text: "WITH OUR" },
  { text: "AI" },
  { text: "HEALTHCARE" },
  { text: "SOLUTIONS", className: "text-orange-500 dark:text-orange-500" },
];

const Cards = [
  {
    icon: LuBot,
    title: "AI-Driven Diagnosis",
    text: "Revolutionize patient care with real-time AI-powered diagnostics for faster and more accurate results.",
  },
  {
    icon: LuGauge,
    title: "Healthcare Performance Dashboard",
    text: "Monitor health metrics and patient outcomes with a robust AI-optimized dashboard for precision insights.",
  },
  {
    icon: LuCreditCard,
    title: "Secure Healthcare Payments",
    text: "Ensure secure, encrypted transactions for patient billing and data privacy.",
  },
  {
    icon: LuLanguages,
    title: "Global Reach with Multilingual Support",
    text: "Bridge language barriers in healthcare with AI-powered multilingual communication for a global audience.",
  },
  {
    icon: LuLayoutTemplate,
    title: "Customizable Healthcare Solutions",
    text: "Tailor AI-driven solutions to fit your specific healthcare needs with our flexible, ready-to-use platforms.",
  },
  {
    icon: LuLifeBuoy,
    title: "24/7 Support for Healthcare Systems",
    text: "Receive continuous AI-backed support to ensure seamless integration and operation across all healthcare systems.",
  },
];

export default Features;
