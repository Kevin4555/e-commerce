import css from "./OrderItem.module.css";
import { Link } from "react-router-dom";

function OrderItem({ item }) {
  return (
    <>
      <div className="col-12 px-4 pb-4">
        <div className="d-flex flex-column flex-md-row">
          <div className={` img-fluid text-center mt-2`}>
            <img
              src={process.env.REACT_APP_API_BASE_URL + `/img/${item.img.img1}`}
              alt=""
              className={`${css.productImg} rounded`}
            />
          </div>
          <div className="my-auto ms-md-3">
            <div className="d-flex justify-content-between mb-2">
              <small className="fs-6 fw-semibold">{item.title}</small>
              <small className="fs-6 fw-semibold">USD {item.price}</small>
            </div>
            <p className="fs-6">{item.description}</p>
          </div>
        </div>
        <div className="d-block d-sm-flex justify-content-between">
          <div className="d-flex flex-column d-sm-inline order-sm-2 text-center text-sm-start">
            <Link to={`/product/${item.slug}`} className="text-decoration-none">
              Ver producto
            </Link>
            <hr className={`${css.hr} mx-3 d-none d-sm-inline my-auto`} />
            <Link className="text-decoration-none my-1 my-sm-0">Comprar de nuevo</Link>
          </div>
          <div className="text-center text-sm-start">
            <small className="fs-6 mt-auto">
              Status: <i className="bi bi-arrow-repeat"></i> Procesando
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderItem;
