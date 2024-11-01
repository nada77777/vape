import { lazy, Suspense } from "react";
import Loading from "@/components/Loading/Loading";

export function suspenseComponent(path, props = null) {
  const Component = lazy(path);

  // 로딩창 확인용
  // const Component = lazy(
  //   () =>
  //     new Promise((resolve) => {
  //       setTimeout(() => resolve(path()), 1500);
  //     })
  // );
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
}
