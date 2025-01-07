import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Service from './pages/service/Service'
import Company from './pages/company/Company'
import Career from './pages/career/Career'
import Nodfound from './pages/nod-found/Nodfound'
import Prodact from './pages/prodact/Prodact'
import Detail from './pages/detail/Detail'


function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/prodact' element={<Prodact />} />
                <Route path='/service' element={<Service/>} />
                <Route path='/company' element={<Company />} />
                <Route path='/career' element={<Career />} />
                <Route path='/prodacts/:id' element={<Detail />} />
                <Route path='*' element={<Nodfound/>} />
            </Route>
        </Routes>
    )
}

export default App