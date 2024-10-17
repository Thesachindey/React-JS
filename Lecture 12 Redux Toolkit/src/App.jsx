
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  function handaleIncrementClick() {
    dispatch(increment())
  }
  function handaleDecrementClick() {
    dispatch(decrement())
  }


  return (
    <>
      <div className="container">
        <button onClick={handaleIncrementClick}>+</button>
        <p>Count: {count}</p>
        <button onClick={handaleDecrementClick}>-</button>

      </div>
    </>
  )
}

export default App
