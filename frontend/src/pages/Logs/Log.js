import React from 'react';
import Menu from '../../components/Menu/Menu';
import './Log.css';

export default function Logs() {
  return (
    <div className="container">
      <Menu />
      <div className="container-central">
        <div className="container-datas">
            <div className="data-fixa">
              <p>
                <strong className="fixoOne">Data</strong>
                <strong className="fixoTwo">IP Local</strong>
                <strong className="fixoThree">IP Global</strong>
                <strong className="fixoFour">Portas</strong>
                <strong className="fixoFive">Status</strong>
              </p> 
            </div>

            <div className="data">
              <p>
                <strong className="infoOne">03/10/2019 - 00/00/0000</strong>
                <strong className="infoTwo">255.255.255.255</strong>
                <strong className="infoThree">255.255.255.255</strong>
                <strong className="infoFour">50000-79990</strong>
                <strong className="infoFiveAtivado">Ativado</strong>
              </p>             
            </div>
            <div className="data">
              <p>
                <strong className="infoOne">03/10/2019 - 00/00/0000</strong>
                <strong className="infoTwo">255.255.255.255</strong>
                <strong className="infoThree">255.255.255.255</strong>
                <strong className="infoFour">50000-79990</strong>
                <strong className="infoFiveAtivado">Ativado</strong>
              </p>             
            </div>
            <div className="data">
              <p>
                <strong className="infoOne">03/10/2019 - 00/00/0000</strong>
                <strong className="infoTwo">255.255.255.255</strong>
                <strong className="infoThree">255.255.255.255</strong>
                <strong className="infoFour">50000-79990</strong>
                <strong className="infoFiveAtivado">Ativado</strong>
              </p>             
            </div>
            <div className="data">
              <p>
                <strong className="infoOne">03/10/2019 - 07/10/2019</strong>
                <strong className="infoTwo">255.255.255.255</strong>
                <strong className="infoThree">255.255.255.255</strong>
                <strong className="infoFour">50000-79990</strong>
                <strong className="infoFiveDesativado">Desativado</strong>
              </p>             
            </div>
            <div className="data">
              <p>
                <strong className="infoOne">03/10/2019 - 05/10/2019</strong>
                <strong className="infoTwo">255.255.255.255</strong>
                <strong className="infoThree">255.255.255.255</strong>
                <strong className="infoFour">50000-79990</strong>
                <strong className="infoFiveDesativado">Desativado</strong>
              </p>             
            </div>
            <div className="data">
              <p>
                <strong className="infoOne">03/10/2019 - 00/00/0000</strong>
                <strong className="infoTwo">255.255.255.255</strong>
                <strong className="infoThree">255.255.255.255</strong>
                <strong className="infoFour">50000-79990</strong>
                <strong className="infoFiveAtivado">Ativado</strong>
              </p>             
            </div>
            <div className="data">
              <p>
                <strong className="infoOne">03/10/2019 - 06/10/2019</strong>
                <strong className="infoTwo">255.255.255.255</strong>
                <strong className="infoThree">255.255.255.255</strong>
                <strong className="infoFour">50000-79990</strong>
                <strong className="infoFiveDesativado">Desativado</strong>
              </p>             
            </div>
            <div className="data">
              <p>
                <strong className="infoOne">03/10/2019 - 00/00/0000</strong>
                <strong className="infoTwo">255.255.255.255</strong>
                <strong className="infoThree">255.255.255.255</strong>
                <strong className="infoFour">50000-79990</strong>
                <strong className="infoFiveAtivado">Ativado</strong>
              </p>             
            </div>
            
        </div>
        <div className="container-filter">  
          <div className="ajusta">
            <h1>Filtrar</h1>
          <form>
            <input 
              placeholder="Endereço IP"
              className="endereco"
            />
            <select className="selecioneEndereco">
              <option>Privado</option>
              <option>Público</option>
            </select>
            <input 
              placeholder="Porta"
              className="porta"
            />
            <br /><button type="submit" className="botao">Filtrar</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}