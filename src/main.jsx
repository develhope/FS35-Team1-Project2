import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./Pages/HomePage";
import Form from "./Pages/Form";
import FormIscriviti from "./Pages/FormIscriviti";
import Quiz from "./Pages/Quiz";
import LaDiscalculia from "./Pages/LaDiscalculia";
import Profile from "./Pages/Profile"
import GameSection from "./Components/GameSection";



createRoot(document.getElementById("root")).render(
  <StrictMode>
  <HomePage/>
  <Form/>
  <Quiz/>
  <FormIscriviti/>
  <LaDiscalculia/>
  <Profile/>
  </StrictMode>
);
