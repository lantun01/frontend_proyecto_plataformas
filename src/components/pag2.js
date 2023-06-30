import React from 'react';
import TablaDatos from '../components/TablaDatos';
import TablaAlimentacion from './TablaAlimentacion';
import '../components/TablaDatos.css'


export const Pag2 = () =>{
  return (
    <div>
      <h1>aqui puede ir la tabla</h1>
      <TablaDatos />
      <h1>aqui pueden ir los kpi</h1>
      <TablaAlimentacion />
      <a href="/Algo">Ir a otra página</a>
     
    </div>
  );
};
export default Pag2;
