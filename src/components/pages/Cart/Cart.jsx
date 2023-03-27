import "./Cart.css";
import PageNavbar from "../../navbar/PageNavbar";
import Form from "react-bootstrap/Form";

function Cart() {
  return (
    <main className="bg-secondary-subtle">
      <PageNavbar />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="border rounded p-3 bg-white mt-5">
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <i className="bi bi-cart4 fs-4"></i>
                  <h4 className="d-inline ms-2">Resumen de pedido</h4>
                </div>
                <button className="border-0 bg-white my-auto">
                  Eliminar todos
                </button>
              </div>

              <div className="row g-0">
                <div className="col-6">
                  <img
                    src="/img/pexels-los-muertos-crew-8066050.jpg"
                    alt=""
                    className="product-img rounded d-inline"
                  />
                  <small className="fs-6 d-block">Nombre de producto</small>
                </div>

                <div className="col-6 text-end my-auto">
                  <div className="d-inline">
                    <button className="btn rounded-pill">-</button>
                    <small className="px-2">1</small>
                    <button className="btn rounded-pill">+</button>
                  </div>
                  <div className="d-inline">
                    <small className="">
                      19,32<span className="ms-1">USD</span>
                    </small>
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
                  <small className="fs-6 d-block">Nombre de producto</small>
                </div>

                <div className="col-6 text-end my-auto">
                  <div className="d-inline">
                    <button className="btn rounded-pill">-</button>
                    <small className="px-2">1</small>
                    <button className="btn rounded-pill">+</button>
                  </div>
                  <div className="d-inline">
                    19,32<span className="ms-1">USD</span>
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

                  <small className="fs-6 d-block">Nombre de producto</small>
                </div>

                <div className="col-6 text-end my-auto">
                  <div className="d-inline">
                    <button className="btn rounded-pill">-</button>
                    <small className="px-2">1</small>
                    <button className="btn rounded-pill">+</button>
                  </div>
                  <div className="d-inline">
                    19,32<span className="ms-1">USD</span>
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
                  <small className="fs-6">Total(tax incluido)</small>
                  <small className="">163,74 USD</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <h2 className="mt-5 fs-4">Información de contacto</h2>
            <Form>
              <div className="row">
                <Form.Group
                  className="mb-3 col-12 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Dirección de correo electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-12 col-lg-6"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
              <hr />
              <h2 className="my-3 fs-4">Información de envío</h2>
              <div className="row">
                <Form.Group
                  className="mb-3 col-6"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-6"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <div className="row">
                <Form.Group
                  className="mb-3 col-6"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-6"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Pais</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-6"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Estado/Provincia</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-6"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Código postal</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
              <hr />
              <h2 className="my-3 fs-4">Método de pago</h2>
              <div className="mb-3">
                <div className="d-flex flex-lg-row flex-column">
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
                </div>
                <Form.Group className="my-3" controlId="formBasicPassword">
                  <Form.Label>Número de tarjeta</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Nombre del titular</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <div className="row">
                  <Form.Group
                    className="mb-3 col-8"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Fecha de expiración (MM/YY)</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 col-8 col-sm-4"
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
                    Realizar pago
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn border w-100 fw-bold">Cancelar</button>
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
