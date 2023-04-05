import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import css from "./PageNavbar.module.css";
import { useSelector } from "react-redux";

function PageNavbar() {
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
        <Container id={css["mainBar"]}>
          <Navbar.Brand as={Link} to={"/"} className="col-2 d-flex justify-content-center">
            <img src="../logo.png" alt="logo Manos Creativas" className={`mt-2 ${css.navLogo}`} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id={css["searchBar"]} className="col-8">
            <Form id={css["form"]} className="d-flex px-2 position-relative">
              <i className={`bi bi-search position-absolute ${css.searchIcon}`}></i>
              <Form.Control
                type="search"
                placeholder="Search"
                className="flex-grow-1 rounded-pill"
                aria-label="Search"
                id={css["search"]}
              />
            </Form>
          </Navbar.Collapse>
          <Navbar.Collapse>
            <Nav className="fs-4 col-2">
              <Nav.Link as={Link} to={"/cart"}>
                <i className={`bi bi-cart fs-3 ${css.icon}`}></i>
              </Nav.Link>
              {user ? (
                <Nav.Link as={Link} to={"/profile"}>
                  <i className={`bi bi-person-circle fs-3 ${css.icon} ms-2`}></i>
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to={"/login"}>
                  <Button id={css["button"]} className="ms-2">
                    Iniciar Sesión
                  </Button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Navbar.Collapse>
          <Container id={css["categoryBar"]}>
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
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Link id={css["sobreEsteProyecto"]} to={"/about-us"} className={`btn ${css.btn}`}>
          Sobre Este Proyecto
        </Link>
      </div>
    </>
  );
}

export default PageNavbar;
