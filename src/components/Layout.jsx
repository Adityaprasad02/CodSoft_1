import React from 'react'
import Navbar from './navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
<>
<Navbar />
<Outlet/>
<Footer />
</>
  )
}

export default Layout;
