import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [Count, setCount] = useState(0);

  //first -> side-effect function
  //second -> clean-up function
  //third -> comma separated dependenci list; 

  //useEffect()->hook-yr onyk gulo variation roycy.

  //Variation:1
  //runs on every render
  useEffect(() => {
    alert("I will run on each render")
  })

  function handaleClick() {
    setCount(Count + 1);
  }
  return (
    <div>
      <h2>The count is: {Count}</h2>
      <button onClick={handaleClick}>
        Click Me
      </button>

    </div>
  )
}

export default App
