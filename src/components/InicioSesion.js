import React from 'react';
import './InicioSesion.css'
import MyImage from '../Images/img3.png';
import Logo from '../Images/img2.png';
//import {MyImage} from '/src/Images/img2.png'
//import {Logo} from '/src/Images/img3.png';

function InicioSesion() {
  const handleBackButtonClick = () => {
    window.location.href = '/'; // Navegar a la página principal al hacer clic en el botón de regreso
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario de inicio de sesión
  };

  return (
    <div className="inicio-sesion-container">
      <div className="left-box-inicio-sesion">
        <img src={MyImage} alt="Imagen" />
      </div>

      <div className="right-box-inicio-sesion">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleLoginFormSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />

          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" />

          <button type="submit">Iniciar Sesión</button>
        </form>

        <button className="acceso" onClick={handleBackButtonClick}>
          Solicitar Acceso
        </button>
        <button className="contraseña" onClick={handleBackButtonClick}>
          Olvidé mi Contraseña
        </button>
        <button className="volver-btn" onClick={handleBackButtonClick}>
          Volver a la Página Principal
        </button>

        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default InicioSesion;
