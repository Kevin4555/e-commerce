import "./CartPayment.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageNavbar from "../../../navbar/PageNavbar";
import Form from "react-bootstrap/Form";
import CartInformationItem from "../CartInformationItem/CartInformationItem";
import axios from "axios";

function CartPayment() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const userId = useSelector((state) => state.persistedReducer.user.id);
  const cart = useSelector((state) => state.persistedReducer.cart);
  const totalPrice = useSelector((state) => state.persistedReducer.cart.totalPrice);

  const handleCreateOrder = async (event) => {
    event.preventDefault();
    try {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_BASE_URL}/orders`,
        data: { cart, userId },
      });
      navigate("#");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
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
              <small className="">Información</small>
              <small className="fw-bold fs-6"> > </small>
              <small className="fw-semibold">Envío</small>
              <small className="fw-bold fs-6"> > </small>
              <small className="text-secondary">Pago</small>
            </div>
            <div className="row">
              <div className="col-12 border rounded px-3 py-2 mb-5">
                <div className="row">
                  <div className="col-2 d-flex justify-content-between align-items-center">
                    <small className="fs-6 text-secondary">Contact</small>
                  </div>
                  <div className="col-8 d-flex justify-content-between align-items-center">
                    <small className="fs-6 ps-3">pepe@gmai.com</small>
                  </div>
                  <div className="col-2 text-end d-flex justify-content-between align-items-center">
                    <button className="btn">Editar</button>
                  </div>

                  <hr className="my-2" />

                  <div className="col-2 d-flex justify-content-between align-items-center">
                    <small className="fs-6 text-secondary">Envío a</small>
                  </div>
                  <div className="col-8 d-flex justify-content-between align-items-center">
                    <small className="fs-6 ps-3">Br. Artigas 9999, Montevideo 11800, Uruguay</small>
                  </div>
                  <div className="col-2 text-end d-flex justify-content-between align-items-center">
                    <button className="btn">Editar</button>
                  </div>
                </div>
              </div>

              <h3 className="fs-5 p-0">Pago</h3>

              <small className="fs-6 p-0 mb-3 mt-2">
                Todas las transacciones son seguras y encriptadas
              </small>
              <div className="col-12 border rounded p-0 mb-5">
                <div className="p-3">
                  <h4 className="fs-6 fw-bold">Tarjeta de crédito</h4>
                </div>
                <hr className="m-0" />
                <Form>
                  <div className="row p-3 bg-secondary-subtle">
                    <Form.Group className="mb-3 col-12 px-0" controlId="formBasicEmail">
                      <Form.Control type="number" placeholder="Número de tarjeta" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-12 px-0" controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Nombre del titular" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-6 ps-0" controlId="formBasicEmail">
                      <Form.Control type="date" placeholder="Fecha de expiracón (MM / YY)" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-6 pe-0" controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="CVV" />
                    </Form.Group>
                  </div>
                </Form>
              </div>

              <div className="col-6 d-inline">
                <Link to="/cart/shipping" className="btn ps-0 py-3 px-5 fw-semibold">
                  ← Volver a envío
                </Link>
              </div>
              <div className="col-6 d-inline text-end">
                <button className="btn py-3 px-5 fw-semibold text-white" id="continue-btn">
                  Realizar el pago
                </button>
              </div>
            </div>
            <hr className="my-5" />
            <small className="text-secondary">
              All rights reserved Artistic - Art & Craft Store
            </small>
          </div>
          <div className="col-5 ps-5 pe-9 py-5 bg-secondary-subtle border-start">
            {cart.items.map((item) => (
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

export default CartPayment;
