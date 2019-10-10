import React from 'react';
import Table from 'mui-datatables';
import Menu from '../../components/Menu/Menu';
import { tableConfig, columsTable} from './tableConfig';

import './Setting.css';

export default function Logs() {
  return (
    <div className="container">
      <Menu />
      <div className="container-central">
        <div className="container-configurar">
          <div className="title">Configurar</div>
          <input 
              placeholder="Endereço ou Rede Privada"
              className="endereco-privado"
            />
            <input 
              placeholder="Quantidade Portas"
              className="quantidade-porta"
              type="number"
            />
            <input 
              placeholder="Endereço ou Rede Pública"
              className="endereco-publicos"
            />
            <br /><button type="submit" className="addValidar">Add >></button>
        </div>
        <div className="container-validar">  
            <div className="title">Validar</div>
            <Table 
              options={tableConfig}
              columns={columsTable}
            />
        </div>
      </div>
    </div>
  );
}