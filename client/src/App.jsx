import React from 'react'
import Page from './app/dashboard/Page'
import AppLayout from './layout/AppLayout'
import Home from './pages/Home'
import DashboardLayout from './layout/DashboardLayout'
import Products from './pages/dashboard/Products'
import { Route, Routes } from 'react-router-dom'
import Categories from './pages/dashboard/Categories'
import Orders from './pages/dashboard/Orders'
import DashboardHome from './pages/dashboard/DashboardHome'

const App = () => {
  return (
    <>
      <Routes>

        <Route path='/' element={<AppLayout />} >
          <Route path='/' element={<Home />} />
        </Route>


        <Route path='/dashboard' element={<DashboardLayout />} >
          <Route path='/dashboard' element={<DashboardHome />} />
          <Route path='products' element={<Products />} />
          <Route path='categories' element={<Categories />} />
          <Route path='orders' element={<Orders />} />
        </Route>
      </Routes >
    </>
  )
}

export default App