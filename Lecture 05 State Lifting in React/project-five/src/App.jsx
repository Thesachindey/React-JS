import './App.css'
import Card from './components/Card'
import {useState} from 'react'

function App() {
//create state
//manage state
//change state
//sokol childey state sync korbo
const [Name, setName] = useState('');

  return (
    <>
    <Card title="Card1" Name={Name} setName={setName}/> {/*components*/}
    <Card title="Card2" Name={Name} setName={setName}/> {/*components*/}
{/* <p>I am inside Parent Component & Value of Name is: {Name}</p> */}

    </>
  )
}

export default App
