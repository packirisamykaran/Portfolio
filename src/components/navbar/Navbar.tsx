

import React from 'react'
import { Link } from 'react-router-dom'
// import { media } from '../assets'
import "../style/Navbar.css"

export default function Navbar() {
  return (

    <div className="navbar">
            
                <Link to="" className="logo">PK</Link>
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
                </label>
                {/* <div className="menu">
                    <Link to="" className="link">home</Link>
                    <Link to="" className="link">about</Link>
                    <Link to="" className="link">projects</Link>
                    <Link to="" className="link">resume</Link>
                </div> */}
                <div className="menu">
                  <a href="#about" className='link'>about</a>
                  <a href="#skills" className='link'>skills</a>
                  <a href="#projects" className='link'>projects</a>
                </div>

            
        </div>

  )
}
