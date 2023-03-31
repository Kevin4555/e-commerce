import "./Profile.css";
import PageNavbar from "../../navbar/PageNavbar";
import Order from "../../Order/Order";
import Newsletter from "../../Newsletter/Newsletter";
import Footer from "../../Footer/Footer";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Profile() {
  let user = useSelector((state) => state.persistedReducer.user);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log("user", user);
  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 750);
  }, []);

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
          <h1>a</h1>
          <div className="container-fluid py-5 d-flex align-item-center justify-content-center flex-column">
            <h1 className="fs-2 fw-bold text-light text-center">Mi Perfil</h1>
            <small className="fs-6 fw-semibold text-light text-center">Home</small>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="d-lg-none d-block">
                <div className="text-center bg-secondary-subtle p-4 rounded vh-100">
                  <img
                    src="/img/default-avatar.jpg"
                    alt="Profile"
                    className="profile-img rounded-pill"
                  />
                  <h2 className="mb-0 mt-3">
                    {user.firstname} {user.lastname}
                  </h2>
                  <small>{user.email}</small>
                  <div className="row mt-5 bg-white p-5 p-lg-2">
                    <div className="col-6 d-lg-flex flex-lg-column text-start my-2">
                      <small className="fw-bold fs-6">Firstname: </small>
                      <small className="fs-6">{user.firstname}</small>
                    </div>
                    <div className="col-6 d-lg-flex flex-lg-column text-start my-2">
                      <small className="fw-bold fs-6">Lastname: </small>
                      <small className="fs-6">{user.lastname}</small>
                    </div>
                    <div className="col-6 d-lg-flex flex-lg-column text-start my-2">
                      <small className="fs-6 fw-bold">Phone: </small>
                      <small className="fs-6">{user.phone}</small>
                    </div>
                    <div className="col-12 d-lg-flex flex-lg-column text-start my-2">
                      <small className="fw-bold fs-6">Avatar: </small>
                      <small className="fs-6">{user.avatar}</small>
                    </div>
                    <div className="col-12 d-lg-flex flex-lg-column text-start my-2">
                      <small className="fw-bold fs-6">Email: </small>
                      <small className="fs-6">{user.email}</small>
                    </div>
                    <div className="col-12 d-lg-flex flex-lg-column text-start my-2">
                      <small className="fw-bold fs-6">Address: </small>
                      <small className="fs-6">{user.address}</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <h2 className="fs-3">Historial de pedidos</h2>
                <Order />
                {/* <h2 className="fs-4">Favoritos</h2>
              {products && (
                <MultiItemCarousel products={products} productsPerPage={4} className="" />
              )} */}
              </div>
              <div className="d-none d-lg-block col-lg-4">
                <div className="text-center bg-secondary-subtle p-4 rounded vh-100">
                  <img
                    src="/img/default-avatar.jpg"
                    alt="Profile"
                    className="profile-img rounded-pill"
                  />
                  <h2 className="mb-0 mt-3">
                    {user.firstname} {user.lastname}
                  </h2>
                  <small>{user.email}</small>
                  <div className="row mt-5 bg-white p-5 p-lg-2">
                    <div className="col-6 d-lg-flex flex-lg-column text-start my-2">
                      <small className="fw-bold fs-6">Firstname: </small>
                      <small className="fs-6">{user.firstname}</small>
                    </div>
                    <div className="col-6 d-lg-flex flex-lg-column text-start my-2">
                      <small className="fw-bold fs-6">Lastname: </small>
                      <small className="fs-6">{user.lastname}</small>
                    </div>
                    <div className="col-6 d-lg-flex flex-lg-column text-start my-2">
                      <small className="fs-6 fw-bold">Phone: </small>
                      <small className="fs-6">{user.phone}</small>
                    </div>
                    <div className="col-12 d-lg-flex flex-lg-column text-start my-2">
                      <small className="fw-bold fs-6">Avatar: </small>
                      <small className="fs-6">{user.avatar}</small>
                    </div>
                    <div className="col-12 d-lg-flex flex-lg-column text-start my-2">
                      <small className="fw-bold fs-6">Email: </small>
                      <small className="fs-6">{user.email}</small>
                    </div>
                    <div className="col-12 d-lg-flex flex-lg-column text-start my-2">
                      <small className="fw-bold fs-6">Address: </small>
                      <small className="fs-6">{user.address}</small>
                    </div>
                  </div>
                </div>
              </div>
              {/*           <h2 className="fs-3 mt-5">Historial de pedidos</h2>
            <Order /> */}
            </div>
          </div>
        </main>
        <Newsletter />
        <Footer />
      </>
    );
}

export default Profile;
