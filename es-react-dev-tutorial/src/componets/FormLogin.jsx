import React, { useState } from 'react';
import './FormLogin.css';

export default () => {
  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
        user, password
    }

    if (user == 'admin' || password =='admin') {
        // show admin page
        console.log("Show Admin page");
    }

    if(user == 'user' || password == 'user') {
        // show user page
        console.log("Show User page");
    }

    console.log("Form Summited", data);   
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
  