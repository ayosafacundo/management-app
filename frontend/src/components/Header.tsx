import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header(): React.ReactElement {
  const Navigate = useNavigate();

  const clickHandler = () => {
    Navigate('/login', {
      replace: false,
      state: { logged: false }
    })
  }
  return (
    <header>
      <button className='btn btn-warning' onClick={clickHandler}>Sign Out</button>
    </header>
  )
}

export default Header