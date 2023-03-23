import "./App.css";
import SobreEsteProyecto from "./components/pages/SobreEsteProyecto";
import PageNavbar from "./components/navbar/PageNavbar";

function App() {
	return (
		<div className="App container-fluid">
			<PageNavbar></PageNavbar>
			<SobreEsteProyecto></SobreEsteProyecto>
		</div>
	);
}

export default App;
