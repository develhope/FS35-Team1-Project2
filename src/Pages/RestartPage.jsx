
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import games from './games';
import HeaderFineLivelli from '../Components/HeaderFineLivelli'; 


const RestartPage = () => {
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();
    const [userName, setUserName] = useState('Utente');

    useEffect(() => {
        if (userData && userData.name) {
            setUserName(userData.name);
        }
    }, [userData]);

    const handleLevelClick = (path) => {
        navigate(path);
    };

    return (
        <div
            style={{
                backgroundImage: "url('/immagini/sfondoproseguogiochi.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                width: "100%",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                //alignItems: "center",
                //paddingTop: "60px",
            }}
            className="text-white relative"
        >
            {/* Header */}
            <HeaderFineLivelli/>
            


            <div className="text-center mt-8">
                <h1 className="text-3xl font-bold text-white mb-2">Bentornato!</h1>
                <h2 className="text-2xl font-semibold text-white mb-8">Continuiamo a giocare!</h2>

               
                <div className="flex flex-row flex-nowrap items-center justify-start gap-2 mb-10 w-full px-2"> 
                    <img
                        src="/assets/immagini/Gioco1/nebulagames.png" 
                        alt="Nebula"
                        className="w-24 h-auto flex-shrink-0"
                        style={{ zIndex: 10 }}
                    />

                  
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg flex-grow min-w-0 text-left">
                        <p className="text-lg text-white mb-2">
                            Ciao <span className="font-bold text-yellow-300">{userName}</span>!
                        </p>
                        <p className="text-md text-white mb-0">
                            Hai fatto grandi progressi! Pronto per la prossima sfida?
                        </p>
                    </div>
                </div>
            </div>

            {/* Sezione Giochi e Livelli */}
            <div className="w-full max-w-2xl px-4">
                {games.map(game => (
                    <div key={game.id} className="mb-8 flex flex-col items-center">
                        {/* Immagine rappresentativa del gioco (non cliccabile) */}
                        <div className="w-48 h-48 mb-4 rounded-full overflow-hidden border-4 border-white-400 shadow-xl flex items-center justify-center bg-white/20">
                            <img
                                src={game.image}
                                alt={game.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4"
                         style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)' }}
                        
                        >{game.name}</h3>

                        {/* Livelli cliccabili */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {game.levels.map(level => (
                                <button
                                    key={level.id}
                                    onClick={() => handleLevelClick(level.path)}
                                    className={`w-16 h-16 rounded-full flex items-center justify-center
                                               text-2xl font-bold shadow-lg transition-colors duration-200
                                               cursor-pointer ${game.levelButtonClass}`}
                                    style={game.levelButtonStyle}
                                >
                                    {level.id}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

           
        </div>
    );
};

export default RestartPage;