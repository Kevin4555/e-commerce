import "./App.css";
import { Routes, Route } from "react-router-dom";

import SobreEsteProyecto from "./components/pages/SobreEsteProyecto";
import ProductPage from "./components/pages/ProductPage/ProductPage";
//import PageNavbar from "./components/navbar/PageNavbar";
import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/Cart/Cart";
import Profile from "./components/pages/Profile/Profile";
import Admin from "./components/pages/Admin/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/about-us" element={<SobreEsteProyecto />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
