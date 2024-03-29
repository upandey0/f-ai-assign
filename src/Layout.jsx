import { useEffect, useState } from 'react'
import { Switch } from "../src/components/ui/switch"
import useTheme from './hooks/useTheme'

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("dark")
  useEffect(() => {
    useTheme(theme)
  }, [theme])
  return (
    <div className=''>
      <button onClick={() => theme === "dark" ? setTheme("white") : setTheme("dark")}>
          <Switch />
      </button>
      {children}
    </div>
  )
}

export default Layout


// flex flex-col min-h-screen parent wrapper class ---> situation dependent
