import React from 'react';
import Menu from '../../components/Menu/Menu';
import './Setting.css';

export default function Logs() {
  return (
    <div className="container">
      <Menu />
      <div className="container-central">
        <div className="container-configurar">
          <h1>Configurar</h1>

          <input 
              placeholder="Endereço IP"
              className="endereco"
            />
            <input 
              placeholder="Endereço IP"
              className="endereco"
            />
            <input 
              placeholder="Endereço IP"
              className="endereco"
            />
            <button type="submit" className="botao">Filtrar</button>
        </div>
        <div className="container-validar">  
          <div className="ajusta">
            <h1>Validar</h1>
          </div>
        </div>
      </div>
    </div>
  );
}