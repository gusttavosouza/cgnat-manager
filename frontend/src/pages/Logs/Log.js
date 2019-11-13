import React, { useState, useEffect } from 'react';
import Table from 'mui-datatables';

import Menu from '../../components/Menu/Menu';
import { tableConfig, columsTable} from './tableConfig';
import api from '../../services/api';

import './Log.css';

export default function Logs({ history }) {
  const [listLogs, setListLogs] = useState([])

  useEffect(() => {
    const auth = window.localStorage.getItem('auth');
    if(auth === "false") {
      alert("Você não está autenticado, faça login para ter acesso a essa pagína!");
      history.push("/login");
      return;
    }
    async function loadLog(){
      const response = await api.get('/logs', {})
      setListLogs(response.data)
    }
    loadLog();

  },[]);

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