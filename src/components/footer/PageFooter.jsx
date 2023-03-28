import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./PageFooter.css";
import { IconName } from "react-icons/bs";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
></link>;

function PageFooter() {
  return (
    <>
      <div>
        <footer className=" py-4 navbar-dark bg-secondary" id="text-footer">
          <div className="container">
            <nav className="row">
              <Link
                to="/"
                className="col-12 col-md-3 d-flex align-items-center justify-content-center"
              >
                <img src="./logo.png" alt="logo" className="mx-2" width="150" />
              </Link>
              <ul className="col-12 col-md-3 list-unstyled">
                <li className="font-weight-bold mb-2 navbar-dark bg-secondary">
                  Manos Creativas. Derechos reservados.
                </li>
                <li className="text-center">2023</li>
              </ul>
              <ul className="col-12 col-md-3 list-unstyled">
                <li className="font-weight-bold mb-2">
                  <Link to="../pages/Product/Product.jsx" className="text-reset">
                    Productos
                  </Link>
                </li>
                <li className="font-weight-bold mb-2">
                  <Link
                    to="../pages/SobreEsteProyecto/SobreEsteProyecto.jsx"
                    className="text-reset"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
              <ul className="col-12 col-md-3 list-unstyled ">
                <li className="font-weight-bold mb-2 ">Seguinos</li>
                <li className="d-flex justify-content-between">
                  <i className="bi bi-instagram" />
                  <i className="bi bi-facebook" />
                  <i className="bi bi-twitter" />
                  <i className="bi bi-youtube" />
                </li>
              </ul>
              <div className="container">
                <p className="text-center">Powered by HackTeam</p>
              </div>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}

export default PageFooter;
