// src/components/Login/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const user = { email, password };

    try {
      const response = await fetch(`http://localhost:8080/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const userId = await response.json();
        sessionStorage.setItem('userId', userId);
        navigate('/principal'); // Redirect to the main screen
      } else {
        console.error("Invalid Credentials");
      }
    } catch (error) {
      console.error("Error connecting to the Database: ", error);
    }
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
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};
export default Login;