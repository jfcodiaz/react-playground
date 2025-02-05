import { useState } from 'react'
import './App.css'
import MyButton from './componets/MyButton'
import Profile from './componets/Profile'
import FormLogin from './componets/FormLogin'
import AdminTemplate from './componets/templates/Admin'
import UserTemplate from './componets/templates/User'

function App() { 
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(false);

  const onLogin = (data) => {
    setUser(data.user);
  }

  const logout = () => {
    setUser(false);
  }

  return (
    <>
      <div> 
        { onLogin && user && <h1>Usuario logueado [{user}]</h1> }
        <div className="Titulo">
          <h1>
            Bienvenido a mi aplicación
          </h1>
          { user && <MyButton onClick={logout}>Salir</MyButton> }
        </div>
        { user === false &&  <FormLogin onLogin={onLogin} /> }
        { user !== false && ( user === 'admin' ? <AdminTemplate /> : <UserTemplate /> ) }
        <Profile />
      </div>
    </>
  )
}

export default App
