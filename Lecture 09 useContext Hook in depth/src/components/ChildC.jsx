import { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
  // const user =useContext(AppContext);
  const { Theme, setTheme } = useContext(ThemeContext);


  function handleClick() {
    if (Theme === 'Light') {
      setTheme('Dark')
    } else { setTheme('Light') }
  }


  return (
    <div>
      <button onClick={handleClick}>
        Change Theme
      </button>
    </div>
  )
}

export default ChildC
