//Esta es la pagina donde podremos ejecutar el bot, subir un archivo y ver el archivo subido, podremos subir el archivo de manera manual o ejecutando el bot que lo haria automatico

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navigator from './navigator'; 
import axios from '../axiosConfig'; 
import './css.css'; 
const Robot = () => {
  const [file, setFile] = useState(null); 
  const navigate = useNavigate(); 

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); 
  };

  const handleFileUpload = async () => {
    if (!file) {
      alert('Por favor, selecciona un archivo primero.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_date', new Date().toISOString()); 

    try {
      await axios.post('/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
          'Authorization': `Token ${localStorage.getItem('token')}` 
        }
      });
      alert('Archivo subido correctamente');
    } catch (error) {
      console.error('Error al subir el archivo:', error);
      alert('Error al subir el archivo');
    }
  };

  const handleExecuteBot = async () => {
    try {
      // Envía una solicitud POST para ejecutar el bot
      const response = await axios.post('http://localhost:8000/execute-bot/', {});
      // Maneja la respuesta del backend
      console.log('Bot ejecutado con éxito:', response.data);
      alert('Bot ejecutado con éxito');
    } catch (error) {
      console.error('Error al ejecutar el bot:', error);
      alert('Error al ejecutar el bot');
    }
  };

  const handleViewFile = () => {
    
    navigate('/viewfile');
  };

  return (
    <>
      <Navigator />
      <div className="home-container">
        <div className="card">
          <h1>Bot carga de documento DANE</h1>
          <input type="file" onChange={handleFileChange} />
          <div className="button-container">
            <button className="btn execute" onClick={handleExecuteBot}>Ejecutar Bot</button>
            <button className="btn upload" onClick={handleFileUpload}>Subir Archivo</button>
            <button className="btn view-file" onClick={handleViewFile}>Ver Archivo</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Robot;

