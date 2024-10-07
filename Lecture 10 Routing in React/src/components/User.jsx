import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
const parm=useParams();
  return (
    <div>
      <h1>
        User name is:{parm.user}
      </h1>
    </div>
  )
}

export default User
