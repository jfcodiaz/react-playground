import { useState } from 'react'
import './App.css'
import MyButton from './componets/MyButton'
import Profile from './componets/Profile'
import FormLogin from './componets/FormLogin'

function App() { 
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(false);
  const onLogin = (data) => {
    console.log(data);
    setUser(data.user);
  }
  return (
    <>
      <div> 
        {onLogin && user && <h1>Usuario logueado [{user}]</h1>}
        <h1 className="Titulo">Bienvenido a mi aplicación</h1>
        <MyButton>Soy un botón</MyButton>
        <h2>other title</h2>
        <FormLogin onLogin={onLogin} />
        <Profile />
      </div>
    </>
  )
}

export default App
