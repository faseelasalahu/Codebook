import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Homepage from '../pages/Home/components/Homepage'
import ProductList from '../pages/Products/ProductList'
import  {ProductDetail}  from '../pages/ProductDetail'
    
 function AllRoutes() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/Products' element={<ProductList />} />
    <Route path='/Products/:id' element={<ProductDetail />} />
    </Routes>
    </>
  )
}
 export default AllRoutes
