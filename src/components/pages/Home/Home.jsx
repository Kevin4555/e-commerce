import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PageNavbar from "../../navbar/PageNavbar";
import ProductMini from "../../ProductMini/ProductMini";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `http://localhost:8000/products`,
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const productsFromCategory1 = products.filter(
    (product) => product.categoryId === 1
  );
  const productsFromCategory2 = products.filter(
    (product) => product.categoryId === 2
  );
  const productsFromCategory3 = products.filter(
    (product) => product.categoryId === 3
  );

  function scrollToCategory(id) {
    console.log("id", id);
    const elemento = document.getElementById(id);
    const posicion = elemento.getBoundingClientRect();

    window.scrollTo({
      top: posicion.top + window.pageYOffset,
      behavior: "smooth",
    });
  }

  return (
    <>
      <PageNavbar />
      <main>
        <h1 className="text-center py-5 bg-verdeagua" id="h1">
          Bienvenido Pepe!
        </h1>
        <div className="container">
          <div className="d-flex justify-content-around w-100">
            <div className="z-1 text-center">
              <img
                src="/img/pexels-los-muertos-crew-8066050.jpg"
                alt=""
                className=" home-img rounded-pill categorys-img mb-2"
              />

              <small
                className="d-block fs-5 fw-semibold btn"
                onClick={() => scrollToCategory("pinturas")}
              >
                Pinturas
              </small>
            </div>
            <div className="z-1 text-center">
              <img
                src="/img/pexels-rodnae-productions-6806697.jpg"
                alt=""
                className=" home-img rounded-pill categorys-img mb-2"
              />
              <small
                className="d-block fs-5 fw-semibold btn"
                onClick={() => scrollToCategory("ceramicas")}
              >
                Cerámicas & Decoraciones
              </small>
            </div>

            <div className="z-1 text-center">
              <img
                src="/img/pexels-vlada-karpovich-5602996.jpg"
                alt=""
                className=" home-img rounded-pill categorys-img mb-2"
              />
              <small
                className="d-block fs-5 fw-semibold btn"
                onClick={() => scrollToCategory("muebles")}
              >
                Muebles & Carpintería
              </small>
            </div>
          </div>
          <h2 className="pt-5 pb-4">Destacados</h2>

          <h2 className="pt-5 pb-4">Nuestros productos</h2>
          <div className="row">
            {products.map((product) => {
              return (
                <div className="col-3 mb-5 p-relative" key={product.id}>
                  <div className="shadow rounded">
                    <div className="img-container">
                      <Link
                        to={`/product/${product.id}`}
                        className="text-decoration-none"
                      >
                        <img
                          /* src={`/img/${product.img.img1}`} */
                          src="/img/pexels-los-muertos-crew-8066050.jpg"
                          alt=""
                          className="destacados-img w-100 rounded-top"
                        />
                      </Link>
                      <button className="icono-btn">
                        <i class="bi bi-heart heart-icon"></i>
                      </button>
                    </div>
                    <Link
                      to={`/product/${product.id}`}
                      className="text-decoration-none"
                    >
                      <div className="border px-2 rounded-bottom">
                        <div className="row">
                          <small className="fw-semibold col-12 mb-2">
                            {console.log(product.description.length)}
                            {product.description.length >= 100
                              ? product.description.substring(0, 100) + "..."
                              : product.description}
                          </small>
                          <small className="fw-bold col-6">
                            {product.price} USD
                          </small>
                          <small className="col-6 text-end">
                            <i className="bi bi-star-fill text-warning"></i>{" "}
                            {product.rating}
                          </small>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <h3 className="pt-5 pb-4" id="pinturas">
            Pinturas
          </h3>

          <div className="row">
            {productsFromCategory1.map((product) => {
              return (
                <div className="col-3 mb-5 p-relative" key={product.id}>
                  <div className="shadow rounded">
                    <div className="img-container">
                      <Link
                        to={`/product/${product.id}`}
                        className="text-decoration-none"
                      >
                        <img
                          /* src={`/img/${product.img.img1}`} */
                          src="/img/pexels-los-muertos-crew-8066050.jpg"
                          alt=""
                          className="destacados-img w-100 rounded-top"
                        />
                      </Link>
                      <button className="icono-btn">
                        <i class="bi bi-heart heart-icon"></i>
                      </button>
                    </div>
                    <Link
                      to={`/product/${product.id}`}
                      className="text-decoration-none"
                    >
                      <div className="border px-2 rounded-bottom">
                        <div className="row">
                          <small className="fw-semibold col-12 mb-2">
                            {console.log(product.description.length)}
                            {product.description.length >= 100
                              ? product.description.substring(0, 100) + "..."
                              : product.description}
                          </small>
                          <small className="fw-bold col-6">
                            {product.price} USD
                          </small>
                          <small className="col-6 text-end">
                            <i className="bi bi-star-fill text-warning"></i>{" "}
                            {product.rating}
                          </small>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="pt-5 pb-4" id="ceramicas">
            Cerámicas & Decoraciones
          </h3>

          <div className="row">
            {productsFromCategory2.map((product) => {
              return (
                <div className="col-3 mb-5 p-relative" key={product.id}>
                  <div className="shadow rounded">
                    <div className="img-container">
                      <Link
                        to={`/product/${product.id}`}
                        className="text-decoration-none"
                      >
                        <img
                          /* src={`/img/${product.img.img1}`} */
                          src="/img/pexels-los-muertos-crew-8066050.jpg"
                          alt=""
                          className="destacados-img w-100 rounded-top"
                        />
                      </Link>
                      <button className="icono-btn">
                        <i class="bi bi-heart heart-icon"></i>
                      </button>
                    </div>
                    <Link
                      to={`/product/${product.id}`}
                      className="text-decoration-none"
                    >
                      <div className="border px-2 rounded-bottom">
                        <div className="row">
                          <small className="fw-semibold col-12 mb-2">
                            {console.log(product.description.length)}
                            {product.description.length >= 100
                              ? product.description.substring(0, 100) + "..."
                              : product.description}
                          </small>
                          <small className="fw-bold col-6">
                            {product.price} USD
                          </small>
                          <small className="col-6 text-end">
                            <i className="bi bi-star-fill text-warning"></i>{" "}
                            {product.rating}
                          </small>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="pt-5 pb-4" id="muebles">
            Muebles & Carpintería
          </h3>

          <div className="row">
            {productsFromCategory3.map((product) => {
              return (
                <div className="col-3 mb-5 p-relative" key={product.id}>
                  <div className="shadow rounded">
                    <div className="img-container">
                      <Link
                        to={`/product/${product.id}`}
                        className="text-decoration-none"
                      >
                        <img
                          /* src={`/img/${product.img.img1}`} */
                          src="/img/pexels-los-muertos-crew-8066050.jpg"
                          alt=""
                          className="destacados-img w-100 rounded-top"
                        />
                      </Link>
                      <button className="icono-btn">
                        <i class="bi bi-heart heart-icon"></i>
                      </button>
                    </div>
                    <Link
                      to={`/product/${product.id}`}
                      className="text-decoration-none"
                    >
                      <div className="border px-2 rounded-bottom">
                        <div className="row">
                          <small className="fw-semibold col-12 mb-2">
                            {console.log(product.description.length)}
                            {product.description.length >= 100
                              ? product.description.substring(0, 100) + "..."
                              : product.description}
                          </small>
                          <small className="fw-bold col-6">
                            {product.price} USD
                          </small>
                          <small className="col-6 text-end">
                            <i className="bi bi-star-fill text-warning"></i>{" "}
                            {product.rating}
                          </small>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
