import './App.css'
import { useState } from 'react'
import LogoutBtn from './Components/LogoutBtn';
import LoginBtn from './Components/LoginBtn';

function App() {
const [IsLogdin, setIsLogdin] = useState(true);

// ! --> is not [early return--> o bola hoy]
if (!IsLogdin) {
  return(
    <LoginBtn/>
  )
}

// ayi khany jodi login true hoyi taholy 'logical oparator' kaj korby--> logOutBtn show hoby , ar false holy (! = not) -yr ta kaj korby LogIn Btn show hoby.

//logical oparator
return(
  <>
  <h1>Hello everyone</h1>
  <div>{IsLogdin && <LogoutBtn/>}</div>
  </>
)

// // tarnary oparator
// return(
//   <div>
//   {IsLogdin ? <LogoutBtn/> : <LoginBtn/>}
//   </div>
// )


// if-else conditional statement

  // if (IsLogdin) {
  //   return <LogoutBtn />
  // }
  // else{
  //   return <LoginBtn />
  // }
}

export default App
