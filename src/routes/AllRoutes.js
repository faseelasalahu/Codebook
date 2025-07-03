import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";
import {Homepage} from '../pages/Home/components/Homepage'
import  ProductList from '../pages/Products/ProductList'
import { ProductDetail} from '../pages/ProductDetail'
import {Login} from '../pages/Login'
import {Register} from '../pages/Register'
import {CartPage} from '../pages/Cart/CartPage'
import {OrderPage} from '../pages/order/OrderPage'
import DashboardPage from '../pages/Dasboard/DashboardPage'
import { PageNotFound} from '../pages/PageNotFound'


function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Products" element={<ProductList />} />
        <Route path="/Products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoutes>
              <CartPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/order_summary"
          element={
            <ProtectedRoutes>
              <OrderPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <DashboardPage />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default AllRoutes;
