import React, { useState } from 'react';
import './FormLogin.css';

export default ({onLogin}) => {
  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
        user, password
    }
    if ((user == 'admin' && password =='admin') || (user == 'user' && password == 'user')) {
        onLogin(data);
    } else {
        onLogin({
            user: false
        });
    }
  }

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <form onSubmit={onSubmit}>
        <h2>Iniciar sesión</h2>
        <label>
          Usuario:
            <input 
              type="text" 
              name="name" 
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)} 
          />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
    </>
  )
}
  