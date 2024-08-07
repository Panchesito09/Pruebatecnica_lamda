// Esta es la pagina de aterrizaje o inicio
import React from 'react';
import Navigator from './navigator'; //importamos el navigator para incluirlo en la pagina de inicio
import './css.css'; //importamos el css para darle estilo a la pagina de inicio

const Home = () => {
  return (
    <>
      <Navigator />
      <div className="home-container">
        <div className="card">
          <h1>Prueba Técnica Lambda</h1>
          <p>Sergio Panche</p>
        </div>
      </div>
    </>
  );
};

export default Home;
