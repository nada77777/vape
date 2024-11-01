import { FLAVORS } from "@/data/data";

import FlavorIcon from "../FlavorIcon/Flavor__icon";

import S from "./Flavor__categories.module.scss";

import { useNavigate } from "react-router-dom";

const FlavorCategories = () => {
  const navigate = useNavigate();

  const flavorItem = FLAVORS.map(({ title, category, path }, index) => (
    <li key={index} onClick={() => navigate(`/items/${category}`)} role="button" tabIndex="0">
      <FlavorIcon
        title={title}
        imgSrc={path}
        iconType="block"
        captionMargin={"0.5rem"}
        borderRadius={"0px"}
      />
    </li>
  ));

  return (
    <ul className={S.flavorItmes} aria-label="카테고리">
      {flavorItem}
    </ul>
  );
};

export default FlavorCategories;
