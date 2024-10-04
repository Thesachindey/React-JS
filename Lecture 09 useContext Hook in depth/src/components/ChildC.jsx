import React, { useContext } from 'react'
import {AppContext} from '../App'

const ChildC = () => {
    const user =useContext(AppContext);
  return (
    <div>
      {user.name}
    </div>
  )
}

export default ChildC
