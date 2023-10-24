import React, { useState } from 'react';
import Logo from '../Logo';
import { GiHamburgerMenu } from 'react-icons/gi';

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
        <a onClick={() => { setNavDisplay(false) }} href='/#studywus'>Study in Claymore</a>
        <a onClick={() => { setNavDisplay(false) }} href='/#courses'>Courses</a>
        <a onClick={() => { setNavDisplay(false) }} href='/aboutus'>About Claymore</a>
        <a onClick={() => { setNavDisplay(false) }}>Blog</a>
        <a onClick={() => { setNavDisplay(false) }} href='/login' className='campusbtn'>My Campus</a>
      </div>
    </header>
  )
}

export default Header