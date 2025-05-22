import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";

// Pagine
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

// Componenti
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import HeaderGiochi from "./Components/HeaderGiochi";

// Giochi
import Struttura1Gioco from "./Giochi/Gioco1/Struttura1Gioco";
import Struttura3Gioco from "./Giochi/Gioco3/Struttura3Gioco";
import Struttura4Gioco from "./Giochi/Gioco4/Struttura4Gioco";
import Livello1Gioco4 from "./Giochi/Gioco4/Livello1Gioco4";
import Livello1Gioco3 from "./Giochi/Gioco3/Livello1Gioco3";
import Livello2Gioco3 from "./Giochi/Gioco3/Livello2Gioco3";
import Livello3Gioco3 from "./Giochi/Gioco3/Livello3Gioco3";
import Livello4Gioco3 from "./Giochi/Gioco3/Livello4Gioco3";
import Livello2Gioco4 from "./Giochi/Gioco4/Livello2Gioco4";
import Livello3Gioco4 from "./Giochi/Gioco4/Livello3Gioco4";
import Livello4Gioco4 from "./Giochi/Gioco4/Livello4Gioco4";
import Livello5Gioco4 from "./Giochi/Gioco4/Livello5Gioco4";

function App() {
  const location = useLocation();
  const path = location.pathname;

  // 🧠 Determina se mostrare HeaderGiochi e quale titolo usare
  let titolo = null;

  if (path.includes("struttura")) {
    const match = path.match(/struttura(\d+)gioco/);
    if (match) titolo = `Livello ${match[1]}`;
  } else if (path.includes("livello")) {
    const match = path.match(/livello(\d+)gioco(\d+)/);
    if (match) titolo = `Livello ${match[1]}`;
  }

  return (
    <>
      <div>{titolo ? <HeaderGiochi titolo={titolo} /> : <Header />}</div>

      <main className="min-h-screen relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/quiz" element={<Quiz />} />
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
          <Route path="/struttura3gioco" element={<Struttura3Gioco />} />
          <Route path="/struttura4gioco" element={<Struttura4Gioco />} />
          <Route path="/livello1gioco4" element={<Livello1Gioco4 />} />
          <Route path="/livello1gioco3" element={<Livello1Gioco3 />} />
          <Route path="/livello2gioco3" element={<Livello2Gioco3 />} />
          <Route path="/livello3gioco3" element={<Livello3Gioco3 />} />
          <Route path="/livello4gioco3" element={<Livello4Gioco3 />} />
          <Route path="/livello2gioco4" element={<Livello2Gioco4 />} />
          <Route path="/livello3gioco4" element={<Livello3Gioco4 />} />
          <Route path="/livello4gioco4" element={<Livello4Gioco4 />} />
          <Route path="/livello5gioco4" element={<Livello5Gioco4 />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
