import "./Cart.css";
import PageNavbar from "../../navbar/PageNavbar";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import CartItem from "./CartItem/CartItem";

function Cart() {
  const cart = useSelector((state) => state.persistedReducer.cart.items);
  const totalPrice = useSelector((state) => state.persistedReducer.cart.totalPrice);

  console.log(cart);
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

          {cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}

          <hr />
          <div className="col-12 mb-4 mt-2">
            <button className="btn text-white" id="btn-continue-buying">
              Seguir comprando
            </button>
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
              <small className="fs-6 ms-2">${totalPrice} USD</small>
            </div>
            <div className="text-end my-4">
              <small className="fs-6">Iva y costos de envio calculados en el Check Out</small>
            </div>
            <div className="text-end mt-5">
              <button className="btn btn-dark w-75">Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
