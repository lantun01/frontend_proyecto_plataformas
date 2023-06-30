import React, { useState }  from 'react';
import data from "./Datosrandom.json"


const TablaDatos = () => {
  const [contacts,setcontact]= useState(data);







  return (
    <table className="tabla-datos">
      <thead>
        <tr>{/*estas son las columnas */}
          <th>Rajo</th>
          <th>Fase</th>
          <th>Valor Real</th>
          <th>Valor Semana </th>
          <th>Valor mensual</th>
        </tr>
      </thead>
      <tbody>
        {/* Aquí puedes agregar filas con datos */}
        {contacts.map((contact)=> (
           <tr>
           <td>{contact.fase}</td>
           <td>{contact.rajo}</td>
           <td>{contact.vr}</td>
           <td>{contact.vs}</td>
           <td>{contact.vm}</td>
         </tr>
        ))}
        
      </tbody>
    </table>
  );
};
export default TablaDatos;