// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const reactApp = document.getElementById("react-app");

createRoot(reactApp).render(<RouterProvider router={router} />);
