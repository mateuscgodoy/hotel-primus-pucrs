import React, { useState } from 'react';

const Login = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    login(username, password);
  };

  return (
    <div className='container mt-4 login-container'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className='form-group'>
          <label htmlFor='username'>Nome de usuário</label>
          <input
            type='text'
            className='form-control'
            id='username'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete='off'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Senha</label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='highlight-btn'>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
