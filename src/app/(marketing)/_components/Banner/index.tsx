"use client";
import useBannerVisibility from "@/utils/BannerVisibility";
import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { LuX } from "react-icons/lu";

const Banner = () => {
  const [showBanner, setShowBanner] = useBannerVisibility("stargate-banner");

  return showBanner ? (
    <Flex
      justify={"center"}
      h={"45px"}
      bgGradient="linear(to-r, #f4d03f, #ff6f61, #ff4757)"
      w="100%"
      align={"center"}
    >
      <Text
        fontSize={{
          base: "md",
          md: "lg",
        }}
        color={"white"}
        fontWeight={700}
        mr={4}
      >
        Exclusive Offer
      </Text>
      <Text
        fontSize={{
          base: "xs",
          md: "sm",
        }}
        color={"white"}
        fontWeight={600}
        maxW="80%"
        textAlign="center"
      >
        Unlock a lifetime subscription to our Enterprise Plan for just $249 a 75% discount from the original price of $999.
        </Text>
      <Icon
        as={LuX}
        color={"white"}
        fontSize={"lg"}
        cursor={"pointer"}
        ml={2}
        onClick={() => {
          localStorage.setItem("stargate-banner", "true");
          setShowBanner(false);
        }}
      >
        Close
      </Icon>
    </Flex>
  ) : null;
};

export default Banner;