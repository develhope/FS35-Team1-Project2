import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./app";
import { UserProvider } from "./UserContext";
import { PointsProvider } from "./PointsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PointsProvider>
          <App />
        </PointsProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
