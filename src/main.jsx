import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./Pages/HomePage";
import LaDiscalculia from "./Pages/LaDiscalculia";
import Profile from "./Pages/Profile";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePage />
    <Profile />
    <LaDiscalculia />
  </StrictMode>
);
