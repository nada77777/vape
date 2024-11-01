import { useState } from "react";
import { GoBookmarkSlash } from "react-icons/go";
import { ImBin2 } from "react-icons/im";

import ListItem from "@/components/List__item/List__item";
import Popup from "@/components/Popup/Popup";

import { removeBookmark } from "@/api/crud/crud";

import S from "@/styles/pages/Bookmark__page.module.scss";

const BookmarkPage = () => {
  const [bookmarkItems, setBookmarkItems] = useState(
    () => JSON.parse(localStorage.getItem("bookmarkItems")) || []
  );

  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handleClick = (item) => {
    setIsOpenPopup((prev) => !prev);
    removeBookmark(bookmarkItems, item, setBookmarkItems);
  };

  const bookmarkItem = bookmarkItems.map((item, index) => (
    <ListItem
      key={index}
      item={item}
      index={index}
      onClick={handleClick}
      icon={<ImBin2 aria-label="북마크 아이템 삭제하기" />}
      text={"Delete"}
    />
  ));

  return (
    <>
      {!bookmarkItems.length && (
        <section className={S.empty__bookmark} aria-live="polite">
          <h1>북마크한 아이템이 없습니다!</h1>
          <div role="alert" aria-label="북마크 항목이 없음">
            <GoBookmarkSlash />
          </div>
        </section>
      )}
      {!!bookmarkItems.length && <h1>Bookmark</h1>}
      <ul aria-label="북마크한 아이템 리스트">{bookmarkItem}</ul>
      {isOpenPopup && (
        <Popup text={"북마크 삭제 완료!"} onClick={setIsOpenPopup} aria-live="polite" />
      )}
    </>
  );
};

export default BookmarkPage;
