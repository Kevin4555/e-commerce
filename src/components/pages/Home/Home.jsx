import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import PageNavbar from "../../navbar/PageNavbar";
import ProductMini from "../../ProductMini/ProductMini";
import Carousel from "../../Carousel/Carousel";

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
  return (
    <>
      <PageNavbar />
      <main>
        <h1 className="text-center py-5 bg-verdeagua" id="h1">
          Welcome Pepe!
        </h1>
        <div className="container">
          <div className="d-flex justify-content-around w-100">
            <div className="z-1">
              <img
                src="/img/pexels-los-muertos-crew-8066050.jpg"
                alt=""
                className=" home-img rounded-pill categorys-img "
              />
              <small className="d-block text-center fs-5 fw-semibold">
                Pintura
              </small>
            </div>
            <div className="z-1">
              <img
                src="/img/pexels-rodnae-productions-6806697.jpg"
                alt=""
                className=" home-img rounded-pill categorys-img"
              />
              <small className="d-block text-center fs-5 fw-semibold">
                Cerámica
              </small>
            </div>

            <div className="z-1">
              <img
                src="/img/pexels-vlada-karpovich-5602996.jpg"
                alt=""
                className=" home-img rounded-pill categorys-img"
              />
              <small className="d-block text-center fs-5 fw-semibold">
                Muebles
              </small>
            </div>
          </div>
          <h2 className="text-center pt-5 pb-4">Destacados</h2>

          <h2 className="pt-5 pb-4">Nuestros productos</h2>
          <div className="row">
            {products.map((product) => {
              return (
                <div className="col-3 mb-5 p-relative" key={product.id}>
                  <div className="shadow rounded">
                    <div className="">
                      <img
                        /* src={`/img/${product.img.img1}`} */
                        src="/img/pexels-los-muertos-crew-8066050.jpg"
                        alt=""
                        className="destacados-img w-100 rounded-top"
                      />
                    </div>
                    <div className="border px-2 rounded-bottom">
                      <div className="row">
                        <small className="fw-semibold col-12 mb-2">
                          Lorem ipsum dolor sit, amet consectetur adipisicing.
                        </small>
                        <small className="fw-bold col-6">
                          {product.price} USD
                        </small>
                        <small className="col-6 text-end">
                          <i className="bi bi-star-fill text-warning"></i> 5
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <h3 className="pt-5 pb-4">Pintura</h3>

          <div className="row">
            {productsFromCategory1.map((product) => {
              return (
                <div className="col-3 mb-5 p-relative" key={product.id}>
                  <div className="">
                    <img
                      /* src={`/img/${product.img.img1}`} */
                      src="/img/pexels-los-muertos-crew-8066050.jpg"
                      alt=""
                      className="destacados-img w-100 rounded-top"
                    />
                  </div>
                  <div className="border px-2 rounded-bottom">
                    <div className="row">
                      <small className="fw-semibold col-12 mb-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                      </small>
                      <small className="fw-bold col-6">
                        {product.price} USD
                      </small>
                      <small className="col-6 text-end">
                        <i className="bi bi-star-fill text-warning"></i> 5
                      </small>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="pt-5 pb-4">Cerámica</h3>

          <div className="row">
            {productsFromCategory2.map((product) => {
              return (
                <div className="col-3 mb-5 p-relative" key={product.id}>
                  <div className="">
                    <img
                      /* src={`/img/${product.img.img1}`} */
                      src="/img/pexels-los-muertos-crew-8066050.jpg"
                      alt=""
                      className="destacados-img w-100 rounded-top"
                    />
                  </div>
                  <div className="border px-2 rounded-bottom">
                    <div className="row">
                      <small className="fw-semibold col-12 mb-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                      </small>
                      <small className="fw-bold col-6">
                        {product.price} USD
                      </small>
                      <small className="col-6 text-end">
                        <i className="bi bi-star-fill text-warning"></i> 5
                      </small>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="pt-5 pb-4">Muebles</h3>

          <div className="row">
            {productsFromCategory3.map((product) => {
              return (
                <div className="col-3 mb-5 p-relative" key={product.id}>
                  <div className="">
                    <img
                      /* src={`/img/${product.img.img1}`} */
                      src="/img/pexels-los-muertos-crew-8066050.jpg"
                      alt=""
                      className="destacados-img w-100 rounded-top"
                    />
                  </div>
                  <div className="border px-2 rounded-bottom">
                    <div className="row">
                      <small className="fw-semibold col-12 mb-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                      </small>
                      <small className="fw-bold col-6">
                        {product.price} USD
                      </small>
                      <small className="col-6 text-end">
                        <i className="bi bi-star-fill text-warning"></i> 5
                      </small>
                    </div>
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
