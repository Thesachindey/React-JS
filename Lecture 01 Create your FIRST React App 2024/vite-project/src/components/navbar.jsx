import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <div>This is Nav Bar</div>
      {props.children}
    </div>
  )
}

export default Navbar
