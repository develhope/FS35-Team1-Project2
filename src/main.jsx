import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./Pages/HomePage";
import Form from "./Pages/Form";
import FormIscriviti from "./Pages/FormIscriviti";
import Quiz from "./Pages/Quiz";
import LaDiscalculia from "./Pages/LaDiscalculia";
import Profile from "./Pages/Profile";
import Shop from "./Pages/Shop";
import GamePage1 from "./Components/GamePage1";
import GamePage2 from "./Components/GamePage2";
import GamePage3 from "./Components/GamePage3";
import GamePage4 from "./Components/GamePage4";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePage />
    <Form />
    <Quiz />
    <GamePage1 />
    <GamePage2 />
    <GamePage3 />
    <GamePage4 />
    <FormIscriviti />
    <LaDiscalculia />
    <Profile />
    <Shop />
  </StrictMode>
);
