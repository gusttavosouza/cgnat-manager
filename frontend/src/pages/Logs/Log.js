import React, { useState, useEffect } from 'react';
import Table from 'mui-datatables';

import Menu from '../../components/Menu/Menu';
import { tableConfig, columsTable} from './tableConfig';
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
    ["10/10/2019 - 00/00/0000", "170.70.72.0", "192.168.0.1", "5000 - 7999", "Desativado"],
    ["10/10/2019 - 00/00/0000", "170.70.72.0", "192.168.0.1", "5000 - 7999", "Desativado"],
    ["10/10/2019 - 00/00/0000", "170.70.72.0", "192.168.0.1", "5000 - 7999", "Desativado"],
    ["10/10/2019 - 00/00/0000", "170.70.72.0", "192.168.0.1", "5000 - 7999", "Desativado"],
    ["10/10/2019 - 00/00/0000", "170.70.72.0", "192.168.0.1", "5000 - 7999", "Desativado"],
    ["10/10/2019 - 00/00/0000", "170.70.72.0", "192.168.0.1", "5000 - 7999", "Desativado"],
    ["10/10/2019 - 00/00/0000", "170.70.72.0", "192.168.0.1", "5000 - 7999", "Desativado"],
    ["10/10/2019 - 00/00/0000", "170.70.72.0", "192.168.0.1", "5000 - 7999", "Desativado"],
    ["10/10/2019 - 00/00/0000", "170.70.72.0", "192.168.0.1", "5000 - 7999", "Desativado"],
    ["10/10/2019 - 00/00/0000", "170.70.72.0", "192.168.0.1", "5000 - 7999", "Desativado"],
    ["10/10/2019 - 00/00/0000", "170.70.72.0", "192.168.0.1", "5000 - 7999", "Desativado"],
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