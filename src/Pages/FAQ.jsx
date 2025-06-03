const FAQ = () => {
  return (
    <>
      <div className="px-4 mt-20  rounded sm:px-6">
        <div className="max-w-xl mx-auto p-6 bg-cyan-900 rounded-2xl shadow-md border border-gray-200 text-center text-white">
          <h1 className="text-3xl text-center mb-6 ">
            Domande Frequenti (FAQ)
          </h1>
          <p>👶 A chi è rivolta l'app SpaceMath?</p>
          <p>
            SpaceMath è pensata per bambini dai 5 agli 11 anni con difficoltà
            nel calcolo, come la discalculia, ma è adatta anche a chi vuole
            migliorare le proprie abilità matematiche in modo giocoso.
          </p>
          <br />
          <p> 🚀 Chi è Nebula?</p>
          <p>
            Nebula è il protagonista dell’app: un simpatico esploratore spaziale
            che accompagna i bambini in ogni missione matematica. È il primo
            personaggio disponibile, ma se ne possono sbloccare altri!
          </p>
          <br />
          <p> 🧮 Che tipo di giochi contiene l’app?</p>
          <p>
            {" "}
           Ogni gioco allena abilità come
            il conteggio, il riconoscimento dei numeri e le operazioni base, con
            una grafica a tema spaziale.
          </p>
          <br />
          <p> 🔁 Posso rigiocare i livelli?</p>
          <p>
            {" "}
            Sì! I livelli possono essere rigiocati tutte le volte che vuoi.
            Questo aiuta i bambini a consolidare le abilità e a migliorare senza
            pressioni.
          </p>
          <br />
          <p> 🛍️ A cosa serve lo shop?</p>
          <p>
            {" "}
            Nello shop puoi usare le stelle guadagnate durante i giochi per
            acquistare nuovi avatar, costumi spaziali e accessori per
            personalizzare Nebula (o altri personaggi sbloccabili).
          </p>
          <br />
          <p> ⏱️ Ci sono limiti di tempo nei giochi? </p>
          <p>
            No. L’app è progettata per essere senza stress: non ci sono timer né
            penalità. Ogni bambino può imparare al proprio ritmo.
          </p>
          <br />
          <p> 📶 Serve internet per usare l’app?</p>
          <p>
            {" "}
            Puoi giocare alla maggior parte dei livelli anche offline. Alcune
            funzioni, come lo shop o gli aggiornamenti, richiedono una
            connessione internet.
          </p>
        </div>
      </div>
    </>
  );
};

export default FAQ;
