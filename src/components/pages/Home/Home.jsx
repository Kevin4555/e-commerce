import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PageNavbar from "../../navbar/PageNavbar";
import MultiItemCarousel from "../../Carousel/MultiItemCarousel";
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

  function showProducts(arrayProducts) {
    return (
      arrayProducts && (
        <div className="row">
          {arrayProducts.map((product) => {
            return <ProductMini product={product} />;
          })}
        </div>
      )
    );
  }

  function scrollToCategory(id) {
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
        <div className="bg-verdeagua">
          <h1 className="text-center py-5">Bienvenido Pepe!</h1>
        </div>
        <div className="container">
          <div
            className="d-flex justify-content-around col-11"
            id="categoryDisplay"
          >
            <div className="z-1 text-center">
              <img
                src="/img/pexels-los-muertos-crew-8066050.jpg"
                alt=""
                className=" home-img rounded-pill categories-img mb-2"
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
                className=" home-img rounded-pill categories-img mb-2"
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
                className=" home-img rounded-pill categories-img mb-2"
              />
              <small
                className="d-block fs-5 fw-semibold btn"
                onClick={() => scrollToCategory("muebles")}
              >
                Muebles & Carpintería
              </small>
            </div>
          </div>
          <h2 className="pb-4">Destacados</h2>
          {products && (
            <MultiItemCarousel
              products={products.filter((product) => (product.rating = 5))}
              productsPerPage={4}
            ></MultiItemCarousel>
          )}

          <h2 className="pt-5 pb-4">Nuestros productos</h2>
          {showProducts(products)}
          <h3 className="pt-5 pb-4" id="pinturas">
            Pinturas
          </h3>
          {showProducts(productsFromCategory1)}
          <h3 className="pt-5 pb-4" id="ceramicas">
            Cerámicas & Decoraciones
          </h3>
          {showProducts(productsFromCategory2)}
          <h3 className="pt-5 pb-4" id="muebles">
            Muebles & Carpintería
          </h3>
          {showProducts(productsFromCategory3)}
        </div>
      </main>
    </>
  );
}

export default Home;
