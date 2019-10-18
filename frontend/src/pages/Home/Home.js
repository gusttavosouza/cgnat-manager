import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu/Menu';

import api from '../../services/api';

import './Home.css';

export default function Pricing({history}) {
  const [interfacesList, setInterfacesList] = useState([]);

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
        console.log(response)
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
            <div className="mensagem"><strong>Adicionado</strong><br/>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfegou uma bandeja de tipos.
              <p className="dataContainer">Thiago - 02-10-2019 13:30</p>
            </div>
            <div className="mensagem"><strong>Modificado</strong><br/>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfegou uma bandeja de tipos.
              <p className="dataContainer">João - 02-10-2019 13:30</p>
            </div>
            <div className="mensagem"><strong>Modificado</strong><br/>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfegou uma bandeja de tipos.
              <p className="dataContainer">João - 02-10-2019 13:30</p>
            </div>
            <div className="mensagem"><strong>Modificado</strong><br/>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfegou uma bandeja de tipos.
              <p className="dataContainer">João - 02-10-2019 13:30</p>
            </div>
            
          </div>    
          <div className="containerMiddle">
            <h1>Informações CGNAT</h1>

          {
            interfacesList.map((element, index) => {       
              // eslint-disable-next-line no-unused-expressions
              return (<div key={index} className="mensagem"><strong>Placa de Rede:{element.name}</strong><br/>
                <p className="information"><strong>Endereço IPv4:</strong>{element.address}</p>
                <p className="information"><strong>Mascara de Rede</strong>{element.mask}</p>
                <p className="information"><strong>Pacotes Enviados:</strong>{`${element.packageTx} Pacotes`}</p>
                <p className="information"><strong>Pacotes Recebidos:</strong>{`${element.packageRx} Pacotes`}</p> 
                <p className="information"><strong>Erros Recebimento:</strong>{`${element.errorsRx} Pacotes`}</p> 
                <p className="information"><strong>Erros Transmissão:</strong>{`${element.errorsTx} Pacotes`}</p>  
              </div>)
            })
          }
          </div>  
          <div className="containerRight">
            <h1>Prefixos</h1>
            <div className="mensagem">
              <strong>Públicos</strong>
              <p>177.74.240.0/20</p>
              <p>177.74.240.0/20</p>
              <p>177.74.240.0/20</p>
              <p>177.74.240.0/20</p>
            </div>
            <div className="mensagem">
              <strong>Privado</strong>
              <p>100.64.0.0/16</p>
            </div>
          </div>
       </div>
      </div>
  );
}