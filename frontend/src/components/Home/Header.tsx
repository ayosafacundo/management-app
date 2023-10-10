import React, { useState } from 'react';
import Logo from '../Logo';

function Header(): React.ReactElement {

  const [navDisplay, setNavDisplay] = useState(false)

  return (
    <header id="HomeHeader">
      <Logo />
      <input type="checkbox" name="displaynav" id="displaynav" onClick={() => { setNavDisplay(!navDisplay) }} />
      <div className={navDisplay ? "navs active" : "navs inactive"}>
        <a href='/#studywus'>Study in Claymore</a>
        <a href='/#courses'>Courses</a>
        <a href='/aboutus'>About Us</a>
        <a>Blog</a>
        <a href='/login' className='campus'>My Campus</a>
      </div>
    </header>
  )
}

export default Header