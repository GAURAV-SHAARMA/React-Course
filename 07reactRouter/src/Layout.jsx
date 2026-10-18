import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>  
      {/* Outlet is a placeholder provided by React Router. It tells React where to render the component associated with the currently matched child route. */}
      <Footer/>
    </div>
  )
}

export default Layout
