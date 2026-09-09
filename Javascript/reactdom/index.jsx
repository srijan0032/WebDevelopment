const container =document.getElementById('root');
//console.log(container);
const root = ReactDOM.createRoot(container);
const h21 = <h2>Welcome to JSX</h2>
const h22 = <h1>ABES Engineering College</h1>
const warpper = <div style={{border:'2px solid red'}}>{h21}{h22}</div>

//blank tag
const div=
<div style={{color:'purple'}}>
{warpper}
<h2>Heyyy</h2>
</div>

root.render(div);