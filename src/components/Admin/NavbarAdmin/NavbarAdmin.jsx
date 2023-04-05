import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./NavbarAdmin.css";
import { useSelector } from "react-redux";

function NavbarAdmin() {
  let user = useSelector((state) => state.persistedReducer.user);
  return (
    <>
      <Navbar
        bg="white"
        expand="lg"
        variant="light"
        className="flex-column border-bottom shadow"
        sticky="top"
      >
        <Container id="mainBar">
          <Navbar.Brand as={Link} to={"/"} className="col-2 d-flex justify-content-center">
            <img src="../logo.png" alt="logo Manos Creativas" className="mt-2 nav-logo" />
          </Navbar.Brand>
          <h3>Administration Panel</h3>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="col-4">
            <Form id="form" className="d-flex px-2 position-relative">
              <i className="bi  position-absolute"></i>
            </Form>
          </Navbar.Collapse>
          <Navbar.Collapse>
            <Nav className="fs-4 col-2">
              {user ? (
                <Nav.Link as={Link} to={"/profile"}>
                  <i className="bi bi-person-circle fs-3 icon ms-2"></i>
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to={"/login"}>
                  <Button id="button" className="ms-2">
                    Iniciar Sesión
                  </Button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarAdmin;
