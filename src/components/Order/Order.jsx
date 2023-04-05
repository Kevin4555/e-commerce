import OrderItem from "./OrderItem/OrderItem";

function Order({ order }) {
  return (
    <>
      <div className="container ps-0">
        <div className="border rounded my-4 ">
          <div className="row">
            <div className="col-6 d-flex justify-content-between px-4 pt-4 mx-auto">
              <div className="d-flex flex-column">
                <small className="fs-6 fw-semibold">Order id</small>
                <small>{order.id}</small>
              </div>
              <div className="d-flex flex-column">
                <small className="fs-6 fw-semibold">Date placed</small>
                <small>{order.createdAt}</small>
              </div>
              <div className="d-flex flex-column">
                <small className="fs-6 fw-semibold">Total amount</small>
                <small className="fw-medium">USD {order.totalPrice}</small>
              </div>
            </div>
            <div className="col-6 text-end mt-auto px-4 pt-4 mx-auto">
              <button className="btn border me-1">Ver Pedido</button>
              <button className="btn border">Ver Factura</button>
            </div>
          </div>
          <hr className="mb-0" />
          <div className="row">
            {order.products.items.map((item) => (
              <OrderItem item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Order;
