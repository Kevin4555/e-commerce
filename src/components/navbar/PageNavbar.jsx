import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
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
				<Container id="mainBar">
					<Navbar.Brand as={Link} to={"/"}>
						<img
							src="../logo.png"
							alt="logo Manos Creativas"
							width="100"
							className="mt-2"
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
						<Nav.Link as={Link} to={"/"}>
							<i className="bi bi-person-circle"></i>
						</Nav.Link>
						<Nav.Link as={Link} to={"/"}>
							<i className="bi bi-cart"></i>
						</Nav.Link>
					</Nav>
				</Container>
				<Container id="categoryBar">
					<Nav className="fs-6 flex-grow-1">
						<Nav.Link as={Link} to={"/"}>
							Pinturas
						</Nav.Link>
						<Nav.Link as={Link} to={"/"}>
							Cerámicas & Decoraciones
						</Nav.Link>
						<Nav.Link as={Link} to={"/"}>
							Muebles & Carpintería
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<div>
				<Link id="sobreEsteProyecto" to={"/about-us"} className="btn">
					Sobre Este Proyecto
				</Link>
			</div>
		</>
	);
}

export default PageNavbar;
