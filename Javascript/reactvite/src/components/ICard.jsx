import React from 'react'


function ICard(props) {
  return (
    <div>
      {/* <img
        src={props.image}
        alt={props.name}
        style={{
          width: '120px',
          height: '120px',
          objectFit: 'cover'
        }}
      /> */}
      {/* <h2>Roll:{props.roll}</h2>
      <h2>Name:{props.name}</h2>
      <h2>Branch:{props.branch}</h2>
      <h2>College:{props.college}</h2> */}

      <img src={props.data.image} alt={props.data.name} height={'120px'} width={'120px'}/>

      <h2>Roll: {props.data.roll}</h2>
      <h2>Name: {props.data.name}</h2>
      <h2>Branch: {props.data.branch}</h2>
    </div>
  )
}

export default ICard