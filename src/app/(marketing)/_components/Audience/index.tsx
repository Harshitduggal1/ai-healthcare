"use client"


import { Box, Flex, Grid, Heading, Text, keyframes } from "@chakra-ui/react";
import React, { ReactNode } from "react";

// Create gradient animation keyframes
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Audience = () => {
  return (
    <Flex
      id="audience"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      px={2}
      maxW={1200}
      mx={"auto"}
    >
      <Heading
        fontSize={{
          base: 32,
          md: 48,
        }}
        textAlign={"center"}
        mb={10}
        lineHeight="1.2"
      >
        With{" "}
        <Text
          as="span"
          bgGradient="linear(to-r, #ff0080, #7928ca, #2b86c5)"
          bgClip="text"
          fontWeight="bold"
          animation={`${gradientAnimation} 3s ease infinite`}
        >
          NEXAURA.AI
        </Text>
        , unlock solutions for the most pressing healthcare challenges
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={6}
        w={{
          base: "auto",
          xl: "full",
        }}
      >
        {Cards.map((card) => (
          <Card key={card.title} color={card.color}>
            {card.title}
          </Card>
        ))}
      </Grid>
      <Heading
        fontSize={{
          base: 16,
          md: 24,
          lg: 32,
        }}
        textAlign={"center"}
        mt={10}
        opacity={0.8}
      >
        and many more healthcare innovations.
      </Heading>
    </Flex>
  );
};

interface CardProps {
  color: string;
  children: ReactNode;
}

const Card = ({ color, children }: CardProps) => {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      bg={`${color}25`}
      px={8}
      py={6}
      rounded={"xl"}
      transition={"all 0.3s ease"}
      _hover={{
        boxShadow: `0px 8px 50px 5px ${color}55`,
        transform: "scale(1.05)",
      }}
      textAlign={"center"}
    >
      <Box
        mr={4}
        w={3}
        h={3}
        bg={color}
        rounded={"full"}
        outline={"6px solid white"}
      />
      <Text
        color={color}
        fontSize={{
          base: 14,
          md: 16,
          lg: 18,
        }}
        fontWeight={600}
      >
        {children}
      </Text>
    </Flex>
  );
};

const Cards = [
  {
    title: "Brain Tumor Diagnosis",
    color: "#E6990B",
  },
  {
    title: "Cancer Prevention",
    color: "#A431C7",
  },
  {
    title: "Chronic Disease Management",
    color: "#42C9B2",
  },
  {
    title: "AI-Powered Health Monitoring",
    color: "#348FDA",
  },
  {
    title: "Personalized Medicine",
    color: "#41B668",
  },
  {
    title: "Preventive Healthcare Solutions",
    color: "#DA4D8F",
  },
];

export default Audience;