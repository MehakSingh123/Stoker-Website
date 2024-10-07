import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Login.css';

function Login(props) {
  console.log("heloo",props);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/login', { email, password });
      if (response.data.success) {
        Cookies.set('token', response.data.token, { expires: 7 }); // Set cookie to expire in 7 days
        props.setIsAuthenticated(true);
        navigate('/');
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Login error", error);
    }
  };
  
  return (
    <div className="login-container">
      <h2 className="login-title">Welcome Back!</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          className="login-input" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          className="login-input" 
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="redirect-text">Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
  );
}

export default Login;
