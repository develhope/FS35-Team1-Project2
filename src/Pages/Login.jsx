import Input from "../Components/Input";
import CallToAction from "../Components/CallToAction";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Controlla le credenziali
    if (
      userData.email === formData.email &&
      userData.password === formData.password
    ) {
      const updatedUserData = { ...userData, isLogged: true };
      setUserData(updatedUserData);
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
      navigate("/");
    } else {
      alert("Email o password errati");
    }

    // Reset campi
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="overflow-hidden min-h-screen flex flex-col justify-center px-6">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-2xl text-center">
          Continua la tua avventura spaziale con Nebula!
        </h1>
      </div>

      <form
        onSubmit={handleSubmit} 
        className="mt-6 w-full max-w-md mx-auto flex flex-col gap-4"
      >
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

        <div className="mt-10 flex justify-center">
          <CallToAction
            text="Accedi"
            route={null} // o rimuovilo se CallToAction supporta solo onClick
            disabled={false}
            showAlways={true}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
