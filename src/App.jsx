import "./App.css";
import { Routes, Route } from "react-router-dom";

import SobreEsteProyecto from "./components/pages/SobreEsteProyecto";
import ProductPage from "./components/pages/ProductPage/ProductPage";
//import PageNavbar from "./components/navbar/PageNavbar";
import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/Cart/Cart";
import Profile from "./components/pages/Profile/Profile";
import Login from "./components/pages/Login/Login";

// import Admin from "./components/pages/Admin/Admin";
import SignUp from "./components/pages/SignUp/SignUp";
import React from "react";
import { GoogleLogin } from "@react-oauth/google";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/about-us" element={<SobreEsteProyecto />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
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
