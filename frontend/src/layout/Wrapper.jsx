import React from 'react'
import Logo from '../components/Logo';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
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