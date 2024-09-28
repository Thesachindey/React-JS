import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div>
      {props.name}
      {props.children}
    </div>
  )
}

export default Card
