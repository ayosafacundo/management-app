import React, { useState } from 'react';
import Logo from '../../Logo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

function Header(): React.ReactElement {

  const [navDisplay, setNavDisplay] = useState(false)

  return (
    <header id="HomeHeader">
      <div className='check'>
        <Logo />
        <label htmlFor="displaynav" className='displaynav'><GiHamburgerMenu /></label>
        <input type="checkbox" name="displaynav" id="displaynav" onClick={() => { setNavDisplay(!navDisplay) }} />
      </div>
      <div className={navDisplay ? "navs active" : "navs inactive"}>
        <NavLink onClick={() => { setNavDisplay(false) }} className={({ isActive }) => isActive ? "active" : ""} end to='/management-app'>Study in Claymore</NavLink>
        <NavLink onClick={() => { setNavDisplay(false) }} className={({ isActive }) => isActive ? "active" : ""} to='courses'>Courses</NavLink>
        <NavLink onClick={() => { setNavDisplay(false) }} className={({ isActive }) => isActive ? "active" : ""} to='aboutus'>About Claymore</NavLink>
        <NavLink onClick={() => { setNavDisplay(false) }} className={({ isActive }) => isActive ? "active" : ""} to='wip'>Blog</NavLink>
        <NavLink onClick={() => { setNavDisplay(false) }} className={({ isActive }) => isActive ? "campusbtn active" : "campusbtn"} to='login'>My Campus</NavLink>
      </div>
    </header>
  )
}

export default Header