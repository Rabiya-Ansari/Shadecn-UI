import React from 'react'
import AppLayout from './layout/AppLayout'
import Home from './pages/Home'
import DashboardLayout from './layout/DashboardLayout'
import { Route, Routes } from 'react-router-dom'
import DashboardHome from './pages/dashboard/DashboardHome'
import AddProducts from './pages/dashboard/AddProducts'
import Products from './pages/Products'
import AddCategories from './pages/dashboard/AddCategories'
import BookOrders from './pages/dashboard/BookOrders'

const App = () => {
  return (
    <>
      <Routes>

        <Route path='/' element={<AppLayout />} >
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Route>


        <Route path='/dashboard' element={<DashboardLayout />} >
          <Route path='/dashboard' element={<DashboardHome />} />
          <Route path='products' element={<AddProducts />} />
          <Route path='categories' element={<AddCategories />} />
          <Route path='orders' element={<BookOrders />} />
        </Route>
      </Routes >
    </>
  )
}

export default App