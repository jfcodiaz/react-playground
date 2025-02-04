import { useState } from 'react'
import './App.css'
import MyButton from './componets/MyButton'

function App() { 
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="Titulo">Bienvenido a mi aplicación</h1>
        <MyButton>Soy un botón</MyButton>
        <h2>other <title></title></h2>
      </div>
    </>
  )
}

export default App
