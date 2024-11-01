import { func, string } from "prop-types";
import S from "./Popup.module.scss";

const Popup = ({ text, onClick }) => {
  return (
    <div
      className={S.popup}
      role="alertdialog"
      aria-labelledby="popup-title"
      aria-describedby="popup-description"
      aria-live="polite"
    >
      <h1 id="popup-title" className={S.title}>
        알림
      </h1>
      <p id="popup-description" className={S.description}>
        {text}
      </p>
      <button className={S.close__button} onClick={() => onClick((prev) => !prev)}>
        닫기
      </button>
    </div>
  );
};

export default Popup;

Popup.propTypes = {
  text: string,
  onClick: func,
};
