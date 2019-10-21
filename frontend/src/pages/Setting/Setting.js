import React, { useState, useEffect } from 'react';
import Table from 'mui-datatables';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Icon from '@material-ui/core/Icon';
import calc from 'ip-subnet-calculator';

import Menu from '../../components/Menu/Menu';
import api from '../../services/api';

import { tableConfig, columsTable} from './tableConfig';
import './Setting.css';

export default function Logs({history}) {

  useEffect(() => {
    const auth = window.localStorage.getItem('auth');
    if(auth === "false") {
      alert("Você não está autenticado, faça login para ter acesso a essa página!");
      history.push("/login");
      return;
    }

    async function loadHome(){
      const response = await api.get('/setting', {})
      console.log(response)
      setListConfig([...listConfig, ...response.data])
    }
    if(refresh){
      loadHome();
      setRefresh(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [refresh, setRefresh] = useState(true);
  const [listConfig, setListConfig] = useState([]);
  const [networkLocal, setAddressLocal] = useState("");
  const [maskLocal, setMaskLocal] = useState(24);
  const [networkGlobal, setAddressGlobal] = useState("")
  const [maskGlobal, setMaskGlobal] = useState(24);
  const [amountPorts, setAmountPorts] = useState("");
  const [amountAddressGlobal, setAmountAddressGlobal] = useState("");

  function clearLabels(){
    setAddressLocal("");
    setMaskLocal(24);
    setAddressGlobal("");
    setMaskGlobal(24);
    setAmountPorts("");
  }



  const handleDelete = data =>{
    console.log('teste')
  }
  function deleteRoles(chip) {
    console.log("Entrouuu")
    // setListConfig(listConfig.filter(element => {
    //   console.log()
    //   return element !== chip
    // }))
    // console.log('teste')
  }

  function saveListRoles(){
    const response = api.post('/setting', {
      listConfig
    })

    console.log(response);
  }

  function addList(){
    const localAddress = calc.calculateSubnetMask(networkLocal, maskLocal);
    const firstIpLocal = localAddress.ipLowStr.split('.');
    const lastIpLocal = localAddress.ipHighStr.split('.');
    const addressGlobal = calc.calculateSubnetMask(networkGlobal, maskGlobal);
    const firstIpGlobal = addressGlobal.ipLowStr.split('.');
    const lastIpGlobal = addressGlobal.ipHighStr.split('.')
    let vetConfigs = [];
    let currentPort = 5000;
    
    for(let i = firstIpLocal[2]; i <= lastIpLocal[2]; i++){
      for(let j = firstIpLocal[3]; j <= lastIpLocal[3]; j++){
        if(currentPort >= 65000){
          if(firstIpGlobal[3] > lastIpGlobal[3]){
            firstIpGlobal[2]++;
            firstIpGlobal[3] = 0;
          }else{
            firstIpGlobal[3]++;
          }
          currentPort = 5000;
        }


        vetConfigs.push([
          `${lastIpLocal[0]}.${lastIpLocal[1]}.${i}.${j}`,
          `${firstIpGlobal[0]}.${firstIpGlobal[1]}.${firstIpGlobal[2]}.${firstIpGlobal[3]}`,
          `${currentPort}-${parseInt(currentPort)+parseInt(amountPorts)-1}`,
          `NÃO`  
        ]);
        currentPort = parseInt(currentPort) + parseInt(amountPorts);
      }
      console.log( 'entrouuu')
    }

    setListConfig([...listConfig, ...vetConfigs])
    console.log(listConfig)
    clearLabels();
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
                value={networkLocal}
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
              value={amountPorts}
            />
            {amountPorts !== "" ? <p className="msg-ajuda">{`São necessários ${amountAddressGlobal} IPs públicos. Recomenda-se a utilização de uma rede /${maskGlobal}`}</p> : null}
            <input 
              placeholder="Endereço Rede Pública"
              className="endereco-publicos"
              onChange={e => setAddressGlobal(e.target.value)}
              value={networkGlobal}
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
            <Button
              variant="contained"
              color="primary"
              className="btnAddValidar"
              size="large"
              endIcon={<Icon>send</Icon>}
              onClick={addList}
            >
            Adicionar
            </Button>
          </div>
        
        <div className="container-validar">  
            <Table 
              options={tableConfig}
              columns={columsTable}
              data={listConfig}
              title="VALIDAR"
              handleDelete={handleDelete}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="btnValidar"
              onClick={saveListRoles}
              startIcon={<SaveIcon />}
            >
              Salvar
            </Button>
        </div>
      </div>
    </div>
  );
}