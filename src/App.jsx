import { useEffect, useState } from 'react'
import Signup from './components/Signup'
import { Switch } from "../src/components/ui/switch"
import useTheme from './hooks/useTheme'

function App() {
  const [theme, setTheme] = useState("light")
  useEffect(() => {
    useTheme(theme)
  }, [theme])
  return (
    <div className='flex flex-col w-[99vw]'>

      <div className="flex items-center">
        <button onClick={() => theme === "dark" ? setTheme("white") : setTheme("dark")}>
          <Switch />
        </button>
      </div>

      <div>
        <Signup />
      </div>

    </div>
  )
}

export default App


/* To Dos : 

    Shift the Theme changing option to Navbar Component during Creation 

*/
