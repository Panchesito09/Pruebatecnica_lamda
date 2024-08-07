// Esta es la barra de navegación de la aplicación. podremos importarla en todas las paginas para poder navegar entre ellas
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axiosConfig'; 
import './css.css'; 

// este componente es la barra de navegacion que se muestra en la parte superior de la pagina, en ella se muestran los links a las diferentes paginas de la aplicacion bloqueando el acceso a las paginas que requieren autenticacion
const Navigator = () => {
  const [logoutMessage, setLogoutMessage] = useState('');
  const token = localStorage.getItem('token'); // Verifica si hay un token en el localStorage
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('logout/', {}, {
        headers: { Authorization: `Token ${token}` } // Envía el token en el header
      }); 
      alert ('Sesión cerrada con éxito');
      localStorage.removeItem('token'); // Elimina el token del localStorage
      setTimeout(() => {
        navigate('/'); // Redirige al usuario a la página de inicio después de 2 segundos
      }, 2000);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      alert ('Error al cerrar sesión');
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {!token ? (
          <>
            <li>
              <Link to="/register">Registro</Link>
            </li>
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/robot">Robot</Link>
            </li>
            <li>
              <a href="/logout" onClick={handleLogout} className="nav-link">Cerrar Sesión</a> 
            </li>
          </>
        )}
      </ul>
      {logoutMessage && <p>{logoutMessage}</p>}
    </nav>
  );
};

export default Navigator;
