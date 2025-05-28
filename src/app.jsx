import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/HomePage";
import Form from "./Pages/Form";
import FormIscriviti from "./Pages/FormIscriviti";
import Quiz from "./Pages/Quiz";
import LaDiscalculia from "./Pages/LaDiscalculia";
import Profile from "./Pages/Profile";
import RestartPage from "./Pages/RestartPage.jsx";
import Shop from "./Pages/Shop";
import GamePage1 from "./Pages/GamePage1";
import GamePage2 from "./Pages/GamePage2";
import GamePage3 from "./Pages/GamePage3";
import GamePage4 from "./Pages/GamePage4";
import AnteprimaGioco1 from "./Pages/AnteprimaGioco1";
import AnteprimaGioco2 from "./Pages/AnteprimaGioco2";
import AnteprimaGioco3 from "./Pages/AnteprimaGioco3";
import AnteprimaGioco4 from "./Pages/AnteprimaGioco4";

import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import HeaderGiochi from "./Components/HeaderGiochi";

import Struttura1Gioco from "./Giochi/Gioco1/Struttura1Gioco";
import Struttura3Gioco from "./Giochi/Gioco3/Struttura3Gioco";
import Struttura4Gioco from "./Giochi/Gioco4/Struttura4Gioco";
import Struttura2Gioco from "./Giochi/Gioco2/Struttura2Gioco";

import Livello1Gioco1 from "./Giochi/Gioco1/Livello1Gioco1";
import Livello2Gioco1 from "./Giochi/Gioco1/Livello2Gioco1";
import Livello3Gioco1 from "./Giochi/Gioco1/Livello3Gioco1";
import Livello4Gioco1 from "./Giochi/Gioco1/Livello4Gioco1";
import VittoriaGioco1 from "./Giochi/Gioco1/VittoriaGioco1.jsx";

import Livello1Gioco3 from "./Giochi/Gioco3/Livello1Gioco3";
import Livello2Gioco3 from "./Giochi/Gioco3/Livello2Gioco3";
import Livello3Gioco3 from "./Giochi/Gioco3/Livello3Gioco3";
import Livello4Gioco3 from "./Giochi/Gioco3/Livello4Gioco3";
import VittoriaGioco3 from "./Giochi/Gioco3/VittoriaGioco3.jsx";

import Livello1Gioco4 from "./Giochi/Gioco4/Livello1Gioco4";
import Livello2Gioco4 from "./Giochi/Gioco4/Livello2Gioco4";
import Livello3Gioco4 from "./Giochi/Gioco4/Livello3Gioco4";
import Livello4Gioco4 from "./Giochi/Gioco4/Livello4Gioco4";
import VittoriaGioco4 from "./Giochi/Gioco4/VittoriaGioco4.jsx";


import Livello1Gioco2 from "./Giochi/Gioco2/Livello1Gioco2";
import Livello2Gioco2 from "./Giochi/Gioco2/Livello2Gioco2";
import Livello3Gioco2 from "./Giochi/Gioco2/Livello3Gioco2";
import Livello4Gioco2 from "./Giochi/Gioco2/Livello4gioco2";
import Livello5Gioco2 from "./Giochi/Gioco2/Livello5Gioco2";
import Login from "./Pages/Login.jsx"




function App() {
  const location = useLocation();
  const path = location.pathname;

  const isGioco2Path =
    path.startsWith("/struttura2gioco") || path.includes("gioco2");

  const isVittoriaPath = path.startsWith("/vittoria"); // ✅ Gestisce tutti i "vittoriagiocoX"

  let gameLevelHeaderTitle = null;
  const matchLivelloGioco = path.match(/\/livello(\d+)gioco(\d+)/);

  if (matchLivelloGioco) {
    const livello = matchLivelloGioco[1];
    const gioco = matchLivelloGioco[2];
    if (gioco !== "2") {
      gameLevelHeaderTitle = `Livello ${livello}`;
    }
  }

  return (
    <>
      {/* ✅ Non mostra l'Header se sei in una schermata di vittoria */}
      {!isGioco2Path && !isVittoriaPath &&
        (gameLevelHeaderTitle ? (
          <HeaderGiochi titolo={gameLevelHeaderTitle} />
        ) : (
          <Header />
        ))}

      <main className="min-h-screen relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/restart" element={<RestartPage />} />
          <Route path="/gamepage-1" element={<GamePage1 />} />
          <Route path="/gamepage-2" element={<GamePage2 />} />
          <Route path="/gamepage-3" element={<GamePage3 />} />
          <Route path="/gamepage-4" element={<GamePage4 />} />
          <Route path="/form-iscriviti" element={<FormIscriviti />} />
          <Route path="/la-discalculia" element={<LaDiscalculia />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/anteprimagioco1" element={<AnteprimaGioco1 />} />
          <Route path="/anteprimagioco2" element={<AnteprimaGioco2 />} />
          <Route path="/anteprimagioco3" element={<AnteprimaGioco3 />} />
          <Route path="/anteprimagioco4" element={<AnteprimaGioco4 />} />
          <Route path="/sidebar" element={<Sidebar />} />

          <Route path="/struttura1gioco" element={<Struttura1Gioco />} />
          <Route path="/struttura2gioco" element={<Struttura2Gioco />} />
          <Route path="/struttura3gioco" element={<Struttura3Gioco />} />
          <Route path="/struttura4gioco" element={<Struttura4Gioco />} />
          
          <Route path="/livello1gioco1" element={<Livello1Gioco1 />} />
          <Route path="/livello2gioco1" element={<Livello2Gioco1 />} />
          <Route path="/livello3gioco1" element={<Livello3Gioco1 />} />
          <Route path="/livello4gioco1" element={<Livello4Gioco1 />} />
          <Route path="/vittoriagioco1" element={<VittoriaGioco1 />} />

          <Route path="/livello1gioco2" element={<Livello1Gioco2 />} />
          <Route path="/livello2gioco2" element={<Livello2Gioco2 />} />
          <Route path="/livello3gioco2" element={<Livello3Gioco2 />} />
          <Route path="/livello4gioco2" element={<Livello4Gioco2 />} />
          <Route path="/livello5gioco2" element={<Livello5Gioco2 />} />

          <Route path="/livello1gioco3" element={<Livello1Gioco3 />} />
          <Route path="/livello2gioco3" element={<Livello2Gioco3 />} />
          <Route path="/livello3gioco3" element={<Livello3Gioco3 />} />
          <Route path="/livello4gioco3" element={<Livello4Gioco3 />} />
          <Route path="/vittoriagioco3" element={<VittoriaGioco3 />} />

          <Route path="/livello1gioco4" element={<Livello1Gioco4 />} />
          <Route path="/livello2gioco4" element={<Livello2Gioco4 />} />
          <Route path="/livello3gioco4" element={<Livello3Gioco4 />} />
          <Route path="/livello4gioco4" element={<Livello4Gioco4 />} />
          <Route path="/vittoriagioco4" element={<VittoriaGioco4 />} />

        
          <Route path="/login" element={<Login/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
