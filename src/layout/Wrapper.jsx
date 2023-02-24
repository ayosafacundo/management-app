import React from 'react'
import Logo from './Components/Logo';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { Navigate, useLocation } from 'react-router-dom';

function Wrapper({ child }) {

    const { state } = useLocation();

    return state?.logged ? (
        <>

            <Logo />
            <Header />
            <Sidebar privileges={state.privileges} />
            {child}
        </>
    ) : (<Navigate to="/login" />)
}

export default Wrapper