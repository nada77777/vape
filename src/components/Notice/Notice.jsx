import S from "./Notice.module.scss";

const Notice = () => {
  return (
    <div className={S.notice} role="alert">
      <h2 className={S.notice__title} aria-label="카테고리별 준비된 액상 안내">
        원하시는 액상이 카테고리별 준비되어 있습니다.
      </h2>
    </div>
  );
};

export default Notice;
