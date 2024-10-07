import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate() //useNavigate(); Hook
  function handaleClick() {
    navigate('/about')
  }
  return (
    <div>
      <h1>this is home page</h1>
      <button onClick={handaleClick}>
        Move to About
      </button>
    </div>
  )
}

export default Home
