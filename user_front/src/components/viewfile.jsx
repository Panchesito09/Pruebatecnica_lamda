//Esta es la vista de la página de visualización de archivos.siempre mostrara el ultimo archivo subido.
import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; 
import Navigator from './navigator'; 
import './css.css';

const ViewFile = () => {
  const [fileUrl, setFileUrl] = useState('');
  const [uploadDate, setUploadDate] = useState('');

  useEffect(() => {
    const fetchFile = async () => {
      try {
        
        const token = localStorage.getItem('token');
        
       
        const response = await axios.get('/viewupload/', {
          headers: {
            'Authorization': `Token ${token}` 
          }
        });
        
        
        setFileUrl(response.data.file);
        const date = new Date(response.data.uploaded_at);
        setUploadDate(date.toLocaleString()); 
      } catch (error) {
        console.error('Error al obtener el archivo:', error);
      }
    };

    fetchFile();
  }, []);

  return (
    <>
      <Navigator />
      <div className="home-container">
        <div className="card">
          <h1>Archivo Más Reciente</h1>
          {fileUrl ? (
            <div>
              <p>Archivo disponible en:</p>
              <a href={fileUrl} target="_blank" rel="noopener noreferrer">Ver Archivo</a>
              <p>Fecha de Carga: {uploadDate}</p>
            </div>
          ) : (
            <p>No hay archivos disponibles.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewFile;
