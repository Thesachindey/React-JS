import UserCard from "./components/UserCard"
import sachin from "../src/assets/sachin.webp"
import shaurov from "../src/assets/shaurov.webp"
import virat from "../src/assets/virat.jpeg"
// import dhoni from "../src/assets/dhoni.jpg"
import dhoni from "../src/assets/dhoni.jpg";

import './App.css'
function App() {


  return (
    <>
      <div className="container">
        <UserCard name="Sachin" desc="desc1" image={sachin} style={{ "border-radius": "10px" }} />
        <UserCard name="Shaurov" desc="desc2" image={shaurov} style={{ "border-radius": "10px" }} />
        <UserCard name="Virat" desc="desc3" image={virat} style={{ "border-radius": "10px" }} />
        <UserCard name="MS Dhoni" desc="desc4" image={dhoni} style={{ "border-radius": "10px" }} />

      </div>
    </>
  )
}

export default App
