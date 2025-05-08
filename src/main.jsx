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
import AnteprimaGioco1 from "./Pages/AnteprimaGioco1";
import AnteprimaGioco2 from "./Pages/AnteprimaGioco2";
import AnteprimaGioco3 from "./Pages/AnteprimaGioco3";
import AnteprimaGioco4 from "./Pages/AnteprimaGioco4";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePage />
    <Form />
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
