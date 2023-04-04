import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import SobreEsteProyecto from "./components/pages/SobreEsteProyecto/SobreEsteProyecto";
import Product from "./components/pages/Product/Product";
import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/Cart/Cart";
import CartShipping from "./components/pages/Cart/CartShipping/CartShipping";
import CartInformation from "./components/pages/Cart/CartInformation/CartInformation";
import CartPayment from "./components/pages/Cart/CartPayment/CartPayment";
import Profile from "./components/pages/Profile/Profile";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/SignUp";
import Category from "./components/pages/Category/Category";
import React from "react";
import AdminProducts from "./components/Admin/AdminProducts";
import AdminUsers from "./components/Admin/AdminUsers";
import AdminCategories from "./components/Admin/AdminCategories";
import AdminReviews from "./components/Admin/AdminReviews";
import AdminOrders from "./components/Admin/AdminOrders";
import AdminLogin from "./components/Admin/AdminLogin";
import EditUser from "./components/Admin/Edit/EditUser";
import EditProduct from "./components/Admin/Edit/EditProduct";
import EditCategoryId from "./components/Admin/Edit/EditCategoryId";
import CreateUser from "./components/Admin/Create/CreateUser";
import CreateProduct from "./components/Admin/Create/CreateProduct";
import CreateCategory from "./components/Admin/Create/CreateCategory";
/* import Busqueda from "./components/pages/Busqueda/Busqueda"; */

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/about-us" element={<SobreEsteProyecto />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/information" element={<CartInformation />} />
      <Route path="/cart/shipping" element={<CartShipping />} />
      <Route path="/cart/payment" element={<CartPayment />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/categories" element={<Category />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/categories" element={<AdminCategories />} />
      <Route path="/admin/products" element={<AdminProducts />} />
      <Route path="/admin/reviews" element={<AdminReviews />} />
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/editUser" element={<EditUser />} />
      <Route path="/admin/editProduct/:id" element={<EditProduct />} />
      <Route path="/admin/editCategoryId" element={<EditCategoryId />} />
      <Route path="/admin/createUser" element={<CreateUser />} />
      <Route path="/admin/createCategory" element={<CreateCategory />} />
      <Route path="/admin/createProduct" element={<CreateProduct />} />

      {/* <Route path="/admin" element={<Admin />} /> */}
    </Routes>

    /* ,

const responseMessage = (response) => {
  console.log(response);
};
const errorMessage = (error) => {
  console.log(error);
};

  <div>
    <h2>React Google Login</h2>
    <br />
    <br />
    <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
  </div> */
  );
}

export default App;
