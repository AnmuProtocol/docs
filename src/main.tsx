import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { LanguageProvider } from "./i18n.tsx";
import "./styles.css";

const root = document.getElementById("root");
if (!root) throw new Error("The page root is missing.");

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
);
