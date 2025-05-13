import { useState, useContext } from "react";
import { UserContext } from "../UserContext"; 
import Header from "../Components/Header";
import Input from "../Components/Input";
import CallToAction from "../Components/CallToAction";

const FormIscriviti = () => {
  const { setUserData } = useContext(UserContext); 
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    isParentPermission: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUserData(formData); // Salva i dati dell'utente nel contesto

    // Resetta il form
    setFormData({
      name: "",
      age: "",
      email: "",
      password: "",
      isParentPermission: false,
    });
  };

  return (
    <>
      <Header
        centerIcon={<p>Iscriviti</p>}
        leftIcon={
          <img src="./immagini/icon/arrow-left.svg" className="w-[15px] ml-1" />
        }
      />

      <div>
        <div className="px-6 mt-4 flex flex-col items-center gap-3">
          <h1 className="text-[20px]">Pronti a giocare con Nebula?</h1>
          <h4 className="px-4 text-[12.8px]">
            Compila questo modulo e inizia l’avventura!
          </h4>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            label="Nome"
            required
          />
          <Input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            label="Età"
            required
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            label="Email"
            required
          />
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            label="Password"
            required
          />

          <div className="flex gap-2 mt-10 ml-8">
            <input
              type="checkbox"
              name="isParentPermission"
              checked={formData.isParentPermission}
              onChange={handleChange}
              className="w-6 h-6 mr-2"
            />
            <label htmlFor="isParentPermission" className="text-[15px]">
              Ho il permesso del mio genitore per giocare con Nebula!
            </label>
          </div>

          <div className="mt-10 flex justify-center">
            <CallToAction text="Inizia L'avventura" />
          </div>
        </form>

        <div className="text-[12px] w-[280px] mt-10 flex items-center mx-auto text-center">
          <p>
            Niente pubblicità, niente stress, solo giochi e magia con Nebula!
          </p>
        </div>
      </div>
    </>
  );
};

export default FormIscriviti;
