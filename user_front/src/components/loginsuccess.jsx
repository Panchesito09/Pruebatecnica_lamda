//Esta es la página que se muestra cuando el usuario inicia sesión correctamente. tambien incluye el navigator para poder navegar entre las paginas
import React from 'react';
import Navigator from './navigator'; 

const LoginSuccess = () => {
  return (
    <>
      <Navigator />
      <div className="home-container">
        <div className="card">
          <h1>Bienvenido!</h1>
          <p>Has iniciado sesión correctamente. :\</p>
        </div>
      </div>
    </>
  );
};

export default LoginSuccess;
