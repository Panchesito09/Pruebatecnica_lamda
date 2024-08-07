//Este archivo contiene el formulario de registro de usuario. el formulario contiene los campos de nombre, edad, género, cc, teléfono, correo electrónico y contraseña. Al enviar el formulario, se envían los datos a la API y se muestra un mensaje de éxito o error. Si el registro es exitoso, el usuario es redirigido a la página de inicio de sesión.

import React, { useState } from 'react';
import axios from '../axiosConfig'; 
import { useNavigate } from 'react-router-dom';
import Navigator from '../components/navigator'; 
import './css.css';

// Este componente es el formulario de registro de usuario que contiene los campos de nombre, edad, género, cc, teléfono, correo electrónico y contraseña. Al enviar el formulario, se envían los datos a la API y se muestra un mensaje de éxito o error. Si el registro es exitoso, el usuario es redirigido a la página de inicio de sesión.
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    cc: '',
    phone: '',
    email: '',
    password: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

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
      await axios.post('register/', formData);
      alert ('Registro exitoso. Serás redirigido al inicio de sesión.');
      setTimeout(() => navigate('/login'), 2000); 
    } catch (error) {
      alert ('Error en el registro. Por favor, intenta de nuevo.');
      console.error('Error en el registro:', error);
    }
  };

  return (
    <>
      <Navigator />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Edad"
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Selecciona Género</option>
          <option value="F">Femenino</option>
          <option value="M">Masculino</option>
        </select>
        <input
          type="text"
          name="cc"
          value={formData.cc}
          onChange={handleChange}
          placeholder="CC"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Teléfono"
          required
        />
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
        <button type="submit">Registrar</button>
      </form>
      {successMessage && <div className="alert success">{successMessage}</div>}
      {errorMessage && <div className="alert error">{errorMessage}</div>}
    </>
  );
};

export default Register;
