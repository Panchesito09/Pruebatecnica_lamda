//Esta de loegeo es muy similar a la de registro, solo que en este caso se hace una peticion post a la url login/ con los datos del usuario y se guarda el token en el local storage
import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';
import Navigator from './navigator';

//aqui se crea el componente de login con los campos de correo y contraseña
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Hook para redirigir a otra página
  const navigate = useNavigate();

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('login/', formData);
      localStorage.setItem('token', response.data.token);
      alert('Inicio de sesión exitoso');
      navigate('/loginsuccess'); // Redirige a la vista de éxito de login
    } catch (error) {
      alert('Error en el inicio de sesión. Por favor, intenta de nuevo.');
      console.error('Error en el login:', error);
    }
  };

  
  return (
    <>
      <Navigator />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Contraseña"
          required
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </>
  );
};

export default Login;
