import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Header() {

    const { state } = useLocation();

    const Navigate = useNavigate();

    const clickHandler = () => {
        Navigate('/login', {
            logged: false,
            state: {}
        })
    }

    return (
        <header>
            <h2>Welcome {state.user}!</h2>
            <button className='btn btn-warning' onClick={clickHandler}>Sign Out</button>
        </header>
    )
}

export default Header;