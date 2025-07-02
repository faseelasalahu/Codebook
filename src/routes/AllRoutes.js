import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Homepage from '../pages/Home/components/Homepage'
import ProductList from '../pages/Products/ProductList'
import  {ProductDetail}  from '../pages/ProductDetail'
import { Register } from '../pages/Register'
import {Login} from '../pages/Login'
import CartPage from '../pages/Cart/CartPage'
import ProtectedRoutes from './ProtectedRoutes'
import{ OrderPage} from '../pages/order/OrderPage'
import { DashBoardPage } from '../pages/Dasboard/DashBoardPage'
import { PageNotFound } from '../pages/PageNotFound'
    
 function AllRoutes() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/Products' element={<ProductList />} />
    <Route path='/Products/:id' element={<ProductDetail />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
     <Route path='/cart' element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
     <Route path='/order_summary' element={<ProtectedRoutes><OrderPage /></ProtectedRoutes>} />
     <Route path='/dashboard' element={<ProtectedRoutes><DashBoardPage /></ProtectedRoutes>} />
     <Route path='*' element = {<PageNotFound />} />
    </Routes>
    </>
  )
}
 export default AllRoutes
