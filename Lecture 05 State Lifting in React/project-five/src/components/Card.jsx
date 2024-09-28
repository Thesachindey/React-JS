import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=> props.setName(e.target.value)} />
      <p>Name State variable yr value inside {props.title}: {props.Name}</p>
    </div>
  )
}

export default Card
