import "./Profile.css";
import PageNavbar from "../../navbar/PageNavbar";
import ProductMini from "../../ProductMini/ProductMini";
import MultiItemCarousel from "../../Carousel/MultiItemCarousel";
import Order from "../../Order/Order";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [products, setProducts] = useState([]);
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

  return (
    <>
      <PageNavbar />
      <main>
        <div className="container-fluid py-5 d-flex align-item-center justify-content-center flex-column">
          <h1 className="fs-2 fw-bold text-light text-center">Mi Perfil</h1>
          <small className="fs-6 fw-semibold text-light text-center">Home</small>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-8">
              <h2 className="fs-4">Favoritos</h2>
              {products && (
                <MultiItemCarousel
                  products={products.filter((product) => (product.rating = 5))}
                  productsPerPage={2}
                  className=""
                />
              )}
            </div>
            <div className="col-4">
              <div className="text-center bg-secondary-subtle p-4 rounded">
                <img
                  src="/img/default-avatar.jpg"
                  alt="Profile"
                  className="profile-img rounded-pill"
                />
                <h2 className="mb-0 mt-3">Pepe Rodriguez</h2>
                <small>pepe@gmail.com</small>
                <div className="row mt-5 bg-white p-2">
                  <div className="col-6 text-start my-2">
                    <small className="fw-bold fs-6">Firstname: </small>
                    <small className="fs-6">Pepe</small>
                  </div>
                  <div className="col-6 text-start my-2">
                    <small className="fw-bold fs-6">Lastname: </small>
                    <small className="fs-6">Rodriguez</small>
                  </div>
                  <div className="col-6 text-start my-2">
                    <small className="fs-6 fw-bold">Phone: </small>
                    <small className="fs-6">091000000</small>
                  </div>
                  <div className="col-6 text-start my-2">
                    <small className="fw-bold fs-6">Birthdate: </small>
                    <small className="fs-6">1/1/1994</small>
                  </div>
                  <div className="col-12 text-start my-2">
                    <small className="fw-bold fs-6">Avatar: </small>
                    <small className="fs-6">default-avatar.jpg</small>
                  </div>
                  <div className="col-12 text-start my-2">
                    <small className="fw-bold fs-6">Email: </small>
                    <small className="fs-6">pepe@gmail.com</small>
                  </div>
                  <div className="col-12 text-start my-2">
                    <small className="fw-bold fs-6">Address: </small>
                    <small className="fs-6">Br. Artigas 2222</small>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="fs-3 mt-5">Historial de pedidos</h2>
            <Order />
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
