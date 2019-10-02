import React from 'react';
import Typography from '@material-ui/core/Typography';

import './Login.css';

import logo from '../../assets/logo-grande.jpg';

export default function Login(){

  function Copyright() {
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
  
  return(
    <div className="login-container">
      <img src={logo} alt="CGNAT Manager"/>
      <form>
        <input 
          placeholder="E-mail"
        />
        <input 
          placeholder="Senha"
        />
        <button type="submit">Entrar</button>
      </form>
      <div><center><Copyright /></center></div>
    </div>   
  );
}