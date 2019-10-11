import React, { useState } from 'react';
import Table from 'mui-datatables';
import Menu from '../../components/Menu/Menu';
import { tableConfig, columsTable} from './tableConfig';

import './Setting.css';

export default function Logs() {

  const [listConfigs, setListConfigs] = useState([]);
  const [addressLocal, setAddressLocal] = useState("");
  const [addressGlobal, setAddressGlobal] = useState("")
  const [amountPorts, setAmountPorts] = useState("");
  const [amountAddressGlobal, setAmountAddressGlobal] = useState("");

 function addList(){
   setListConfigs([...listConfigs, [addressLocal, addressGlobal, amountPorts, "NÃO"]])
 }

 function handleAmountAddressGlobal(value){
    setAmountPorts(value)
 }
  return (
    <div className="container">
      <Menu />
      <div className="container-central">
        <div className="container-configurar">
          <div className="title">Configurar</div>
          <input 
              placeholder="Endereço ou Rede Privada"
              className="endereco-privado"
              onChange={e => setAddressLocal(e.target.value)}
            />
            <input 
              placeholder="Quantidade Portas"
              className="quantidade-porta"
              onChange={e => handleAmountAddressGlobal(e.target.value)}
            />

            <input 
              placeholder="Endereço ou Rede Pública"
              className="endereco-publicos"
              onChange={e => setAddressGlobal(e.target.value)}
            />
            <br /><button type="submit" className="addValidar" onClick={addList}>Add >></button>
        </div>
        
        <div className="container-validar">  
            <Table 
              options={tableConfig}
              columns={columsTable}
              data={listConfigs}
              title="VALIDAR"
            />
        </div>
      </div>
    </div>
  );
}