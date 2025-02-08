import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainProvider from "./pages/MainProvider.tsx";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainProvider></MainProvider>
  </StrictMode>,
);
