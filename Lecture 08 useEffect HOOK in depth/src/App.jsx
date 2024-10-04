import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [Count, setCount] = useState(0);
  const [Total, setTotal] = useState(1);

  //first -> side-effect function
  //second -> clean-up function
  //third -> comma separated dependenci list; 
  //[]-> dependenci jotobar ---> change/update hoby toto bar ayta work korby.

  //useEffect()->hook-yr onyk gulo variation roycy.



  //Variation: 1
  //runs on every render
  // useEffect(() => {
  //   alert("I will run on each/every render")
  // })

  //Variation: 2
  //that runs on only first render
  // useEffect(() => {
  //   alert("I will run on only first render ")
  // }, []);
   //if we pass 'count' as a 'depen.' then it work as a variation-1.

//variation: 3
// useEffect(()=>{
//   alert("I will run every time when count is update")
// },[Count]) //count 0 is also a count update

//variation: 4
//multiple dependencies
// useEffect(() => {
//   alert("I will run every time when Count/total is update")
// }, [Count,Total]);

//variation: 5
//aibar add korbo cleanup function
useEffect(() => {
  alert("New count is updated")

  // CleanUp Function. NOTE:Selected Component / selected State soraly/(Unmount-korly) CleanUp function kaj Kory.
  return () => {
   alert("Old count is unmounted from UI")
  }
}, [Count])
//Aikhany "Count-state" soraly(Unmount-holy) clean-up function kaj korby.


  function handaleClick() {
    setCount(Count + 1);
  }

  function handaleTotalClick() {
    setTotal(Total+1);
  }


  return (
    <div>
      <button onClick={handaleClick}>
        Updated Count is: {Count}
      </button>
      <button onClick={handaleTotalClick}>
        Updated Count is: {Total}
      </button>

    </div>
  )
}

export default App
