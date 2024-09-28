import { useState } from "react";
import './App.css'
import Button from './assets/components/Button'
import Card from './assets/components/Card'

function App() {
  const [Count, setCount] = useState(0);
  const clickFun=()=>{
    setCount(Count+1);
  }

  return (
    <>
      <Button clickFun={clickFun} text="click me">
        <h1>The count is {Count}</h1>
      </Button>

      {/* <Card name="sachin">
        <h1>Lorem ipsum dolor sit.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, recusandae!

        </p>
      </Card> */}
    </>
  )
}

export default App
