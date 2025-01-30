import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import Sidebar from '../components/campus/Sidebar/Sidebar';
import Logo from '../../components/Logo';
import Header from '../../components/campus/CHeader';
import './CampusWrapper.css';

function Wrapper(): React.ReactNode | null {
  const { state } = useLocation();

  return state?.logged ? (
    <>
      <Logo />
      <Header />
      {/* <Sidebar privileges={state.privilege} /> */}
      <Outlet />
    </>
  ) : (
    <Navigate to='/login' />
  )
}

export default Wrapper