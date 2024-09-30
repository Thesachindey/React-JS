import './App.css'
import { useState } from 'react'

function App() {

  const clickHandale = () => {
    alert("helllo sachin");
  }
  function handaleMouse() {
    alert("parar upor mouse niy aysyco")
  }
  function handaleInputChange(e) {
    console.log("Value is now :", e.target.value);
  }
  function hendaleSubmit(e){
    // e.perventDefault()
    alert("Form Submit korbo ki?");
  }
  return (
    <div>

{/* NOTE:event handaleing-y sob somy function likty hoy, like: ()=>alert("any thing");
function na likly like: alert("any thing"); aytaky emediate invocation boly. aykhytry event kaj kory na. */}
<button onClick={()=>alert("button click hoycy")}>
  Click me
</button>

{/* //On form-Input evt handale  */}
      {/* <form onSubmit={hendaleSubmit}>
        <input type="text" onChange={handaleInputChange} />
        <button type="Submit">Submit</button>
      </form> */}

{/* //On para evt handale  */}
      {/* <p onMouseOver={handaleMouse} style={{ border: "2px solid black" }}>
        Hi I am para
      </p> */}
{/* //On button evt handale  */}
      {/* <button onClick={(clickHandale)}>
        click me
      </button> */}
    </div>
  )
}

export default App
