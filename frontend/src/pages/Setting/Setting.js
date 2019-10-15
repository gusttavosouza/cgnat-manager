import React, { useState } from 'react';
import Table from 'mui-datatables';
import Menu from '../../components/Menu/Menu';
import { tableConfig, columsTable} from './tableConfig';

import './Setting.css';

export default function Logs() {

  const [listConfig, setListConfig] = useState([]);
  const [networkLocal, setAddressLocal] = useState("");
  const [maskLocal, setMaskLocal] = useState(24);
  const [networkGlobal, setAddressGlobal] = useState("")
  const [maskGlobal, setMaskGlobal] = useState(24);
  const [amountPorts, setAmountPorts] = useState("");
  const [amountAddressGlobal, setAmountAddressGlobal] = useState("");

  function addList(){
    const octetsPrivate = networkLocal.split('.');
    const octetsPublic = networkGlobal.split('.');
    const amountAddressPrivate = Math.pow(2, (32 - maskLocal));
    let currentPort = 5000;
    let vetInfos = [];
    let AddressIpLocal = "";
    let AddressIpGlobal = "";
    let Ports = "";
    let InProduction = "NÃO";

    for(let amountProcessed = 0; amountProcessed < amountAddressPrivate; amountProcessed++){
      if(octetsPrivate[3] < 256){
        AddressIpLocal = `${octetsPrivate[0]}.${octetsPrivate[1]}.${octetsPrivate[2]}.${octetsPrivate[3]}`;
        AddressIpGlobal = `${octetsPublic[0]}.${octetsPublic[1]}.${octetsPublic[2]}.${octetsPublic[3]}`;
        Ports = `${currentPort}-${(parseInt(currentPort)+parseInt(amountPorts))-1}`;
        vetInfos.push([AddressIpLocal, AddressIpGlobal, Ports, InProduction])
        octetsPrivate[3]++;
        currentPort = parseInt(currentPort) + parseInt(amountPorts);
        if(parseInt(currentPort) + parseInt(amountPorts) > 65000){
          octetsPublic[3] = parseInt(octetsPublic[3]+1);
          currentPort = 5000;
        }
      }else{
        octetsPrivate[2] = parseInt(octetsPrivate[2]) + 1;
        octetsPrivate[3] = 0;
        AddressIpLocal = `${octetsPrivate[0]}.${octetsPrivate[1]}.${octetsPrivate[2]}.${octetsPrivate[3]}`;
        AddressIpGlobal = `${octetsPublic[0]}.${octetsPublic[1]}.${octetsPublic[2]}.${octetsPublic[3]}`;
        Ports = `${currentPort}-${(parseInt(currentPort)+parseInt(amountPorts))-1}`;
        vetInfos.push([AddressIpLocal, AddressIpGlobal, Ports, InProduction])
        octetsPrivate[3]++;
        currentPort = parseInt(currentPort) + parseInt(amountPorts);
        if(parseInt(currentPort) + parseInt(amountPorts) > 60000){
          octetsPublic[3] = parseInt(octetsPublic[3]+1);
          currentPort = 5000;
        }
      }
      console.log(`Add ${AddressIpLocal}`)

      setListConfig(...listConfig, vetInfos)
    }  
  }

  function handleAmountAddressGlobal(ports){
      setAmountPorts(ports)
      const amountPrivateForPublic = 60000 / ports;
      const amountPrivate = Math.pow(2,(32 - maskLocal));
      const amountPublic = Math.ceil(amountPrivate / amountPrivateForPublic);
      setAmountAddressGlobal(amountPublic);
      for(let i = 32; i >= 20; i--){
        if(amountPublic <= Math.pow(2, (32-i))){
          setMaskGlobal(i);
          return
        }
      }
  }

  return (
    <div className="container">
      <Menu />
      <div className="container-central">
        <div className="container-configurar">
          <div className="title">Configurar</div>
            <input 
                placeholder="Endereço Rede Privada"
                className="endereco-privado"
                onChange={e => setAddressLocal(e.target.value)}
            />
            <select className="selecioneEndereco" value={maskLocal} onChange={ maskLocal => setMaskLocal(maskLocal.target.value)}>
              <option value="16">/16</option>
              <option value="17">/17</option>
              <option value="18">/18</option>
              <option value="19">/19</option>
              <option value="20">/20</option>
              <option value="21">/21</option>
              <option value="22">/22</option>
              <option value="23">/23</option>
              <option value="24">/24</option>
              <option value="25">/25</option>
              <option value="26">/26</option>
              <option value="27">/27</option>
              <option value="28">/28</option>
              <option value="29">/29</option>
              <option value="30">/30</option>
              <option value="31">/31</option>
              <option value="32">/32</option>       
            </select>
            
            <input 
              placeholder="Quantidade Portas"
              className="quantidade-porta"
              onChange={e => handleAmountAddressGlobal(e.target.value)}
            />
            {amountPorts !== "" ? <p className="msg-ajuda">{`São necessários ${amountAddressGlobal} IPs públicos. Recomenda-se a utilização de uma rede /${maskGlobal}`}</p> : null}
            <input 
              placeholder="Endereço Rede Pública"
              className="endereco-publicos"
              onChange={e => setAddressGlobal(e.target.value)}
            />
            <select className="selecioneEnderecoPublico" value={maskGlobal} onChange={ maskGlobal => setMaskGlobal(maskGlobal.target.value)}>                         
              {maskGlobal >= 20 ? <option value="20">/20</option> : null}
              {maskGlobal >= 21 ? <option value="21">/21</option> : null}
              {maskGlobal >= 22 ? <option value="22">/22</option> : null}
              {maskGlobal >= 23 ? <option value="23">/23</option> : null}
              {maskGlobal >= 24 ? <option value="24">/24</option> : null}
              {maskGlobal >= 25 ? <option value="25">/25</option> : null}
              {maskGlobal >= 26 ? <option value="26">/26</option> : null}
              {maskGlobal >= 27 ? <option value="27">/27</option> : null}
              {maskGlobal >= 28 ? <option value="28">/28</option> : null}
              {maskGlobal >= 29 ? <option value="29">/29</option> : null}
              {maskGlobal >= 30 ? <option value="30">/30</option> : null}
              {maskGlobal >= 31 ? <option value="31">/31</option> : null}
              {maskGlobal >= 32 ? <option value="32">/32</option> : null}    
            </select>
            <br /><button type="submit" className="addValidar" onClick={addList}>Add >></button>
        </div>
        
        <div className="container-validar">  
            <Table 
              options={tableConfig}
              columns={columsTable}
              data={listConfig}
              title="VALIDAR"
            />
        </div>
      </div>
    </div>
  );
}