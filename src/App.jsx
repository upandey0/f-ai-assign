import { useEffect, useState } from 'react'
import Signup from './components/Signup'
import { Switch } from "../src/components/ui/switch"
import useTheme from './hooks/useTheme'

function App() {
  const [theme, setTheme] = useState("light")
  useEffect(() => {
    useTheme(theme)
  },[theme])
  return (

    <>
      <div className="flex items-center space-x-2">
        <button onClick={ ()=> theme === "dark" ? setTheme("white") : setTheme("dark")}>
          <Switch id="airplane-mode" />
        </button>
      </div>
      <div className='min-h-screen  bg-white dark:bg-black '>
        <Signup />
      </div>
    </>
  )
}

export default App


/* To Dos : 

    Shift the Theme changing option to Navbar Component during Creation 

*/ 
