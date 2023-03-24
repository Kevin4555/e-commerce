import "./Cart.css";
import PageNavbar from "../../navbar/PageNavbar";
import Form from "react-bootstrap/Form";

function Cart() {
  return (
    <main className="bg-secondary-subtle">
      <PageNavbar />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="border rounded p-3 bg-white mt-5">
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <i className="bi bi-cart4 fs-4"></i>
                  <h4 className="d-inline ms-2">Order summary</h4>
                </div>
                <button className="border-0 bg-white my-auto">
                  Remove all
                </button>
              </div>

              <div className="row g-0">
                <div className="col-6">
                  <img
                    src="/img/pexels-los-muertos-crew-8066050.jpg"
                    alt=""
                    className="product-img rounded d-inline"
                  />
                  <small className="ms-2 fs-6 ">Item name here</small>
                </div>

                <div className="col-6 text-end my-auto">
                  <div className="d-inline">
                    <button className="btn rounded-pill">-</button>
                    <small className="px-2">1</small>
                    <button className="btn rounded-pill">+</button>
                  </div>
                  <div className="d-inline">
                    <small className="">19,32 USD</small>
                  </div>
                  <div className="d-inline ms-2">
                    <i className="bi bi-trash3"></i>
                  </div>
                </div>
              </div>

              <div className="row g-0 my-3">
                <div className="col-6">
                  <img
                    src="/img/pexels-rodnae-productions-6806697.jpg"
                    alt=""
                    className="product-img rounded d-inline"
                  />
                  <small className="ms-2 fs-6 ">Item name here</small>
                </div>

                <div className="col-6 text-end my-auto">
                  <div className="d-inline">
                    <button className="btn rounded-pill">-</button>
                    <small className="px-2">1</small>
                    <button className="btn rounded-pill">+</button>
                  </div>
                  <div className="d-inline">
                    <small className="">19,32 USD</small>
                  </div>
                  <div className="d-inline ms-2">
                    <i className="bi bi-trash3"></i>
                  </div>
                </div>
              </div>

              <div className="row g-0">
                <div className="col-6">
                  <img
                    src="/img/pexels-vlada-karpovich-5602996.jpg"
                    alt=""
                    className="product-img rounded d-inline"
                  />

                  <small className="ms-2 fs-6 ">Item name here</small>
                </div>

                <div className="col-6 text-end my-auto">
                  <div className="d-inline">
                    <button className="btn rounded-pill">-</button>
                    <small className="px-2">1</small>
                    <button className="btn rounded-pill">+</button>
                  </div>
                  <div className="d-inline">
                    <small className="">19,32 USD</small>
                  </div>
                  <div className="d-inline ms-2">
                    <i className="bi bi-trash3"></i>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <div className="d-flex justify-content-between">
                  <small className="fs-6">Subtotal</small>
                  <small className="">134,21 USD</small>
                </div>
                <div className="d-flex justify-content-between">
                  <small className="fs-6">Taxes</small>
                  <small className="">29,53 USD</small>
                </div>
                <div className="d-flex justify-content-between">
                  <small className="fs-6">Total(including tax)</small>
                  <small className="">163,74 USD</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <h2 className="mt-5 fs-4">Contact information</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <hr />
              <h2 className="my-3 fs-4">Shipping information</h2>
              <div className="row">
                <Form.Group
                  className="mb-3 col-6"
                  controlId="formBasicPassword"
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-6"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <div className="row">
                <Form.Group
                  className="mb-3 col-6"
                  controlId="formBasicPassword"
                >
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-6"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Country</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-6"
                  controlId="formBasicPassword"
                >
                  <Form.Label>State/Province</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-6"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Postal code</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <hr />
              <h2 className="my-3 fs-4">Payment</h2>
              <div className="mb-3">
                <Form.Check
                  inline
                  label="Tarjeta de crédito"
                  name="group1"
                  type="radio"
                  id="inline-radio-1"
                />
                <Form.Check
                  inline
                  label="MercadoPago"
                  name="group1"
                  type="radio"
                  id="inline-radio-2"
                />
                <Form.Check
                  inline
                  name="group1"
                  label="PayPal"
                  type="radio"
                  id="inline-radio-3"
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Card number</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Name on card</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <div className="row">
                  <Form.Group
                    className="mb-3 col-8"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Expiration date (MM/YY)</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 col-4"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>CVC</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-6">
                  <button className="btn border w-100 fw-bold">
                    Make Payment
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn border w-100 fw-bold">Cancel</button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
