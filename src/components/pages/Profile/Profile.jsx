import css from "./Profile.module.css";
import PageNavbar from "../../PageNavbar/PageNavbar";
import Order from "../../Order/Order";
import Newsletter from "../../Newsletter/Newsletter";
import Footer from "../../Footer/Footer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../../slices/usersSlice";
import axios from "axios";

function Profile() {
  let user = useSelector((state) => state.persistedReducer.user);
  window.document.title = `${user.firstname} ${user.lastname}`;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [isLoading, setIsLoading] = useState(true);
  const [block, setBlock] = useState("d-block");
  const [none, setNone] = useState("d-none");
  const [error, setError] = useState("");

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 750);
  }, []);

  function handleLogOut() {
    dispatch(removeUser());
    navigate("/");
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/products`,
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/orders`,
        });
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  const handleEditUser = async (event) => {
    event.preventDefault();
    let formdata = new FormData(event.target);
    try {
      await axios({
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "patch",
        url: `${process.env.REACT_APP_API_BASE_URL}/users/${user.id}`,
        data: formdata,
      });
      navigate("/admin/users");
    } catch (err) {
      console.log(err);
      setError(true);
    }
    setBlock("d-block");
    setNone("d-none");
  };

  const ordersFromLoggedUser = orders.filter((order) => order.userId === user.id);
  if (isLoading)
    return (
      <div className="screen">
        <div className="spinner"></div>
      </div>
    );
  else
    return (
      <>
        <PageNavbar />
        <main>
          <div
            id={css["topBanner"]}
            className="container-fluid py-5 d-flex align-item-center justify-content-center flex-column"
          >
            <h1 className="fs-2 fw-bold text-light text-center">Mi Perfil</h1>
            <small className="fs-6 fw-semibold text-light text-center">Home</small>
          </div>
          <div className="container mt-5">
            <div className="col-12 col-lg-8 order-lg-1">
              {/* <h2 className="fs-4">Favoritos</h2>
              {products && (
                <MultiItemCarousel products={products} productsPerPage={4} className="" />
              )} */}
            </div>
            <div className="row">
              <div className="col-12 col-lg-4 order-lg-1">
                <div id={css["userProfile"]} className="shadow text-center p-4 rounded mb-5">
                  <img
                    src={`${process.env.REACT_APP_API_BASE_IMG_URL}/${user.avatar}`}
                    alt="Profile"
                    className={`${css.profileImg} rounded-pill`}
                  />
                  <h2 className="mb-0 mt-3">
                    {user.firstname} {user.lastname}
                  </h2>
                  <small>{user.email}</small>
                  <div className={`row mt-3 bg-white p-5 p-lg-2 rounded shadow ${block}`}>
                    <div className="col-12 col-sm-6 d-lg-flex flex-lg-column text-start my-2">
                      <small className="fw-bold fs-6">Firstname: </small>
                      <small className="fs-6">{user.firstname}</small>
                    </div>
                    <div className="col-12 col-sm-6 d-lg-flex flex-lg-column text-start my-2">
                      <small className="fw-bold fs-6">Lastname: </small>
                      <small className="fs-6">{user.lastname}</small>
                    </div>
                    <div className="col-12 col-sm-6 d-lg-flex flex-lg-column text-start my-2">
                      <small className="fs-6 fw-bold">Phone: </small>
                      <small className="fs-6">{user.phone}</small>
                    </div>
                    <div className="col-12 d-lg-flex flex-lg-column text-start my-2">
                      <small className="fw-bold fs-6">Email: </small>
                      <small className="fs-6">{user.email}</small>
                    </div>
                    <div className="col-12 d-lg-flex flex-lg-column text-start my-2">
                      <small className="fw-bold fs-6">Address: </small>
                      <small className="fs-6">{user.address}</small>
                    </div>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        setBlock("d-none");
                        setNone("d-block");
                      }}
                    >
                      Editar
                    </button>
                    <button className="btn btn-danger mt-2" onClick={handleLogOut}>
                      Cerrar sesión
                    </button>
                  </div>
                  <form action="">
                    <div className={`row mt-3 bg-white p-5 p-lg-2 rounded shadow ${none}`}>
                      <div className="col-12 col-sm-6 d-lg-flex flex-lg-column text-start my-2">
                        <label className="fw-bold fs-6">Firstname: </label>
                        <input
                          className="fs-6 rounded"
                          onChange={(event) => setFirstname(event.target.value)}
                          value={firstname}
                        ></input>
                      </div>
                      <div className="col-12 col-sm-6 d-lg-flex flex-lg-column text-start my-2">
                        <label className="fw-bold fs-6">Lastname: </label>
                        <input
                          className="fs-6 rounded"
                          onChange={(event) => setLastname(event.target.value)}
                          value={lastname}
                        ></input>
                      </div>
                      <div className="col-12 col-sm-6 d-lg-flex flex-lg-column text-start my-2">
                        <label className="fw-bold fs-6">Phone: </label>
                        <input
                          className="fs-6 rounded"
                          onChange={(event) => setPhone(event.target.value)}
                          value={phone}
                        ></input>
                      </div>
                      <div className="col-12 d-lg-flex flex-lg-column text-start my-2">
                        <label className="fw-bold fs-6">Email: </label>
                        <input
                          className="fs-6 rounded"
                          onChange={(event) => setEmail(event.target.value)}
                          value={email}
                        ></input>
                      </div>
                      <div className="col-12 d-lg-flex flex-lg-column text-start my-2">
                        <label className="fw-bold fs-6">Address: </label>
                        <input
                          className="fs-6 rounded"
                          onChange={(event) => setAddress(event.target.value)}
                          value={address}
                        ></input>
                      </div>
                      <button className="btn btn-warning" onClick={handleEditUser}>
                        Confirmar
                      </button>
                      <button className="btn btn-danger mt-2" onClick={handleLogOut}>
                        Cerrar sesión
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <h2 className="fs-3">Historial de pedidos</h2>
                {ordersFromLoggedUser.map((order, index) => (
                  <Order order={order} ket={index} />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Newsletter />
        <Footer />
      </>
    );
}

export default Profile;
