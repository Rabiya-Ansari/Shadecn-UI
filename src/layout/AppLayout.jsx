import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../base/Navbar'
import Footer from '../base/Footer'

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default AppLayout