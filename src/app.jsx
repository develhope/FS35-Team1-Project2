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
import Livello2 from "./Giochi/Gioco4/Livello2";

function App() {
  const location = useLocation();
  const path = location.pathname;

  // 🧠 Controlla se siamo in una pagina gioco
  const match = path.match(/^\/struttura(\d+)gioco$/);
  const livello = match ? `Livello ${match[1]}` : null;

  return (
    <>
      <div>
        {livello ? <HeaderGiochi titolo={livello} /> : <Header />}
      </div>

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
          <Route path="/struttura4gioco" element={<Struttura4Gioco />} />
          <Route path="/livello2" element={<Livello2/>}/>
          <Route path="/struttura3gioco" element={<Struttura3Gioco/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
