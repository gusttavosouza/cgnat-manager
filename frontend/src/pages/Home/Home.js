import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import './Home.css';
import logo from '../../assets/logo-pequeno.jpg';
  
export default function Pricing() {

  function Footer() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {new Date().getDate() < 10 ? '0'+new Date().getDate() : new Date().getDate() }
        {'-'}
        {new Date().getMonth()+1 < 10 ? '0'+new Date().getMonth()+1 : new Date().getMonth()+1 } 
        {'-'}
        {new Date().getFullYear()}
        {' '}
        {new Date().getHours() < 10 ? '0'+new Date().getHours() : new Date().getHours() } 
        {':'}
        {new Date().getMinutes() < 10 ? '0'+new Date().getMinutes() : new Date().getMinutes() } 
        {':'}
        {new Date().getSeconds() < 10 ? '0'+new Date().getSeconds() : new Date().getSeconds() } 
      </Typography>
    );
  }

  return (
      <div className="container">
        <AppBar position="static" color="default" elevation={0} className={"appBar"}>
          <Toolbar className={"toolbar"}>
            <Typography variant="h6" color="inherit" noWrap className={"toolbarTitle"}>
              <img src={logo} alt="CGNAT Manager" className={"logo"} /> 
            </Typography>
              <Link variant="button" color="textPrimary" href="#" className={"itemOne"}>
                Prefixos
              </Link>
              <Link variant="button" color="textPrimary" href="#" className={"itemOne"}>
                Configurações
              </Link>
              <Link variant="button" color="textPrimary" href="#" className={"itemOne"}>
                Logs
              </Link>
              <Avatar className={"avatar"}>GR</Avatar>
          </Toolbar>
        </AppBar>
       <div className="container-central">  
          <div className="containerOne">
            <h1>Atividades Recentes</h1>
            <p className="mensagem"><strong>Adicionado</strong><br/>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfegou uma bandeja de tipos.
              <p className="dataContainer">Thiago - 02-10-2019 13:30</p>
            </p>
            <p className="mensagem"><strong>Modificado</strong><br/>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfegou uma bandeja de tipos.
              <p className="dataContainer">João - 02-10-2019 13:30</p>
            </p>
            
          </div>    
          <div className="containerOne">
            <h1>Prefixos</h1>
            <p className="mensagem"><strong>Adicionado</strong><br/>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfegou uma bandeja de tipos.
              <p className="dataContainer">Thiago - 02-10-2019 13:30</p>
            </p>
            <p className="mensagem"><strong>Modificado</strong><br/>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfegou uma bandeja de tipos.
              <p className="dataContainer">João - 02-10-2019 13:30</p>
            </p>
          </div>  

          <div className="containerTwo">
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
              <p>177.74.240.0/20</p>
              <p>177.74.240.0/20</p>
            </p>
          </div>
       </div>
       <div className="footer">
        <Footer />
      </div>
      </div>
  );
}