import phoneLight from "@/public/images/custodialSub.48ef2441.png";
import phoneDark from "@/public/images/nonCustodialSub.134b53cc.png";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

import classes from "./combinedWallet.module.css";

import "swiper/css";

export default function Swip(props: { light?: boolean }) {
  const { light } = props;
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src={light ? phoneLight : phoneDark}
            alt="phone"
            className={classes.phonePhoto}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={light ? phoneDark : phoneLight}
            alt="phone"
            className={classes.phonePhoto}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
