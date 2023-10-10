import React from 'react'
import Header from '../components/Home/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Home/Footer'

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