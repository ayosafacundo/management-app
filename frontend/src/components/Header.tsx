import React, { useState } from 'react'
import { BsFillPersonFill } from 'react-icons/bs'

function Header(): React.ReactElement {

  const [Dropdown, setDropdown] = useState(false);

  return (
    <header>
      <h1>Welcome Back!</h1>

      <div className="dropdown">
        <button onClick={() => setDropdown(!Dropdown)} className='dropbtn'><BsFillPersonFill /></button>
        {Dropdown && (
          <div className="dropdown-content">
            <span>Configuration</span>
            <span>Courses</span>
            <span>Themes</span>
            <span>Sign Out</span>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header