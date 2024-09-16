"use client"
import { Button, Flex, Heading, Text, keyframes } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import HeroBottomSVG from "./HeroBottomSVG";
import { StargateColors } from "@/utils/Colors";
import { LuZap } from "react-icons/lu";
import Link from "next/link";

const words = [
  "AI Doctor",
  "Drug Prevention",
  "Precision Doctor",
  "AI Healthcare Solutions",
  "Virtual Health Assistant",
  "Smart Diagnosis",
  "Digital Health Innovation",
];

const Header = () => {
  const [currentWord, setCurrentWord] = useState<string>(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentWord(words[index]);
  }, [index]);

  return (
    <Flex
      as={motion.div}
      initial="initial"
      animate="animate"
      minH="100vh"
      bg="linear-gradient(120deg, #5433FF 0%, #8E2DE2 20%, #4A00E0 40%, #20BDFF 50%, #6FB1FC 60%, #FF0099 70%, #f953c6 80%, #b91d73 90%, #4364F7 100%)"
      bgSize="200% 200%"
      animation={`${bgAnimation} 20s ease-in-out alternate infinite`}
      position="relative"
      align="center"
      justify="center"
      direction="column"
      px={2}
    >
      <Flex bg="#ffffff50" px={4} rounded="full" mb={5}>
        <Text color={StargateColors.white} fontSize="md">
          #1 most advanced ai healthcare agency
        </Text>
      </Flex>
      <Heading
        fontSize={{ base: 48, md: 64, lg: 84 }}
        color={StargateColors.white}
        lineHeight={1}
        textAlign="center"
      >
        your super personalized
      </Heading>
      <AnimatePresence mode="wait">
        <Heading
          as={motion.h1}
          fontSize={{ base: 48, md: 64, lg: 84 }}
          key={currentWord}
          color={StargateColors.white}
          lineHeight={1}
          initial={{ opacity: 0.2, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0.2, filter: "blur(4px)" }}
        >
          {currentWord}
        </Heading>
      </AnimatePresence>
      <Text
        color={StargateColors.white}
        maxW={300}
        textAlign="center"
        fontWeight="extrabold"
        mt={5}
      >
        Instantly get the right medications for your symptoms with AI-powered recommendations
      </Text>
      <button 
        onClick={() => window.location.href = '/dashboard'}
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF00FF_0%,#87CEFA_50%,#FFA500_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
    Start for free
  </span>
</button>

      <Text
        mt={2}
        as={Link}
        href="/dashboard"
        color={StargateColors.white}
        opacity={0.75}
        fontWeight="extrabold"
        transition="all .25s ease"
        _hover={{ opacity: 1 }}
      >
        Discover NEXAURA.AI💚
      </Text>
      <HeroBottomSVG />
    </Flex>
  );
};

const bgAnimation = keyframes`
  0% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

export default Header;