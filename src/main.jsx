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
import GamePage1 from "./Pages/GamePage1";
import GamePage2 from "./Pages/GamePage2";
import GamePage3 from "./Pages/GamePage3";
import GamePage4 from "./Pages/GamePage4";
import AnteprimaGioco1 from "./Pages/AnteprimaGioco1";
import AnteprimaGioco2 from "./Pages/AnteprimaGioco2";
import AnteprimaGioco3 from "./Pages/AnteprimaGioco3";
import AnteprimaGioco4 from "./Pages/AnteprimaGioco4";

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
    <Quiz />
    <AnteprimaGioco1/>
    <AnteprimaGioco2/>
    <AnteprimaGioco3/>
    <AnteprimaGioco4/>
  </StrictMode>
);
