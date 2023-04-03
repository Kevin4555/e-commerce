import "./CartInformation.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PageNavbar from "../../../navbar/PageNavbar";
import Form from "react-bootstrap/Form";
import CartInformationItem from "../CartInformationItem/CartInformationItem";

function CartInformation() {
  const cart = useSelector((state) => state.persistedReducer.cart.items);
  const totalPrice = useSelector((state) => state.persistedReducer.cart.totalPrice);
  return (
    <main>
      <PageNavbar />
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-7 ps-9 py-5">
            <h1 className="fs-2">Manos Creativas - Tienda de Artesanias</h1>
            <div className="fs-6 my-5">
              <Link to="#" className="text-decoration-none text-dark">
                Cart
              </Link>
              <small className="fw-bold fs-6"> > </small>
              <small className="fw-semibold">Información</small>
              <small className="fw-bold fs-6"> > </small>
              <small className="text-secondary">Envío</small>
              <small className="fw-bold fs-6"> > </small>
              <small className="text-secondary">Pago</small>
            </div>
            <div>
              <h2 className="fs-4">Informacón de contacto</h2>
              <div className="my-4 mb-4">
                <small className="d-block fs-6 text-body">Pepe Rodriguez (pepe@gmail.com)</small>
                <button className="btn ps-0">Log out</button>
              </div>
            </div>
            <div>
              <h2 className="fs-4">Dirección de envío</h2>
              <Form className="row">
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>Pais</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>Provincia</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>Codigo postal</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <div className="col-6 d-inline">
                  <Link to="/cart" className="btn ps-0 py-3 px-5 fw-semibold">
                    ← Volver al carrito
                  </Link>
                </div>
                <div className="col-6 d-inline text-end">
                  <Link to="/cart/shipping">
                    <button className="btn py-3 px-5 fw-semibold text-white" id="continue-btn">
                      Continuar al envío
                    </button>
                  </Link>
                </div>
              </Form>
            </div>
            <hr className="my-5" />
            <small className="text-secondary">
              All rights reserved Artistic - Art & Craft Store
            </small>
          </div>
          <div className="col-5 ps-5 pe-9 py-5 bg-secondary-subtle border-start">
            {cart.map((item) => (
              <CartInformationItem key={item.id} item={item} />
            ))}
            <div className="d-flex justify-content-between">
              <small className="fs-6 my-3">Subtotal</small>
              <small className="fs-6 fw-semibold  my-3">${totalPrice}</small>
            </div>
            <div className="d-flex justify-content-between">
              <small className="fs-6 mb-3">Envío</small>
              <small className="fs-6 fw-semibold mb-3">$18.25</small>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <small className="fs-6">Total</small>
              <small className="fw-semibold">
                USD<span className="fs-5 ms-2">${totalPrice + 18.25}</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CartInformation;
