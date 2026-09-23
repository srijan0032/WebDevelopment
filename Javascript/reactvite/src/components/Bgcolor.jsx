import React, { useState } from 'react'

function Bgcolor() {
    const[count,setCount] = useState(100);
    const[red,setRed]=useState(255);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);

  return (
    <div>
        <h2>Change Background Color</h2>
        <div style={{backgroundColor:'ReportingObserver(${red},${green},${blue})', border:'2px solid red',width:'200px',height:'200px'}}>

        </div>
        <div>

        </div>
    </div>

  )
}

export default Bgcolor