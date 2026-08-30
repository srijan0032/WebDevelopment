const root = document.getElementById('root')
const button = document.getElementById('btn')
console.log(root)
   // const h2 = document.createElement('h2');
    const h1 = document.createElement('h1');
    //const img = document.createElement('img');
    const loader=document.createElement('h1');
    
async function showData(){
    try{
        loader.innerHTML = '<h2>Loading data...</h2>';
    root.appendChild(loader);  
    const serverData = await fetch('https://fakestoreapi.com/products')  
    const jsonData = await serverData.json();

    let table=`<table border="2px">
            ${
                jsonData.map((ele)=>(
                    `<tr>
                        <td><img src=${ele.image} height=200 width=200></img></td>
                        <td>${ele.id}</td>
                        <td>${ele.title}</td>
                        <td>${ele.price}</td>
                    </tr>`
                ))
            }
            </table>`
            h1.innerHTML = table;
    //h1.innerHTML = '<h2 style=Color:red>$(jsonData[0].title)</h2>'
    // h2.innerText = 'Welcome to DOM manipulation';
    // img.src='https://www.bing.com/th/id/OIP.KOOipupW_5_J2Yv5CgFH6wHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2'
    // img.setAttribute('height',200);
    // img.setAttribute('width',200);
    root.appendChild(h1);
    // root.appendChild(h2);
    // root.appendChild(img);
    }catch(e){
        console.log(e)
    }
    finally{
        root.removeChild('loader');
    }
    
    //alert("hii");
}

button.addEventListener('click',showData);