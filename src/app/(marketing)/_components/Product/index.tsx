"use client";
import { StargateColors } from "@/utils/Colors";
import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Detection from "./categories/Detection";
import Personalization from "./categories/Personalization";
import Emergency from "./categories/Emergency";
import Analytics from "./categories/Analytics";
import Recommendation from "./categories/Recommendation";
import Monitoring from "./categories/Monitoring";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Cover } from "@/components/ui/cover";

const Product = () => {
  const [currentCategory, setCurrentCategory] = useState("Detection");

  return (
    <Flex
      id="product"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      pt={6}
      pb={{
        base: 6,
        md: 12,
      }}
      px={{
        base: 0,
        md: 10,
      }}
      maxW={1200}
      mx={{
        base: 2,
        xl: "auto",
      }}
      border={`1px solid ${StargateColors.lightBg}`}
      borderRadius={24}
    >
      <Heading textAlign={"center"} px={2}>
         <Cover>Solutions we offer</Cover>
      </Heading>
      <Flex
        gap={4}
        py={{
          base: 5,
          md: 4,
        }}
        px={4}
        mt={5}
        borderBottom={{
          base: `1px solid ${StargateColors.lightBg}`,
          md: "none",
        }}
        justify={{
          base: "flex-start",
          md: "center",
        }}
        overflowX={"scroll"}
        w={"100%"}
        className="hide-scrollbar"
      >
        {Categories.map((category) => (
          <Flex
            key={category}
            cursor={"pointer"}
            onClick={() => setCurrentCategory(category)}
            px={4}
            py={2}
            w={"fit-content"}
            flexWrap={"nowrap"}
            borderRadius={12}
            transition={"all 0.25s ease"}
            {...(currentCategory === category
              ? {
                  bgColor: StargateColors.black,
                  shadow: "lg",
                }
              : {})}
          >
            <Text
              fontWeight={"extrabold"}
              fontSize={"sm"}
              whiteSpace={"nowrap"}
              color={
                currentCategory === category
                  ? StargateColors.white
                  : StargateColors.grey
              }
            >
              {category}
            </Text>
          </Flex>
        ))}
      </Flex>
      <AnimatePresence mode="wait">
        {Object.entries(categoryComponents).map(
          ([key, Component]) =>
            currentCategory === key && (
              <motion.div
                key={key}
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.2 }}
                transition={{ duration: 0.25 }}
                layout
              >
                <Component />
              </motion.div>
            )
        )}
      </AnimatePresence>
    </Flex>
  );
};

const categoryComponents = {
  Detection: Detection,
  Personalization: Personalization,
  Emergency: Emergency,
  Analytics: Analytics,
  Recommendation: Recommendation,
  Monitoring: Monitoring,
};

const Categories = [
  "Detection",
  "Personalization",
  "Emergency",
  "Analytics",
  "Recommendation",
  "Monitoring",
];

export default Product;