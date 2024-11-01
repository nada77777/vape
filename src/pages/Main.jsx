import Notice from "@/components/Notice/Notice";
import FlavorCategories from "@/components/FlavorCategories/Flavor__categories";
import BannerSwiper from "@/components/BannerSwiper/Banner__swiper";

import S from "@/styles/pages/Main.module.scss";
import ItemImageContainer from "@/components/ItemImageContainer/Item__image__container";

const Main = () => {
  return (
    <div className={S.main}>
      {/* <img className={S.banner} src="/images/banner/mainbanner.webp" /> */}
      <div className={S.banner}>
        <ItemImageContainer
          imageUrl={"/images/banner/mainbanner.webp"}
          description={"메인 배너 이미지"}
        />
      </div>
      <Notice />
      <FlavorCategories />
      <BannerSwiper />
    </div>
  );
};

export default Main;
