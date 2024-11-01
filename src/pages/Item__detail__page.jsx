import { useState } from "react";

import { CURRENT__FLAVOR } from "@/data/data";

import FlavorIcon from "@/components/FlavorIcon/Flavor__icon";
import ItemImageContainer from "@/components/ItemImageContainer/Item__image__container";
import RadarChart from "@/components/RadarChart/Radar__chart";
import BarGraph from "@/components/BarGraph/Bar__graph";
import BannerSwiper from "@/components/BannerSwiper/Banner__swiper";
import Popup from "@/components/Popup/Popup";

import { useLocation } from "react-router-dom";
import { addBookmark } from "@/api/crud/crud";

import S from "@/styles/pages/Item__detail__page.module.scss";

const ItemDetailPage = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const { item } = useLocation().state;

  const { name, category, description, image_url, capacity, pg, vg, attributes } = item;

  const getCurrentFlavor = (category) => {
    const currentFlavor = CURRENT__FLAVOR.filter((item) => item.category === category);
    const others = CURRENT__FLAVOR.filter((item) => item.category !== category).slice(0, 3);
    return [...currentFlavor, ...others];
  };

  const handleClick = () => {
    setIsOpenPopup((prev) => !prev);
    addBookmark(item);
  };

  // 현재 카테고리 버튼을 조건에 따라 활성화
  const currentFlavor = getCurrentFlavor(category).map((item, index) => (
    <div
      key={index}
      className={`${S.flavor__item} ${category === item.category ? S.flavor__item__current : ""}`}
      aria-current={category === item.category ? "true" : ""}
    >
      <FlavorIcon imgSrc={item.path} imgWidth={"70%"} title={item.category} fontSize={"0.8rem"} />
    </div>
  ));

  return (
    <>
      {/* 아이템 상단 정보 */}
      <div className={S.flavorItemDetail}>
        <div className={S.item__info}>
          <h1 className={S.name}>{name}</h1>
          <div className={S.description__container}>
            <p className={S.description}>{description}</p>
          </div>
          <div className={S.pg__ml__flavor}>
            <p className={S.pg__vg}>
              PG/VG : {pg}:{vg}
            </p>
            <p className={S.capacity}>용량 : {capacity}</p>
            <div className={S.flavor__list}>{currentFlavor}</div>
          </div>
          <button
            className={S.bookmark__button}
            onClick={handleClick}
            aria-label="북마크 추가 버튼"
          >
            Bookmark
          </button>
        </div>
        <div className={S.image__container}>
          <div className={S.image__container__inner}>
            <ItemImageContainer imageUrl={image_url} description={`${name} 상품 이미지`} />
          </div>
        </div>
      </div>

      {/* 아이템 하단 정보, 레이더 차트, 그래프 */}
      <div className={S.flavor__data__container}>
        <div className={S.left}>
          <RadarChart item={attributes} />
        </div>
        <BarGraph attributes={attributes} />
      </div>

      {/* 배너 */}
      <BannerSwiper />
      {isOpenPopup && (
        <Popup text={"북마크 추가 완료!"} onClick={setIsOpenPopup} aria-live="polite" />
      )}
    </>
  );
};

export default ItemDetailPage;
