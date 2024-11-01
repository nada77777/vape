import { createBrowserRouter } from "react-router-dom";

import Root from "./layout/Root";
import Main from "./pages/Main";
import ItemDetailPage from "./pages/Item__detail__page";
import SearchResultPage from "./pages/Search__result__page";

import { DarkModeContextProvider } from "./context/Dark__mode__context";
import { suspenseComponent } from "./api/suspense/suspense";

export const routes = [
  {
    path: "/",
    element: (
      <DarkModeContextProvider>
        <Root />
      </DarkModeContextProvider>
    ),
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/items/:flavor",
        element: suspenseComponent(() => import("@/pages/Items__page")),
      },
      {
        path: "/items/itemdetail/:itemid",
        element: <ItemDetailPage />,
      },
      {
        path: "/items/bookmark",
        element: suspenseComponent(() => import("@/pages/Bookmark__page")),
      },
      {
        path: "/items/search",
        element: <SearchResultPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
