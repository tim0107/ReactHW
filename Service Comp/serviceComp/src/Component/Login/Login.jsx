import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.scss';

export default function Login() {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState();

  const [loginData, setLoginData] = useState();

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
    } catch (err) {
      setLoginData('');

      setError('Login failed');
      console.error(err.response?.data, err.message);
    }
  };

  useEffect(() => {
    if (loginData) {
      console.log(loginData);
    }
  }, [loginData]);

  return (
    <div className="login">
      <input
        className="login-input"
        name="email"
        onChange={handleChange}
        value={input.email}
        placeholder="Username"
      />
      <input
        className="login-input"
        name="password"
        onChange={handleChange}
        value={input.password}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleLogin} className="login-input">
        Login
      </button>
      {loginData && loginData.token ? (
        <h2 className="login-input login-btn">Token: {loginData.token}</h2>
      ) : error ? (
        <h2 className="error-message">{error}</h2>
      ) : null}

      <h4 className="login-input">Not registered? Create an account</h4>
    </div>
  );
}
