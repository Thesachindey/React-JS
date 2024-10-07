import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate=useNavigate()
  const handaleClick=()=>{
    navigate('/dashboard');
  }
  return (
    <div>
      <h1>
        I am about section
      </h1>
        <button onClick={handaleClick}>
          Move to dashboard
        </button>
    </div>
  )
}

export default About
