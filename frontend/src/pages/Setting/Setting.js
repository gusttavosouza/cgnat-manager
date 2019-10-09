import React from 'react';
import Menu from '../../components/Menu/Menu';
import './Setting.css';

export default function Logs() {
  return (
    <div className="container">
      <Menu />
      <div className="container-central">
        <div className="container-datas">
          <h1>Configurar</h1>
        </div>
        <div className="container-filter">  
          <div className="ajusta">
            <h1>Validar</h1>
          </div>
        </div>
      </div>
    </div>
  );
}