import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

import Header from "@/components/Header/Header";
import FixScroll from "@/components/FixScroll/Fix__scroll";

import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useDarkModeContext } from "@/context/Dark__mode__context";

import S from "./Root.module.scss";
import "@/styles/utils/theme.scss";
const queryClient = new QueryClient();

const Root = () => {
  const { darkMode, toggleDarkMode } = useDarkModeContext();
  console.log("root");
  return (
    <QueryClientProvider client={queryClient}>
      <div className={S.root}>
        <Header />
        <Outlet />
        <button className={S.darkMode__button} onClick={toggleDarkMode}>
          {darkMode ? <FaMoon /> : <IoSunny />}
        </button>
      </div>
      <ReactQueryDevtools initialIsOpen={true} />
      <FixScroll />
    </QueryClientProvider>
  );
};

export default Root;
