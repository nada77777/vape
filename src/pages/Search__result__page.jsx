import { TbFolderExclamation } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";

import ListItem from "@/components/List__item/List__item";

import { useLocation } from "react-router-dom";

import S from "@/styles/pages/Search__result__page.module.scss";
import { useNavigate } from "react-router-dom";

const SearchResultPage = () => {
  const { state: items } = useLocation();

  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/items/itemdetail/detail`, { state: { item: item } });
  };

  const searchedItems =
    items &&
    items.map((item, index) => (
      <ListItem
        key={index}
        item={item}
        index={index}
        onClick={handleClick}
        icon={<FaPlus />}
        text={"자세히"}
      />
    ));

  return (
    <>
      {!items && (
        <section className={S.nothing__result}>
          <h1>검색어와 일치하는 아이템이 없습니다!</h1>
          <div>
            <TbFolderExclamation />
          </div>
        </section>
      )}
      {items && <h1>검색 결과</h1>}
      {items && <ul>{searchedItems}</ul>}
    </>
  );
};

export default SearchResultPage;
