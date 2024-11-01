import { FLAVORS } from "@/data/data";
import FlavorIcon from "@/components/FlavorIcon/Flavor__icon";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss"; // Swiper 기본 SCSS
import "swiper/scss/scrollbar"; // Scrollbar 관련 SCSS

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import S from "@/styles/pages/ItemsPage.module.scss";
import { suspenseComponent } from "@/api/suspense/suspense";

// 스와이퍼 옵션
const SWIPER__OPTIONS = {
  direction: "horizontal",
  spaceBetween: 0,
  slidesPerView: 4,
};

const ItemsPage = () => {
  const { flavor } = useParams();
  const navigate = useNavigate();

  //스와이퍼 슬라이드
  const swiperSlide = FLAVORS.map(({ category, path }, index) => (
    <SwiperSlide key={index}>
      <button
        type="button"
        className={`${S.category__button} ${flavor === category ? S.active : ""}`}
        onClick={() => navigate(`/items/${category}`)}
        aria-label={`${category} 액상 카테고리로 이동하기`}
        aria-selected={flavor === category}
      >
        <FlavorIcon imgSrc={path} imgWidth="20%" title={category} iconType="flex" />
      </button>
    </SwiperSlide>
  ));

  return (
    <section aria-labelledby="items-page-title">
      <div className={S.title__container}>
        <h1 id="items-page-title">원하는 액상의 정보를 확인해보세요!</h1>
        <p>카테고리별로 다양한 액상을 모아놓았습니다</p>
      </div>
      <div className={S.swiper__container}>
        <Swiper {...SWIPER__OPTIONS}>{swiperSlide}</Swiper>
      </div>
      {suspenseComponent(() => import("@/components/Items/Items"), { flavor })}
    </section>
  );
};

export default ItemsPage;
