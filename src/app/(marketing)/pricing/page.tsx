"use client"
import { StargateColors } from "@/utils/Colors";
import {
  Badge,
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";
import { ConfettiRef } from '@/components/ui/confetti';
import ConfettiComponent from '@/components/ui/confetticomponent';
import Testimonials from "@/components/Testimonials";
import BrandSlide from "@/components/BrandSlide";

export default function TheEnd() {
  const confettiRef = useRef<ConfettiRef>(null);

  const Pricing = () => {
    const [currentBilling, setCurrentBilling] = useState("monthly");

    
    const plans = [
      {
        name: "Basic",
        price: currentBilling === "monthly" ? "$0" : "$0",
        features: [
          "AI Diagnostics: limited access",
          "Health profile",
          "5 Free trail of Cancer Detection",
          "Patient Dashboard: Insightful data trends",
          "Secure Data: HIPAA-compliant encryption",
          "Multilingual: Global language support",
          "Medical Templates: Standardized workflow automation",
          "Limited support  ",
        ],
      },
      {
        name: "Premium",
        price: currentBilling === "monthly" ? "$199" : "$1990",
        features: [
          "Everything in Basic, plus:",
          "Extremely personalized health profile",
          "AI Prediction: Early condition detection",
          "Unlimited Medication recommendations",
          "Advanced Analytics: Predictive health insights",
          "Secure Payments: Seamless billing integration",
          "Custom Templates: Personalized healthcare workflows",
          "AI-powered symptom suggestions(advanced protocol)",
          "Priority Support: Faster response times",
        ],
        borderGradient: currentBilling === "monthly"
          ? "linear-gradient(90deg, #f72585, #7209b7)"
          : "linear-gradient(90deg, #ff7e5f, #feb47b)",
      },
      {
        name: "Enterprise",
        price: currentBilling === "monthly" ? "$999" : "$9990",
        features: [
          "Everything in Premium, plus:",
          "AI-Powered Diagnostics: Specialized detection tools",
          "Command Center: Full data control",
          "🎉Unlimited access to cancer dectection model ",
          "Global Languages: Comprehensive language suite",
          "Exclusive Templates: Custom medical solutions",
          "Dedicated Support: Personal account manager",
        ],
      },
    ];
    return (
      <Flex
        id="pricing"
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
          base: 6,
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
          Pricing
        </Heading>
        <Flex
          mt={6}
          gap={2}
          p={2}
          borderRadius={16}
          border={`1px solid ${StargateColors.lightBg}`}
        >
          <Flex
            key={"monthly"}
            cursor={"pointer"}
            onClick={() => setCurrentBilling("monthly")}
            px={4}
            py={2}
            borderRadius={12}
            transition={"all 0.25s ease"}
            {...(currentBilling === "monthly" && {
              bgColor: StargateColors.black,
            })}
          >
            <Text
              fontWeight={"bold"}
              fontSize={"sm"}
              color={
                currentBilling === "monthly"
                  ? StargateColors.white
                  : StargateColors.grey
              }
            >
              Monthly
            </Text>
          </Flex>
          <Flex
            key={"annual"}
            cursor={"pointer"}
            onClick={() => {
              setCurrentBilling("annual");
              confettiRef.current?.fire();
            }}
            gap={2}
            justify={"center"}
            align={"center"}
            px={4}
            py={2}
            borderRadius={12}
            transition={"all 0.25s ease"}
            {...(currentBilling === "annual" && {
              bgColor: StargateColors.black,
            })}
          >
            <Text
              fontWeight={"bold"}
              fontSize={"sm"}
              color={
                currentBilling === "annual"
                  ? StargateColors.white
                  : StargateColors.grey
              }
            >
              Annual
            </Text>
            <Badge
              borderRadius={"full"}
              px={2}
              bg={
                currentBilling === "annual"
                  ? StargateColors.white
                  : StargateColors.primary
              }
              color={
                currentBilling === "annual"
                  ? StargateColors.black
                  : StargateColors.white
              }
            >
              2 months free🎉
              <ConfettiComponent
                ref={confettiRef}
              />
            </Badge>
          </Flex>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={6}
          w={"100%"}
          mt={6}
        >
          <AnimatePresence mode="wait">
            {plans.map((plan) => (
              <Flex
                as={motion.div}
                key={`${plan.name}-${currentBilling}`}
                p={4}
                direction={"column"}
                w={"100%"}
                border={`1px solid ${StargateColors.lightBg}`}
                borderRadius={18}
                color={StargateColors.black}
                layout
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.2 }}
                transition={"all 0.25s ease"}
                style={{
                  borderImage: plan.name === "Premium" ? `${plan.borderGradient} 1` : undefined
                }}
              >
                <Text
                  as="h3"
                  fontSize="sm"
                  textAlign="center"
                  mb={4}
                  color={StargateColors.grey}
                >
                  {plan.name}
                </Text>
                <Stack mb={4}>
                  <Heading
                    fontSize={{
                      base: "3xl",
                      md: "4xl",
                    }}
                    textAlign="center"
                    fontWeight={600}
                  >
                    {plan.price}
                  </Heading>
                  <Text
                    textAlign="center"
                    fontSize="sm"
                    color={StargateColors.grey}
                  >
                    {currentBilling}
                  </Text>
                </Stack>
                <Stack spacing={3} mb={6}>
                  {plan.features.map((feature) => (
                    <Flex
                      align={"flex-start"}
                      key={`${feature}-${currentBilling}`}
                    >
                      <Flex
                        bg={`${StargateColors.primary}25`}
                        mr={2}
                        borderRadius={"full"}
                        p={1}
                      >
                        <Icon as={LuCheck} color={StargateColors.primary} />
                      </Flex>
                      <Text key={feature}>{feature}</Text>
                    </Flex>
                  ))}
                </Stack>
                <Button
                  mt={"auto"}
                  w="full"
                  {...(plan.name === "Enterprise"
                    ? {
                        bg: StargateColors.primary,
                        color: StargateColors.white,
                        _hover: {
                          bg: StargateColors.primary,
                          color: StargateColors.white,
                          opacity: 0.8,
                        },
                      }
                    : {})}
                >
                  Choose {plan.name}
                </Button>
              </Flex>
            ))}
          </AnimatePresence>
        </Stack>
      </Flex>
    );
  };
  
  return (
    <>
      <Pricing />
      
      <Testimonials />
      <div className="text-5xl font-extrabold text-center mt-4 pr-4 bg-clip-text text-transparent bg-gradient-to-b from-red-500 via-amber-400 to-amber-700">
  Companies that trust us
  <BrandSlide />
</div>
    </>
  );
} 
