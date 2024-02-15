"use client";
import { useEffect, useRef, useState } from "react";
import classes from "./social.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { EffectCards } from "swiper/modules";

import dao from "@/public/images/social/swip/dao.svg";
import transaction from "@/public/images/social/swip/crypto-transaction.svg";
import bran from "@/public/images/social/swip/self-bran.svg";
import tipRain from "@/public/images/social/swip/tip-rain.svg";
import multipleLanguage from "@/public/images/social/swip/multiple-language.svg";
import subscription from "@/public/images/social/swip/subscription.svg";
import referal from "@/public/images/social/swip/referal.svg";
import Image from "next/image";
import { Flex, Title, Box, Button, Stack } from "@mantine/core";
import LangArrow from "@/app/[locale]/icons/navabr-lang-arrow";

const content = [
  {
    title: "Dao",
    subtitle:
      "Offering a dynamic balance based membership solution for all tokenized communities. Users gain access & authority by verifying their crypto assets.",
    image: dao,
  },
  {
    title: "Simple & Fast Crypto Transaction",
    subtitle:
      "Send, receive and exchange crypto with a single line of command.",
    image: transaction,
  },
  {
    title: "Self-Branding With Exclusive Bot",
    subtitle:
      "Easily create your exclusive powerful bot without coding and all Cwallet Bot features. Serve your community with your own customized bot and take branding to the next level.",
    image: bran,
  },
  {
    title: "Tip, Rain Or Airdrop For Community Fun",
    subtitle:
      "Send & receive tokens with crypto tips, airdrops and rains. Boost the fun and activity within your community.",
    image: tipRain,
  },
  {
    title: "Multiple Language Options",
    subtitle:
      "30+ languages made for over 60 countries and regions with new languages updated regularly.",
    image: multipleLanguage,
  },
  {
    title: "Subscription And Membership",
    subtitle:
      "Creating your own paid subscription community, Cwallet enables all content creators to be financially sustainable and independent.",
    image: subscription,
  },
  {
    title: "Referral Program",
    subtitle:
      "Customized for you to gain more traffic and visibility. Most suitable for crypto start-ups and project owners.",
    image: referal,
  },
];

export default function ContentWithSwip() {
  const [slidesData, setSlidesData] = useState(content);

  const [currentSlide, setCurrentSlide] = useState(slidesData[2]);

  const handleSlideChange = (swiper: any) => {
    const { activeIndex } = swiper;
    setCurrentSlide(slidesData[activeIndex]);
  };

  return (
    <Flex
      p={30}
      className={classes.sweipParent}
      wrap={"wrap"}
      direction={{
        base: "column",
        md: "row",
      }}
    >
      {/* Swiper component */}
      <Box className="swipParent">
        <Swiper
          onSlideChange={handleSlideChange}
          modules={[Navigation, Scrollbar, A11y, EffectCards]}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          effect={"cards"}
          grabCursor={true}
          className={classes.swiper}
        >
          {content.map((slide, index) => (
            <SwiperSlide key={`slide-${index}`}>
              <Image src={slide.image} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="arrow-left arrow">
          <LangArrow className="rotate_-90" />
        </button>
        <button className="arrow-right arrow">
          <LangArrow className="rotate_90" />
        </button>
      </Box>

      {/* Display the title and subtitle of the current slide */}
      <Stack className="slide-details" align="center">
        <Title order={2} mb={0}>
          {currentSlide.title}
        </Title>
        <Box component="p">{currentSlide.subtitle}</Box>
      </Stack>
    </Flex>
  );
}
