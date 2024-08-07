// Este archivo es el componente principal de la aplicación. Aquí se definen las rutas de la aplicación y se importan los componentes necesarios para cada ruta. Se utiliza el componente BrowserRouter de react-router-dom para manejar las rutas y el componente Route para definir las rutas y los componentes asociados a cada una. En este caso, se definen las rutas para la página de inicio, el registro de usuario, el inicio de sesión, la página de éxito de registro, la página de éxito de inicio de sesión, la página de inicio, el robot y la vista de archivo. Cada ruta tiene un componente asociado que se renderiza cuando se accede a esa ruta. Por ejemplo, cuando se accede a la ruta "/", se renderiza el componente Home. Cuando se accede a la ruta "/register", se renderiza el componente Register. De esta forma, se define la estructura de la aplicación y se establecen las rutas y los componentes asociados a cada una.
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Success from './components/noficationsuccess';
import LoginSuccess from './components/loginsuccess';
import Home from './components/home';
import Robot from './components/robot';
import ViewFile from './components/viewfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginsuccess" element={<LoginSuccess />} />
        <Route path="/robot" element={<Robot />} />
        <Route path="/viewfile" element={<ViewFile />} />
        <Route path="/notificationsuccess" element={<Success />} />
        
      </Routes>
    </Router>
  );
};

export default App;
