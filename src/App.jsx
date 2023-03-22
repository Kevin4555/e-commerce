import "./App.css";
import Home from "./components/Home";
import PageNavbar from "./components/PageNavbar";

function App() {
	return (
		<div className="App container">
			<PageNavbar></PageNavbar>
			<Home></Home>
		</div>
	);
}

export default App;
