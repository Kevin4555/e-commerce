import css from "./ProductMini.module.css";
import { Link } from "react-router-dom";

function ProductMini({ product }) {
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-5 p-relative" id={css["product-mini"]}>
      <div id={css["productContainer"]} className="shadow rounded">
        <div className="img-container">
          <Link to={`/product/${product.id}`} className="text-decoration-none">
            <img
              src={process.env.REACT_APP_API_BASE_IMG_URL + `/${product.img.img1}`}
              alt=""
              className="destacados-img w-100 rounded-top"
              draggable="false"
            />
          </Link>
          <button className="icono-btn">
            <i className="bi bi-heart heart-icon"></i>
          </button>
        </div>
        <Link to={`/product/${product.id}`} className="text-decoration-none">
          <div className="border px-2 rounded-bottom" id={css["infoContainer"]}>
            <div className="row">
              <h5 className="mt-3">{product.title}</h5>
              <small className="fw-light col-12 mb-2" id={css["product"]}>
                {product.description.length >= 80
                  ? product.description.substring(0, 80) + "..."
                  : product.description}
              </small>
              <span>
                <small id={css["priceBefore"]}>{Math.floor(product.price * 1.2)} USD</small>
                <small> 20% OFF</small>
              </span>
              <small id={css["price"]} className="fw-bold">
                {product.price} USD
              </small>
              <small id={css["rating"]} className="col-6 text-end">
                <i className="bi bi-star-fill text-warning"></i> {product.rating}
              </small>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProductMini;
