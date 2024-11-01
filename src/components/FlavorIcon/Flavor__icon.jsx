import { oneOf, string } from "prop-types";

import S from "./Flavor__icon.module.scss";

const FlavorIcon = ({
  imgSrc,
  imgWidth = "100%",
  title,
  iconType = "block",
  fontSize = "1rem",
  captionMargin = "0",
  borderRadius = "6px",
}) => {
  return (
    <figure className={iconType === "block" ? `${S.block}` : `${S.flex}`}>
      <img
        src={imgSrc}
        style={{ width: imgWidth, borderRadius: borderRadius }}
        alt={`${title} 아이콘`}
      />
      <figcaption style={{ fontSize: fontSize, margin: captionMargin }}>{title}</figcaption>
    </figure>
  );
};

export default FlavorIcon;

FlavorIcon.propTypes = {
  imgSrc: string.isRequired,
  imgWidth: string,
  title: string.isRequired,
  iconType: oneOf(["block", "flex"]),
  fontSize: string,
  captionMargin: string,
  borderRadius: string,
};
