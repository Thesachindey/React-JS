import React from 'react'

import '../components/UserCard.css'
const UserCard = (props) => {
  return (
    <div id='cont'>

    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} />
     
      <p id='user-description'>{props.desc}</p>
    </div>
    </div>
  )
}

export default UserCard
