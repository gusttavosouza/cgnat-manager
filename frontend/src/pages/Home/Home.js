import React from 'react';
import Menu from '../../components/Menu/Menu';

import './Home.css';
  
export default function Pricing() {
  return (
      <div className="container">
        <Menu />
        <div className="container-central">  
          <div className="containerLeft">
            <h1>Atividades Recentes</h1>
            <p className="mensagem"><strong>Adicionado</strong><br/>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfegou uma bandeja de tipos.
              <p className="dataContainer">Thiago - 02-10-2019 13:30</p>
            </p>
            <p className="mensagem"><strong>Modificado</strong><br/>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfegou uma bandeja de tipos.
              <p className="dataContainer">João - 02-10-2019 13:30</p>
            </p>
            <p className="mensagem"><strong>Modificado</strong><br/>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfegou uma bandeja de tipos.
              <p className="dataContainer">João - 02-10-2019 13:30</p>
            </p>
            <p className="mensagem"><strong>Modificado</strong><br/>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfegou uma bandeja de tipos.
              <p className="dataContainer">João - 02-10-2019 13:30</p>
            </p>
            
          </div>    
          <div className="containerMiddle">
            <h1>Informações CGNAT</h1>
            <p className="mensagem"><strong>Placa de Rede: <strong>enp0s1 </strong></strong><br/>
              <p className="information"><strong>Endereço IP:</strong>100.64.10.1/24</p>
              <p className="information"><strong>Pacotes Saindo:</strong>3000 pacotes</p>
              <p className="information"><strong>Pacotes Entrando:</strong>800 pacotes</p> 
              <p className="information"><strong>Trafego Entrando:</strong>800 pacotes</p> 
              <p className="information"><strong>Trafego Saindo:</strong>800 pacotes</p>  
            </p>
            <p className="mensagem"><strong>Placa de Rede: <strong>enp0s2 </strong></strong><br/>
                <p className="information"><strong>Endereço IP:</strong>100.64.10.1/24</p>
                <p className="information"><strong>Pacotes Saindo:</strong>3000 pacotes</p>
                <p className="information"><strong>Pacotes Entrando:</strong>800 pacotes</p>
                <p className="information"><strong>Pacotes Entrando:</strong>800 pacotes</p> 
                <p className="information"><strong>Pacotes Entrando:</strong>800 pacotes</p>  
            </p>
          </div>  
          <div className="containerRight">
            <h1>Prefixos</h1>
            <p className="mensagem">
              <strong>Públicos</strong>
              <p>177.74.240.0/20</p>
              <p>177.74.240.0/20</p>
              <p>177.74.240.0/20</p>
              <p>177.74.240.0/20</p>
            </p>
            <p className="mensagem">
              <strong>Privado</strong>
              <p>100.64.0.0/16</p>
            </p>
          </div>
       </div>
      </div>
  );
}