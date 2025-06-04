

const games = [
    {
        id: 'game1',
        name: 'Conta con Nebula',
        image: '/assets/immagini/Gioco1/astronauti.svg',
        levelButtonClass: 'bg-yellow-200 text-black border-2 border-black', 
        levels: [
            { id: 1, path: '/livello1gioco1' },
            { id: 2, path: '/livello2gioco1' },
            { id: 3, path: '/livello3gioco1' },
            { id: 4, path: '/livello4gioco1' },
        ],
        unlockDependency: null, // Nessuna dipendenza per il primo gioco
    },
    {
        id: 'game2',
        name: 'Metti in ordine',
        image: '/assets/immagini/Gioco2/astronauta biondo su pianeta.svg', // Sostituisci con la tua immagine reale
        levelButtonClass: 'bg-blue-200 text-black border-2 border-black', 
        levels: [
            { id: 1, path: '/livello1gioco2' },
            { id: 2, path: '/livello2gioco2' },
            { id: 3, path: '/livello3gioco2' },
            { id: 4, path: '/livello4gioco2' },
            { id: 5, path: '/livello5gioco2' },
        ],
        unlockDependency: "game1", // dipende dal completamento del primo gioco
    },
    {
        id: 'game3',
        name: 'Trova la coppia',
        image: '/assets/immagini/Gioco3/scimmia_home_3.svg', // Sostituisci con la tua immagine reale
        levelButtonClass: 'bg-red-200 text-black border-2 border-black', 
        levels: [
            { id: 1, path: '/livello1gioco3' },
            { id: 2, path: '/livello2gioco3' },
            { id: 3, path: '/livello3gioco3' },
            { id: 4, path: '/livello4gioco3' },
            
        ],
        unlockDependency: "game2", // Dipende dal completamento di game2
    },
    {
        id: 'game4',
        name: 'Chi ne ha di più?',
        image: '/assets/immagini/Gioco4/amicidinebulainsieme.svg', // Sostituisci con la tua immagine reale
        levelButtonClass: 'bg-green-200 text-black border-2 border-black', 
        levels: [
            { id: 1, path: '/livello1gioco4' },
            { id: 2, path: '/livello2gioco4' },
            { id: 3, path: '/livello3gioco4' },
            { id: 4, path: '/livello4gioco4' },
           
        ],
        unlockDependency: "game3", // Dipende dal completamento di game3
    },
];

export default games;