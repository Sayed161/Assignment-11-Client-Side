import React, { useContext } from 'react'
import Navbar from '../Shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer'
import { AuthContext } from '../Providers/AuthProviders'

const HomeLayout = () => {

  
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default HomeLayout
