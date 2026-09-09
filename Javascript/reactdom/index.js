const container =document.getElementById('root');
console.log(container);
const root = ReactDOM.createRoot(container);
const h2 = React.createElement('h2',{style:{color:'black'}},'Language Known: HTML,CSS,java');
const h1 = React.createElement('h2',{style:{color:'brown',backgroundColor:'white'}},"Name: Srijan")
const img = React.createElement('img',{src:'https://www.bing.com/th/id/OIP.KOOipupW_5_J2Yv5CgFH6wHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2',style:{height:'200px',width:'200px',border:'5px solid',borderBlockColor:'purple',borderRadius:'100%'}})
const div = React.createElement('div',{style:{ height:'200px', width:'200px'}},img,h1,h2)
const h21 = <h2>Welcome to JSX</h2>
root.render(h21);