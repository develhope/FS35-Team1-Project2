import { FaLinkedin, FaGithub } from "react-icons/fa";

const ChiSiamo = () => {
  const membri = [
    {
      nome: "Monica Castrogiovanni",
      linkedin: "https://www.linkedin.com/in/monica-castrogiovanni-3bb605219/",
      github: "https://github.com/MonicaCastrogiovanni",
    },
    {
      nome: "Alfonso Lambiase",
      linkedin: "https://www.linkedin.com/in/alfonso-lambiase-b3107733a/",
      github: "https://github.com/AlfonsoLambiase",
    },
    {
      nome: "Silvia Desideri Scioli",
      linkedin: "https://www.linkedin.com/in/silvia-desideri-scioli-41a547358/",
      github: "https://github.com/Silviadesideri01",
    },
    {
      nome: "Cristian Rinaldi",
      linkedin: "https://www.linkedin.com/in/cristian-rinaldi-62904935a/",
      github: "https://github.com/Cristian-Rinaldi",
    },
    {
      nome: "Morena D'Asta",
      linkedin: "https://www.linkedin.com/in/morena-d-asta-405557358/",
      github: "https://github.com/Mory-0907",
    },
    {
      nome: "Mattia Lucia",
      linkedin: "https://www.linkedin.com/in/mattialucia/",
      github: "https://github.com/mattialucia",
    },
  ];

  return (
    <div className="px-4 mt-20 md:mt-40 rounded sm:px-6">
      <div className="max-w-xl mx-auto p-6 bg-cyan-900 rounded-2xl shadow-md border border-gray-200 text-center text-white">
        <h1 className="text-3xl font-bold mb-6 md:text-4xl">Chi Siamo</h1>
        <p className="mb-8 md:text-2xl">
          Scopri chi sono le menti dietro quest'app pazzesca e resta aggiornato
          con le ultime novità!
        </p>

        {membri.map((membro, index) => (
          <div key={index} className="mb-6">
            <p className="text-xl font-semibold mb-2">{membro.nome}</p>
            <div className="flex justify-center gap-4 text-2xl md:text-3xl">
              <a
                href={membro.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={membro.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChiSiamo;
