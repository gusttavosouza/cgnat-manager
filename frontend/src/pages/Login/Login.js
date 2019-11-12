import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

import './Login.css';
import logo from '../../assets/logo-pequeno-com-fundo.jpg';
import api from '../../services/api';

export default function Login({ history }){

  useEffect(() => {
      const auth =  window.localStorage.getItem('auth');
      if(auth === "true") {
        history.push("/home");
      }
  });

  const [user, setUser] = useState("")
  const [password, setPassword] = useState("");
  
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
  
  async function handleSubmit(){
      const res = await api.post('/login', {
        user,password
      })
      console.log(res.data)
      if(res.data.auth){
        window.localStorage.setItem('auth', 'true');
        window.localStorage.setItem('user', res.data.user)
        history.push(`/home`)
      }else{
        alert("Usuário Incorreto!");
      }
  }

  return(
    <div className="login-container">
      <section>
        <img src={logo} alt="CGNAT Manager" />
        <input 
            placeholder="E-mail"
            value={user}
            onChange={e => setUser(e.target.value)}
        />
        <input 
            placeholder="Senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Entrar</button>
      </section>
      <div>
        <Footer className="footer"/>
      </div>
    </div>   
  );
}