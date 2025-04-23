import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Form from "./Pages/Form";
import FormIscriviti from "./Pages/FormIscriviti";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Form/>
    <FormIscriviti/>
  </StrictMode>
);
