import { useRef } from "react";

import { IoChevronBackOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

import { localSearchItem, searchItem } from "@/api/crud/crud";

import S from "./Search__bar.module.scss";
import { useNavigate } from "react-router-dom";
import { bool, func } from "prop-types";

const SearchBar = ({ show, onToggle }) => {
  const navigate = useNavigate();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = inputRef.current.value;
    if (keyword.replace(/\s+/g, "").length < 1) return;
    //localSearchItem(keyword).then((result) => navigate("/items/search", { state: result }));
    searchItem(keyword).then((result) => navigate("/items/search", { state: result }));
    inputRef.current.value = "";
  };

  return (
    <form
      action=""
      className={`${S.form}  ${show ? S.show : ""}`}
      onSubmit={handleSubmit}
      aria-expanded={show}
    >
      <button type="button" name="search" onClick={onToggle} aria-label="검색창 닫기">
        <IoChevronBackOutline />
      </button>
      <label htmlFor="search-input" className={S.sr__only}>
        제품 검색
      </label>
      <input
        id="search-input"
        ref={inputRef}
        type="text"
        placeholder="원하는 제품을 검색해주세요 ex) 동경 바나나"
      />
      <button type="submit" aria-label="검색하기">
        <IoIosSearch />
      </button>
    </form>
  );
};

export default SearchBar;
SearchBar.propTypes = {
  show: bool,
  onToggle: func,
};
