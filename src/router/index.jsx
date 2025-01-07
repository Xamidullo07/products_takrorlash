import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Service from '../pages/service/Service'
import Company from '../pages/company/Company'
import Career from '../pages/career/Career'

function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/service' element={<Service/>} />
                <Route path='/company' element={<Company />} />
                <Route path='/career' element={<Career />} />
                <Route path='*' element={<Nodfound />} />
            </Route>
        </Routes>
    )
}

export default Routers