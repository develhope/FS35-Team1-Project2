
import { useState, useEffect, useRef, createContext, useContext } from "react";
import soundtrack from "../soundtrack/Neon_Nostalgia.mp3";

const SoundContext = createContext();

export const useSound = () => useContext(SoundContext);

const SoundProvider = ({ children }) => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const audioRef = useRef(new Audio(soundtrack));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    if (isSoundOn) {
      audio.play().catch((err) =>
        console.error("Errore nella riproduzione audio:", err)
      );
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isSoundOn]);

  return (
    <SoundContext.Provider value={{ isSoundOn, setIsSoundOn }}>
      {children}
    </SoundContext.Provider>
  );
};

export default SoundProvider;
