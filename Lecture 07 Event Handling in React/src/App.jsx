import './App.css'
import { useState } from 'react'

function App() {

  const clickHandale=()=>{
  alert("helllo sachin");
  }
function handaleMouse() {
  alert("parar upor mouse niy aysyco")
}
  return (
    <>
    <p onMouseOver={handaleMouse}  style={{color:'Red'}}>Hi I am para</p>
    <button onClick={(clickHandale)}>
      click me
    </button>
    </>
  )
}

export default App
