import React, { useState } from 'react';
import './App.css';
import myImage from './Images/img1.png'; // Importa la imagen img1.png desde la carpeta Images
import logo from './Images/img2.png'; // Importa la imagen img2.png desde la carpeta Images
import InicioSesion from './InicioSesion'; // Importa el componente InicioSesion
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [isLoginPage, setIsLoginPage] = useState(false);

  const handleLoginClick = () => {
    setIsLoginPage(true);
  };

  if (isLoginPage) {
    return <InicioSesion />;
  }

  return (
    <div className="container">
      <button className="custom-button" onClick={handleLoginClick}>
        Iniciar Sesión
      </button>
      
      <div className="left-box">
        <h1>Nuestra Compañia</h1>
        <h2>ESTAMOS ENTRE LOS 5 PRIMEROS PRODUCTORES DE COBRE DE CHILE</h2>
        <p>Contamos con los mejores profesionales de la industria y la excelencia es un sello irrenunciable en todo lo que hacemos. Nos interesa contribuir a marcar el camino de la minería del futuro.</p>
      </div>     
      
      <div className="right-box">
        <img src={myImage} alt="Imagen" /> 
      </div>

      <div className="logo">
        <img src={logo} alt="logo" /> 
      </div>
    </div>
  );
}

export default App;