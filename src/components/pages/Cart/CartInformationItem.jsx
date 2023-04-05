function CartInformationItem({ item }) {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center my-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="position-relative info-img-container">
            <img
              src={process.env.REACT_APP_API_BASE_URL + `/img/${item.img.img1}`}
              alt=""
              className="info-img rounded me-2 w-50"
            />
            <small className="position-absolute top-0 end-0 rounded-pill bg-secondary text-white px-2">
              {item.quantity}
            </small>
          </div>
          <div>
            <small className="fs-6">{item.title}</small>
          </div>
        </div>
        <div className="d-inline">
          <small className="fs-6 fw-semibold">${item.price}</small>
        </div>
      </div>
      <hr />
    </>
  );
}

export default CartInformationItem;
