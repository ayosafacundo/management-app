import React from 'react'
import Header from '../../components/website/Home/Header/Header'
import Footer from '../../components/website/Home/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './HomeWrapper.css'

function HomeWrapper(): React.ReactElement {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default HomeWrapper