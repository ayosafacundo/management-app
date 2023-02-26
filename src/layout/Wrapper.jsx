import React from 'react'
import Logo from './Components/Logo';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

/**
 * Private Route checkpoint
 * Logo, Sidebar and Header Wrapper component
 */
function Wrapper() {

    const { state } = useLocation();
    console.log(state)

    return state?.logged ? (
        <>
            <Logo />
            <Header />
            <Sidebar privileges={state.privileges} />
            <Outlet />
        </>
    ) : (<Navigate to="/login" />)
}

export default Wrapper