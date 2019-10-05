import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from  "react-router-dom";
import Typography from '@material-ui/core/Typography';

import logo from '../../assets/logo-pequeno-com-fundo.jpg';
import MenuAccount from '../MenuAccount/MenuAccount';
import './Menu.css';

export default function Menu(){
  return (
    <AppBar position="static" color="default" elevation={0} className={"appBar"}>
      <Toolbar className={"toolbar"}>
        <Typography variant="h6" color="inherit" noWrap className={"toolbarTitle"}>
          <img src={logo} alt="CGNAT Manager" className={"logo"} /> 
        </Typography>
        <Link variant="button" color="textPrimary" to="/home" className={"itemOne"}>
          Home
        </Link>
        <Link variant="button" color="textPrimary" to="/config" className={"itemOne"}>
          Configurar
        </Link>
        <Link variant="button" color="textPrimary" to="/logs" className={"itemOne"}>
          Logs
        </Link>    
        <div className={"avatar"} ><MenuAccount/> </div>
      </Toolbar>
    </AppBar>
  );
}
