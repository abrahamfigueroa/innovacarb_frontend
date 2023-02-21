import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (


    <div>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />

    </div>
  )
}

export default Root