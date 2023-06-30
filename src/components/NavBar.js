import React from 'react';
import { Link} from "react-router-dom";

export const NavBar = () =>{
  return (
      <nav>
        <Link to={"/"}>
        <h2>logo</h2>
        </Link>
      <ul className='nav-list'>
        <Link to={"Pag2"}>
        <li>pag2</li>
        </Link>
        <Link to={"Pag3"}>
        <li>pag3</li>
        </Link>
        <Link to={"IniciarSeccion"}>
        <li>inicio seccion</li>
        </Link>
        
      </ul>                 
    </nav>

  );
};
