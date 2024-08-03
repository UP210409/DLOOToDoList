<<<<<<< Updated upstream
import React from 'react';
=======
// src/components/Login/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/perfil';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', null, {
        params: {
          usernameOrEmail,
          password
        }
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId);
      console.log('data:' + response.data.value);
      setError('');
      navigate(from, { replace: true });
    } catch (error) {
      setError('Credenciales inválidas');
    }
  };
>>>>>>> Stashed changes

const Login = (props) => {
  return (
    <div><p>Login</p></div>
  );
}

export default Login;