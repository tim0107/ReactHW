import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loginData, setLoginData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('https://reqres.in/api/login', input);
      setLoginData(res.data);
      setError('');
      localStorage.setItem('token', res.data.token); 
      navigate('/layout'); 
    } catch (err) {
      setLoginData(null);
      setError('Login failed. Please check your credentials.');
      console.error(err.response?.data || err.message);
    }
  };

  useEffect(() => {
    const existingToken = localStorage.getItem('token');
    if (existingToken) {
      navigate('/layout');
    }
  }, [navigate]);

  return (
    <div className="login">
      <h2 className="login-title">Login</h2>

      <input
        className="login-input"
        name="email"
        onChange={handleChange}
        value={input.email}
        placeholder="Email"
        type="email"
      />
      <input
        className="login-input"
        name="password"
        onChange={handleChange}
        value={input.password}
        type="password"
        placeholder="Password"
      />

      <button onClick={handleLogin} className="login-input login-button">
        Login
      </button>

      {error && <h4 className="error-message">{error}</h4>}

      <h4 className="login-input">Not registered? Create an account</h4>
    </div>
  );
}
