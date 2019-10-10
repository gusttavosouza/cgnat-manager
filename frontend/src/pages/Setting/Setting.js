import React from 'react';
import Menu from '../../components/Menu/Menu';
import './Setting.css';

export default function Logs() {
  return (
    <div className="container">
      <Menu />
      <div className="container-central">
        <div className="container-configurar">
          <div className="title">Configurar</div>
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
            <div className="title">Validar</div>
        </div>
      </div>
    </div>
  );
}