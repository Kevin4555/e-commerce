import "./App.css";
import { Routes, Route } from "react-router-dom";

import SobreEsteProyecto from "./components/pages/SobreEsteProyecto";
import ProductPage from "./components/pages/ProductPage/ProductPage";
//import PageNavbar from "./components/navbar/PageNavbar";
import Home from "./components/pages/Home/Home";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products/:id" element={<ProductPage />} />
			<Route path="/about-us" element={<SobreEsteProyecto />} />
		</Routes>
	);
}

export default App;
