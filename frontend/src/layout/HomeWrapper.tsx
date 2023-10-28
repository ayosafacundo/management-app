import React from 'react'
import Header from '../components/website/Home/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/website/Home/Footer'

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