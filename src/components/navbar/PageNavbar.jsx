import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./PageNavbar.css";

function PageNavbar() {
  return (
    <>
      <Navbar bg="white" variant="light" className="flex-column border-bottom shadow" sticky="top">
        <Container id="mainBar">
          <Navbar.Brand as={Link} to={"/"}>
            <img src="../logo.png" alt="logo Manos Creativas" width="200" className="mt-2" />
          </Navbar.Brand>
          <Form id="form" className="d-flex px-2 position-relative">
            <i className="bi bi-search position-absolute"></i>
            <Form.Control
              type="search"
              placeholder="Search"
              className="flex-grow-1 rounded-pill"
              aria-label="Search"
              id="search"
            />
          </Form>
          <Nav className="ms-auto fs-4">
            <Nav.Link as={Link} to={"/"}>
              <i className="bi bi-person-circle"></i>
            </Nav.Link>
            <Nav.Link as={Link} to={"/cart"}>
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
              Cerámicas
            </Nav.Link>
            <Nav.Link as={Link} to={"/"}>
              Maderas
            </Nav.Link>
            <Nav.Link as={Link} to={"/"}>
              Tejidos
            </Nav.Link>
            <Nav.Link as={Link} to={"/"}>
              Decoraciones
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
