import React from 'react'
import { useNavigate } from 'react-router-dom'


/**
 * Header component for the Wrapper, contains a Log off button
 * @returns React Component
 */
function Header() {

    const Navigate = useNavigate();

    const clickHandler = () => {
        Navigate('/login', {
            logged: false,
            state: {}
        })
    }

    return (
        <header>
            <button className='btn btn-warning' onClick={clickHandler}>Sign Out</button>
        </header>
    )
}

export default Header;