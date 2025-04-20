import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./Pages/HomePage";
import LaDiscalculia from "./Pages/LaDiscalculia";
import PaginaForm from "./Components/SezionePaginaForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PaginaForm />
  </StrictMode>
);
