import "./Cart.css";
import PageNavbar from "../../navbar/PageNavbar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Cart() {
  return (
    <main>
      <PageNavbar />
      <div className="container-fluid py-5 d-flex align-item-center justify-content-center flex-column">
        <h1 className="fs-3 fw-bold text-light text-center">Your Shopping Cart</h1>
        <small className="fs-6 fw-semibold text-light text-center">Home</small>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <small className="fs-5 fw-semibold">Product</small>
          </div>
          <div className="col-2">
            <small className="fs-5 fw-semibold">Price</small>
          </div>
          <div className="col-2">
            <small className="fs-5 fw-semibold">Quantity</small>
          </div>
          <div className="col-2">
            <small className="fs-5 fw-semibold">Total</small>
          </div>
          <hr className="my-3" />
          <div className="col-2 my-4">
            <img src="/img/pexels-rodnae-productions-6806697.jpg" alt="" className="product-img" />
          </div>
          <div className="col-4 my-4">
            <div className="row">
              <small className="fs-6">Plus Women Cotton Solid Soft Light</small>
              <small className="fs-6">Color: red</small>
              <small className="fs-6">Size: S</small>
            </div>
          </div>
          <div className="col-2 my-4">
            <small className="fs-6 fw-semibold">$370.00</small>
          </div>
          <div className="col-2 my-4">
            <div className="d-inline border p-2">
              <button className="btn fw-semibold">-</button>{" "}
              <small className=" fw-semibold">2</small>{" "}
              <button className="btn fw-semibold">+</button>
            </div>
            <button className="btn">
              <i class="bi bi-trash3"></i>
            </button>
          </div>
          <div className="col-2 my-4">
            <small className="fs-6 fw-semibold">$740.00</small>
          </div>
          <hr />
          <div className="col-2 my-4">
            <img src="/img/pexels-rodnae-productions-6806697.jpg" alt="" className="product-img" />
          </div>
          <div className="col-4 my-4">
            <div className="row my-auto mx-0">
              <small className="fs-6">Plus Women Cotton Solid Soft Light</small>
              <small className="fs-6">Color: red</small>
              <small className="fs-6">Size: S</small>
            </div>
          </div>
          <div className="col-2 my-4">
            <small className="fs-6 fw-semibold">$370.00</small>
          </div>
          <div className="col-2 my-4">
            <div className="d-inline border p-2">
              <button className="btn fw-semibold">-</button>{" "}
              <small className=" fw-semibold">2</small>{" "}
              <button className="btn fw-semibold">+</button>
            </div>
            <button className="btn">
              <i class="bi bi-trash3"></i>
            </button>
          </div>
          <div className="col-2 my-4">
            <small className="fs-6 fw-semibold">$740.00</small>
          </div>
          <hr />
          <div className="col-12 mb-4 mt-2">
            <Link to="/" className="btn text-white" id="btn-continue-buying">
              Seguir comprando
            </Link>
          </div>
          <div className="col-6 mt-4">
            <div>
              <label htmlFor="note" className="fs-6 mb-3">
                Instrucciones especiales para el pedido
              </label>
              <textarea name="note" id="note" cols="30" rows="5" className="w-75"></textarea>
            </div>
          </div>
          <div className="col-6 mt-4">
            <div className="text-end mb-2">
              <small className="fs-6">Subtotal</small>
              <small className="fs-6 ms-2">$1,110.00</small>
            </div>
            <div className="text-end my-4">
              <small className="fs-6">Iva y costos de envio calculados en el Check Out</small>
            </div>
            <div className="text-end mt-5">
              <Link to="/cart/information" className="btn btn-dark w-75">
                Check Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
