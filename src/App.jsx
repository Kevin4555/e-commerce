import "./App.css";
import { Routes, Route } from "react-router-dom";

import SobreEsteProyecto from "./components/pages/SobreEsteProyecto";
import ProductPage from "./components/pages/ProductPage/ProductPage";
//import PageNavbar from "./components/navbar/PageNavbar";
import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/Cart/Cart";
<<<<<<< Updated upstream
import SignUp from "./components/pages/SignUp/SignUp";
=======
import Profile from "./components/pages/Profile/Profile";
>>>>>>> Stashed changes

function App() {
  return (
    <Routes>
<<<<<<< Updated upstream
      <Route path="/signup" element={<SignUp />} />
=======
>>>>>>> Stashed changes
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/about-us" element={<SobreEsteProyecto />} />
      <Route path="/cart" element={<Cart />} />
<<<<<<< Updated upstream
=======
      <Route path="/profile" element={<Profile />} />
>>>>>>> Stashed changes
    </Routes>
  );
}

export default App;
