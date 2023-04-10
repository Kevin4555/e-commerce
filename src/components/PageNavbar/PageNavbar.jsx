import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import css from "./PageNavbar.module.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

function PageNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  let user = useSelector((state) => state.persistedReducer.user);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/categories`,
        });
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
  return (
    <>
      <Navbar
        bg="white"
        expand="lg"
        variant="light"
        className="flex-column border-bottom shadow"
        sticky="top"
      >
        <Container id={css["mainBar"]} className={openNavbar ? css.open : css.close}>
          <Navbar.Brand as={Link} to={"/"} className="col-2 d-flex justify-content-center">
            <img src="../logo.png" alt="logo Manos Creativas" className={`${css.navLogo}`} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setOpenNavbar(!openNavbar)}
          />
          <Navbar.Collapse id={css["searchBar"]} className="col-8">
            <Form
              id={css["form"]}
              className={`d-flex px-2 position-relative ${openNavbar ? "" : css.noDisplay}`}
            >
              <i className={`bi bi-search position-absolute ${css.searchIcon} `}></i>
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
            <Nav className={`fs-4 col-2 ${openNavbar ? "" : css.noDisplay}`} id={css["icons"]}>
              {user ? (
                <Nav.Link as={Link} to={"/profile"} className={css.profile}>
                  <i className={`bi bi-person-circle ${css.icon} `}></i>
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to={"/login"}>
                  <Button id={css["button"]} className="btn">
                    Iniciar Sesión
                  </Button>
                </Nav.Link>
              )}
              <Nav.Link as={Link} to={"/cart"}>
                <i className={`bi bi-cart ${css.icon}`}></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Navbar.Collapse>
          <Container id={css["categoryBar"]}>
            <Nav className="fs-6 flex-grow-1">
              {categories.map((category) => (
                <Nav.Link
                  key={`${category.name}_${category.id}`}
                  as={Link}
                  to={"/categories/" + category.id}
                >
                  {category.name}
                </Nav.Link>
              ))}
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