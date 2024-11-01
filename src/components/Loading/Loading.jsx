import S from "./Loading.module.scss";

const Loading = () => {
  return (
    <section className={S.section} role="status" aria-live="polite">
      <div className={S.loading} aria-hidden="true"></div>
      <p className={S.title}>잠시만 기다려주세요</p>
    </section>
  );
};

export default Loading;
