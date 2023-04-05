import css from "./OrderItem.module.css";
import { Link } from "react-router-dom";

function OrderItem({ item }) {
  return (
    <>
      <div className="col-12 px-4 pb-4">
        <div className="d-flex flex-column flex-md-row">
          <img
            src={process.env.REACT_APP_API_BASE_URL + `/img/${item.img.img1}`}
            alt=""
            className={`${css.productImg} mx-auto"`}
          />
          <div className="my-auto ms-3">
            <div className="d-flex justify-content-between mb-2">
              <small className="fs-6 fw-semibold">{item.title}</small>
              <small className="fs-6 fw-semibold">USD {item.price}</small>
            </div>
            <p className="fs-6">{item.description}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <small className="fs-6 mt-auto">
            Status: <i className="bi bi-arrow-repeat"></i> Procesando
          </small>
          <div>
            <Link className="text-decoration-none">Ver producto</Link>
            <hr className={`${css.hr} d-inline mx-3`} />
            <Link className="text-decoration-none">Comprar de nuevo</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderItem;
