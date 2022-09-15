import React from 'react'
import { Link } from 'react-router-dom'
import "./All.css"

export const Navbar = () => {
  return (
    <div className='Nav_div'>
        <Link to="/">All</Link>
        <Link to="/Html">HTML</Link>
        <Link to="/Css">CSS</Link>
        <Link to="/JavaScript">JavaScript</Link>
    </div>
  )
}
