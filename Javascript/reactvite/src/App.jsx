import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{border:'2px solid red', height:'300px', width:'300px'}}>
      <h1>ABES</h1>
      <p>Name: Srijan</p>
      <p>Roll no.: 2400320101119</p>
      <p>Adm no.: 2024b0101734</p>

    </div>
  )
}

export default App
