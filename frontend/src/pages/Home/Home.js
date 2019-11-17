import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu/Menu';

import api from '../../services/api';

import './Home.css';

export default function Pricing({history}) {
  const [interfacesList, setInterfacesList] = useState([]);
  const [logsList, setLogsList] = useState([]);
  const [addressList, setAddressList] = useState([])

  useEffect(() => {
    const auth = window.localStorage.getItem('auth');
    if(auth === "false") {
      alert("Você não está autenticado, faça login para ter acesso a essa pagína!");
      history.push("/login");
      return;
    }

    async function loadHome(){
        const response = await api.get('/home', {})
        setInterfacesList(response.data)
        const response2 = await api.get('/logs', {})
        setLogsList(response2.data)
        const response3 = await api.get('/address', {})
        setAddressList(response3.data)
    }
    loadHome();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
      <div className="container">
        <Menu />
        <div className="container-central">  
          <div className="containerLeft">
            <h1>Atividades Recentes</h1>
            {
              logsList.map((element, index) => {
                return (
                <div className="mensagem"><strong>{(element[4] === "SIM" ? "Adicionado" : "Desabilitado")}</strong>
                <br/>{element[4] === "SIM" ? "Realizado a inserção de um nova regra de CGNAT no sistema.": "Foi desabilitado um regra de CGNAT no sistema."}
              <p className="dataContainer">{element[5]} - {element[0]}</p>
                  </div>
                )       
              })
            }          
          </div>    
          <div className="containerMiddle">
            <h1>Informações CGNAT</h1>

          {
            interfacesList.map((element, index) => {       
              // eslint-disable-next-line no-unused-expressions
              return (<div key={index} className="mensagem"><strong>Placa de Rede:{element.name}</strong><br/>
                <p className="information"><strong>Endereço IPv4:</strong>{element.address}</p>
                <p className="information"><strong>Endereço MAC:</strong>{`${element.packageRx}`}</p>
              </div>)
            })
          }
          </div>  
          <div className="containerRight">
            <h1>Endereços</h1>
            <div className="mensagem">
              <strong>Públicos</strong>
              {
                addressList.map((e, index) => {
                    let inicio = e.substr(0, 3);
                    return (<p>{
                      (inicio !== "192" && inicio !== "172" && inicio !== "10." ? e : "")
                      }</p>)
                  
                })
              }
              
            </div>
            <div className="mensagem">
              <strong>Privado</strong>
              {
                addressList.map((e, index) => {
                    let inicio = e.substr(0, 3);
                    return (<p>{
                      (inicio === "192" || inicio === "172" || inicio === "10." ? e : "")
                      }</p>)
                  
                })
              }
            </div>
          </div>
       </div>
      </div>
  );
}