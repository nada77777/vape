import Item from "../Item/Item";

import { useQuery } from "@tanstack/react-query";
import { getData, getDataLocal } from "@/api/crud/crud";

import S from "./Items.module.scss";
import { string } from "prop-types";

const Items = ({ flavor }) => {
  const { isError, data: items } = useQuery({
    queryKey: ["items", flavor],
    queryFn: () => getData(flavor),
    staleTime: 60000,
  });

  const error = isError && <p>{isError}</p>;

  // item 컴포넌트 랜더링
  const item = items && items.map((item, index) => <Item key={index} index={index} item={item} />);

  return (
    <>
      {error}
      <ul className={S.items} aria-label="액상 제품 목록">
        {item}
      </ul>
    </>
  );
};

export default Items;

Items.propTypes = {
  flavor: string.isRequired,
};
