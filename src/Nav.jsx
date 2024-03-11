import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"
const Nav = () => {
  return (
    <>
      <nav className='navbar'>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
</nav>
    </>
  )
}

export default Nav
