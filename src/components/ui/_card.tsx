import React, { useEffect, useRef } from "react";
import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import magicui from "@/components/ui/magicui"; // Import the animation component

gsap.registerPlugin(ScrollTrigger);

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
    <Flex
      ref={cardRef}
      maxW="360px"
      direction="column"
      align="center"
      bg="white"
      p={6}
      rounded="xl"
      shadow="lg"
      transition="all 0.3s ease"

      position="relative"
      overflow="hidden"
      _hover={{
        transform: "translateY(-20px) scale(1.05)",
        shadow: "2xl",
        scale: 1.05,
        backgroundColor: "rgba(0, 0, 0, 0.02)",
      }}
      border="1px solid"
      borderColor="gray.200"
    >
      {/* MagicUI Animation */}



      {React.createElement(magicui, {
        className: "absolute inset-0"
      })}

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
    </Flex>
  );

};
export default Card;
