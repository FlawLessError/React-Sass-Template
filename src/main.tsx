import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainProvider from "./pages/MainProvider.tsx";

import "./sass/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainProvider></MainProvider>
  </StrictMode>,
);
