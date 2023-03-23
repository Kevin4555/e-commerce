import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./PageNavbar.css";

function PageNavbar() {
	return (
		<>
			<Navbar
				bg="white"
				variant="light"
				className="flex-column border-bottom"
				sticky="top"
			>
				<div class="position-fixed top-0 end-0">
					<button id="sobreEsteProyecto" className="btn">
						<i class="bi bi-patch-question fs-3"></i>
					</button>
				</div>
				<Container id="mainBar">
					<Navbar.Brand href="/">
						<img
							src="logo.png"
							alt="logo Manos Creativas"
							width="100"
						/>
					</Navbar.Brand>
					<Form className="d-flex flex-grow-1 px-2">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2 flex-grow-1"
							aria-label="Search"
						/>
					</Form>
					<Nav className="ms-auto fs-4">
						<Nav.Link href="#home">
							<i className="bi bi-person-circle"></i>
						</Nav.Link>
						<Nav.Link href="#pricing">
							<i className="bi bi-cart"></i>
						</Nav.Link>
					</Nav>
				</Container>
				<Container id="categoryBar">
					<Nav className="fs-6 flex-grow-1">
						<Nav.Link href="#home">Pinturas</Nav.Link>
						<Nav.Link href="#home">
							Cerámicas & Decoraciones
						</Nav.Link>
						<Nav.Link href="#home">Muebles & Carpintería</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default PageNavbar;
