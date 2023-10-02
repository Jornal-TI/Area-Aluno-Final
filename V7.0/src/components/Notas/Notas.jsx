import React from 'react';
import './Notas.css'

const NotasInfos = () => {
  
  return (
    <div className="tabela-aulas">
      <table>
        <thead>
          <tr>
            <th>Unidades Curriculares</th>
            <th>Notas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>UC1</td>
            <td>APROVADO!</td>
          </tr>
          <tr>
            <td>UC2</td>
            <td>APROVADO!</td>
          </tr>
          <tr>
            <td>UC3</td>
            <td>APROVADO!</td>
          </tr>
          <tr>
            <td>UC4</td>
            <td>APROVADO!</td>
          </tr>
          <tr>
            <td>UC5</td>
            <td>APROVADO!</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}




export default NotasInfos;
