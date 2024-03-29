import Signup from './components/Signup'
import {Route, Routes} from 'react-router-dom'
import Layout from './Layout'

function App() {
 
  return (
      <Routes>
        <Route path='/' element = {<Layout></Layout>}></Route>
        <Route path='/signup' element = {<Layout><Signup pathwise = "signup" /></Layout>}></Route>
        <Route path='/signin' element = {<Layout><Signup pathwise = "login" /></Layout>} ></Route>
      </Routes>
  )
}

export default App


/* To Dos : 

   --> Shift the Theme changing option to Navbar Component during Navbar. 
   --> Handling Horizontal Scroll bar When using signup component : Using props : same Login component

*/
