import { useState } from "react";

import { NAV__LIST } from "@/data/data";
import SearchBar from "../Search__bar/Search__bar";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { GiRoundBottomFlask } from "react-icons/gi";
import { RiBookmark3Fill } from "react-icons/ri";

import { useNavigate } from "react-router-dom";

import S from "./Header.module.scss";

const Header = () => {
  //useRef로 나중에 바꿔?
  const [isOpen, setIsOpen] = useState({ menu: false, search: false });

  const navigate = useNavigate();

  const handleToggle = (e) => {
    const { name, dataset } = e.currentTarget;
    const currentSection = name || dataset.name;
    setIsOpen((prev) => ({ ...prev, [currentSection]: !isOpen[currentSection] }));
  };

  const hanleClick = (pathName) => {
    navigate(`/items/${pathName}`);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className={S.header}>
        <button
          type="button"
          name="menu"
          className={S.menu__button}
          onClick={handleToggle}
          aria-label="메뉴 열기"
        >
          <RxHamburgerMenu className={S.icon} />
        </button>
        {!isOpen.search && (
          <h1 className={S.header__title} onClick={() => navigate("/")}>
            Vape - Juice
          </h1>
        )}
        {!isOpen.search && (
          <button
            type="button"
            name="search"
            className={S.search__button}
            onClick={handleToggle}
            aria-label="검색창 열기"
          >
            <IoIosSearch className={S.icon} />
          </button>
        )}

        <nav
          className={`${S.side__header} ${isOpen.menu ? S.active : ""}`}
          role="navigation"
          aria-hidden={!isOpen.menu}
          aria-label="메뉴"
        >
          <ul className={S.side__header__lists}>
            <li>
              <button type="button" name="menu" onClick={handleToggle} aria-label="메뉴 닫기">
                X
              </button>
            </li>
            <li onClick={() => hanleClick("bookmark")}>
              <a aria-label="북마크 페이지로 이동하기">
                <RiBookmark3Fill />
                북마크
              </a>
            </li>
            {NAV__LIST.map(({ title, path }, index) => (
              <li key={index} onClick={() => hanleClick(path)}>
                <a aria-label={`${title} 카테고리 페이지로 이동`}>
                  <GiRoundBottomFlask />
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <SearchBar show={isOpen.search} onToggle={handleToggle} />
      </header>
      {isOpen.menu && (
        <div className={S.dark} data-name="menu" onClick={handleToggle} aria-hidden="true"></div>
      )}
    </>
  );
};

export default Header;
