import { string } from "prop-types";
import S from "./Banner.module.scss";

const Banner = ({ imgSrc }) => {
  return (
    <div className={S.banner__image__container}>
      <img className={S.banner__image} src={imgSrc} alt="배너 이미지" />
    </div>
  );
};

export default Banner;

Banner.propTypes = {
  imgSrc: string.isRequired,
};
