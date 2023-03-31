import "./Order.css";
import { Link } from "react-router-dom";

function Order() {
  return (
    <>
      <div className="container ps-0">
        <div className="border rounded my-4 ">
          <div className="row">
            <div className="col-6 d-flex justify-content-between px-4 pt-4">
              <div className="d-flex flex-column">
                <small className="fs-6 fw-semibold">Order id</small>
                <small>1</small>
              </div>
              <div className="d-flex flex-column">
                <small className="fs-6 fw-semibold">Date placed</small>
                <small>Mar 28, 2023</small>
              </div>
              <div className="d-flex flex-column">
                <small className="fs-6 fw-semibold">Total amount</small>
                <small className="fw-medium">USD 195.00</small>
              </div>
            </div>
            <div className="col-6 text-end mt-auto px-4 pt-4">
              <button className="btn border me-1">Ver Pedido</button>
              <button className="btn border">Ver Factura</button>
            </div>
          </div>
          <hr className="mb-0" />
          <div className="row">
            <div className="col-12 px-4 pb-4">
              <div className="d-flex">
                <img src="/img/tom-crew-YA2E3d7a9Wo-unsplash.jpg" alt="" className="product-img" />
                <div className="my-auto ms-3">
                  <div className="d-flex justify-content-between mb-2 ">
                    <small className="fs-6 fw-semibold">Product Name</small>
                    <small className="fs-6 fw-semibold">USD 195.00</small>
                  </div>
                  <p className="fs-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat nemo. Hic
                    harum aliquid quia, non, placeat obcaecati ducimus aliquam fuga nostrum fugiat
                    id error, cum sequi illo corrupti debitis.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <small className="fs-6 mt-auto">
                  Status: <i class="bi bi-arrow-repeat"></i> Procesando
                </small>
                <div>
                  <Link className="text-decoration-none">Ver producto</Link>
                  <hr className="hr d-inline mx-3" />
                  <Link className="text-decoration-none">Comprar de nuevo</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border rounded my-4">
          <div className="row">
            <div className="col-6 d-flex justify-content-between px-4 pt-4">
              <div className="d-flex flex-column">
                <small className="fs-6 fw-semibold">Order id</small>
                <small>1</small>
              </div>
              <div className="d-flex flex-column">
                <small className="fs-6 fw-semibold">Date placed</small>
                <small>Mar 28, 2023</small>
              </div>
              <div className="d-flex flex-column">
                <small className="fs-6 fw-semibold">Total amount</small>
                <small className="fw-medium">USD 195.00</small>
              </div>
            </div>
            <div className="col-6 text-end mt-auto px-4 pt-4">
              <button className="btn border me-1">Ver Pedido</button>
              <button className="btn border">Ver Factura</button>
            </div>
          </div>
          <hr className="mb-0" />
          <div className="row">
            <div className="col-12 px-4 pb-4">
              <div className="d-flex">
                <img src="/img/tom-crew-YA2E3d7a9Wo-unsplash.jpg" alt="" className="product-img" />
                <div className="my-auto ms-3">
                  <div className="d-flex justify-content-between mb-2 ">
                    <small className="fs-6 fw-semibold">Product Name</small>
                    <small className="fs-6 fw-semibold">USD 195.00</small>
                  </div>
                  <p className="fs-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat nemo. Hic
                    harum aliquid quia, non, placeat obcaecati ducimus aliquam fuga nostrum fugiat
                    id error, cum sequi illo corrupti debitis.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <small className="fs-6 mt-auto">
                  Status: <i class="bi bi-arrow-repeat"></i> Procesando
                </small>
                <div>
                  <Link className="text-decoration-none">Ver producto</Link>
                  <hr className="hr d-inline mx-3" />
                  <Link className="text-decoration-none">Comprar de nuevo</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Order;
