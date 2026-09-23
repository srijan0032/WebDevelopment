import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'
import ICardGallery from './components/ICardGallery'
import StateHandling from './components/StateHandling'
import Bgcolor from './components/Bgcolor'


function App() {
  const[count,setCount] = useState(20);
  return (
    // <div style={{border:'2px solid red', height:'300px', width:'300px'}}>
    //   {/* <h1>ABES</h1>
    //   <h2>ICard</h2>
    //   <p>Name: Srijan</p>
    //   <p>Roll no.: 2400320101119</p>
    //   <p>Adm no.: 2024b0101734</p>
    //   <p>Branch: CSE</p>  */}
    //   <h2>Welcome</h2>
    //   <ICard roll="1234" name="Srijan" branch="CSE" college="ABES"></ICard>
      

    // </div>
    <div >
      {/* <ICardGallery/> */}

      {/* <StateHandling/> */}
      <Bgcolor/>
    </div>
  )
}

export default App
