import css from "../Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../../../slices/cartSlice";

function CartItem({ item }) {
  let cart = useSelector((state) => state.persistedReducer.cart);
  const cartItem = cart.items.find((cartItem) => cartItem.id === item.id);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...cartItem, quantity: 1 }));
  };
  const handleRemoveItemFromCart = () => {
    dispatch(removeItemFromCart(cartItem));
  };
  return (
    <>
      <div className="col-2 my-4 d-flex justify-content-center">
        <img
          src={process.env.REACT_APP_API_BASE_IMG_URL + `/${item.img.img1}`}
          alt=""
          className={css.productImage}
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
          <button className="btn fw-semibold" onClick={handleRemoveItemFromCart}>
            -
          </button>{" "}
          <small className=" fw-semibold">{cartItem.quantity}</small>{" "}
          <button className="btn fw-semibold" onClick={handleAddToCart}>
            +
          </button>
        </div>
        <button className="btn">
          <i className="bi bi-trash3"></i>
        </button>
      </div>
      <div className="col-2 my-4">
        <small className="fs-6 fw-semibold">${item.price * item.quantity}</small>
      </div>
      <hr />
    </>
  );
}

export default CartItem;
