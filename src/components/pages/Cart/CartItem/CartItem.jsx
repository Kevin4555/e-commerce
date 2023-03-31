import "../Cart.css";

function CartItem({ item }) {
  return (
    <>
      <div className="col-2 my-4 d-flex justify-content-center">
        <img
          src={process.env.REACT_APP_API_BASE_IMG_URL + `/${item.img.img1}`}
          alt=""
          className="product-image"
        />
      </div>
      <div className="col-4 my-4">
        <div className="row">
          <small className="fs-6">{item.title}</small>
        </div>
      </div>
      <div className="col-2 my-4">
        <small className="fs-6 fw-semibold">${item.price}</small>
      </div>
      <div className="col-2 my-4">
        <div className="d-inline border p-2">
          <button className="btn fw-semibold">-</button>{" "}
          <small className=" fw-semibold">cantidad</small>{" "}
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
    </>
  );
}

export default CartItem;
