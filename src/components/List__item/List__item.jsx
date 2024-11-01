import ItemImageContainer from "../ItemImageContainer/Item__image__container";

import { useNavigate } from "react-router-dom";

import S from "./List__item.module.scss";
import { func, number, object, string } from "prop-types";

const ListItem = ({ item, index, onClick, icon, text }) => {
  const navigate = useNavigate();
  const { name, image_url, pg, vg, capacity } = item;

  const handleClick = () => {
    navigate(`/items/itemdetail/${index}`, { state: { item: item } });
  };
  return (
    <li className={S.List__item}>
      <div className={S.image__container__inner}>
        <ItemImageContainer imageUrl={image_url} description={`${name} 상품 이미지`} />
      </div>
      <div
        role="link"
        className={S.List__item__info}
        onClick={handleClick}
        aria-label="아이템 자세히 보기"
      >
        <h2 className={S.List__item__title}>{name}</h2>
        <span className={S.List__item__pg}> PG/VG : {`${pg}:${vg}`} </span>
        <span className={S.List__item__capacity}>{capacity}</span>
      </div>
      <button
        className={S.delete__button}
        onClick={() => onClick(item)}
        aria-label={text === "자세히" ? "자세히 보기" : "북마크 아이템 삭제하기"}
      >
        {icon}
        {text}
      </button>
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  item: object,
  index: number,
  onClick: func,
  icon: object,
  text: string,
};
