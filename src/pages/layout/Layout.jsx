import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footor/Footer'

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout