import React, { useState, useEffect } from 'react';
import Table from 'mui-datatables';

import Menu from '../../components/Menu/Menu';
import { tableConfig, columsTable} from './tableConfig';
import api from '../../services/api';

import './Log.css';

export default function Logs({ history }) {

  useEffect(() => {
    const auth = window.localStorage.getItem('auth');
    if(auth === "false") {
      alert("Você não está autenticado, faça login para ter acesso a essa pagína!");
      history.push("/login");
      return;
    }
  });

  const [listLogs, setListLogs] = useState([
    ["10/10/2019 - 00/00/0000", "170.70.72.2", "192.168.0.1", "5000 - 7999", "Ativada"],
    ["12/10/2019 - 00/00/0000", "20.20.20.20", "192.168.0.5", "10000 - 16000", "Ativada"],
    ["01/11/2019 - 02/11/2019", "177.74.241.19", "192.168.0.1", "10000 - 30000", "Desativado"],
    ["02/11/2019 - 00/00/0000", "20.20.20.20", "192.168.0.13", "3000 - 7999", "Ativada"],

  ]);

  return (
    <div>
      <Menu />
      <div className="containerTable">
        <Table 
          options={tableConfig}
          columns={columsTable}
          data={listLogs}
          title="LOGs"
        />
      </div>
    </div>
  );
}