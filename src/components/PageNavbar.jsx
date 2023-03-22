import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function PageNavbar() {
	return (
		<>
			<Navbar bg="light" variant="light" fixed="top">
				<Container>
					<Navbar.Brand href="#home">Manos Creativas</Navbar.Brand>
					<Form className="d-flex flex-grow-1 px-5">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2 flex-grow-1"
							aria-label="Search"
						/>
						<Button variant="outline-primary">Search</Button>
					</Form>
					<Nav className="ms-auto fs-4">
						<Nav.Link href="#home">
							<i class="bi bi-person-circle"></i>
						</Nav.Link>
						<Nav.Link href="#pricing">
							<i class="bi bi-cart"></i>
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<Navbar bg="light" variant="light">
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default PageNavbar;
