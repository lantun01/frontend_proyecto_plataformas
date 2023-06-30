import React from "react";
import { NavBar } from "./components/NavBar";
import { Routes,Route} from "react-router-dom";
import { Pag2 } from "./components/pag2";
import {Pag3} from "./components/pag3";
import {NotFound} from "./components/NotFound"
import Home from "./components/Home";
import InicioSesion from "./components/InicioSesion";


export const App =() =>{
  return (
  <div>
   
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Pag2" element={<Pag2 />}/>
        <Route path="/Pag3" element={<Pag3 />}/>
        <Route path="/IniciarSeccion" element={<InicioSesion />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  </div>
  );
}
