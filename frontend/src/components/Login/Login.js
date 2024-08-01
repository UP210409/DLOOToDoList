// src/components/Login/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // lógica de autenticación
    // Si la autenticación es exitosa:
    navigate('/principal'); // Redirigir a la pantalla principal
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="company-logo">Logo</div>
        <div className="company-name">JC Romo Abogados</div>
        <div className="app-name-circle">
          <div className="app-name">DLOO</div>
          <div className="app-subtitle">To Do App</div>
        </div>
      </div>
      <div className="login-right">
        <h2>Inicio de Sesión</h2>
        <input 
          type="email" 
          placeholder="E-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleLogin}>Iniciar Sesión</button>
      </div>
    </div>
  );
};

export default Login;