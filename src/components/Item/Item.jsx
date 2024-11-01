import ItemImageContainer from "../ItemImageContainer/Item__image__container";
import { FaChevronRight } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import S from "./Item.module.scss";
import { number, object } from "prop-types";

const Item = ({ item, index }) => {
  const navigate = useNavigate();

  // item 구조 분해 할당
  const { name, image_url: imageUrl } = item;

  // 클릭 시 index를 통한 경로 설정 및 item을 state로 전달
  const handleClick = () => {
    navigate(`/items/itemdetail/${index}`, { state: { item: item } });
  };

  return (
    <li className={S.item}>
      <a onClick={handleClick}>
        <div className={S.item__image__container}>
          <ItemImageContainer imageUrl={imageUrl} description="상품 이미지" />
        </div>
        <div className={S.description}>
          <h2 className={S.title}>{name}</h2>
          <button type="button" className={S.button} aria-label="자세히 보기">
            <FaChevronRight />
          </button>
        </div>
      </a>
    </li>
  );
};

export default Item;

Item.propTypes = {
  item: object,
  index: number,
};
