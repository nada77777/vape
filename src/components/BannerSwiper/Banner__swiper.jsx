import { BANNER__IMAGES } from "@/data/data";

import Banner from "../Banner/Banner";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import S from "./Banner__swiper.module.scss";

//스와이퍼 옵션
const SWIPER__OPTIONS = {
  modules: [EffectFade, Autoplay],
  effect: "fade",
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  loop: true,
};

const BannerSwiper = () => {
  //스와이퍼 슬라이드
  const swiperSlide = BANNER__IMAGES.map((image, index) => (
    <SwiperSlide key={index}>
      <Banner imgSrc={image} />
    </SwiperSlide>
  ));
  console.log("banner");
  return (
    <div className={S.banner__swiper__container} aria-label="광고 배너">
      <Swiper {...SWIPER__OPTIONS}>{swiperSlide}</Swiper>
    </div>
  );
};

export default BannerSwiper;
