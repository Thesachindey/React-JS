import { createContext,useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

//Step1: create Context
const AppContext = createContext();
//Step2: wrap all the child inside a "provider"
//Step3: pass value
//Step4: consumer yr vitory dhuky consume kora.


function App() {
const [User, setUser] = useState({name:"tim"});

  return (
    <>
      <AppContext.Provider value={User}>

        <ChildA />

      </AppContext.Provider>
    </>
  )
}

export default App
export {AppContext}
