import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Contact from "./component/Contact"
import Home from "./component/Home"
import About from "./component/About"
import Nav from "./Nav"
import './App.css'

function App() {

  return (
    <>
   <Router>
    <Nav/>
    <Routes>

      <Route path='/home' element={<Home/>}/>
      <Route path='/contact' element={<Contact phoneNumber={'000 0000 000'}/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>

   </Router>
    </>
  )
}

export default App
