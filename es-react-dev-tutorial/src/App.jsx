import { useState } from 'react'
import './App.css'
import MyButton from './componets/MyButton'

function App() { 
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Bienvenido a mi aplicación</h1>
        <MyButton>Soy un botón</MyButton>
      </div>
    </>
  )
}

export default App
