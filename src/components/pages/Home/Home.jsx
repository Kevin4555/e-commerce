import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import PageNavbar from "../../navbar/PageNavbar";

function Home() {
  const [products, setProducts] = useState([]);
  const descuento = 10;

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
              <small className="d-block text-center">Categoria 1</small>
            </div>
            <div className="z-1">
              <img
                src="/img/pexels-rodnae-productions-6806697.jpg"
                alt=""
                className=" home-img rounded-pill categorys-img"
              />
              <small className="d-block text-center">Categoria 2</small>
            </div>

            <div className="z-1">
              <img
                src="/img/pexels-vlada-karpovich-5602996.jpg"
                alt=""
                className=" home-img rounded-pill categorys-img"
              />
              <small className="d-block text-center">Categoria 3</small>
            </div>
          </div>
          <h2 className="text-center pt-5 pb-4">Destacados</h2>
          <div className="d-flex justify-content-between">
            <div className="me-3">
              <img
                src="/img/pexels-vlada-karpovich-5602996.jpg"
                alt=""
                className="img-fluid destacados-img w-100"
              />
              <div className="d-flex flex-column">
                <small className="fw-semibold">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </small>
                <small>Rating</small>
                <small className="fw-bold">23,54 US$</small>
                <div>
                  <small className="text-success text-decoration-line-through">
                    20,40 US$
                  </small>
                  <small>
                    <small className="text-success">(60% de descuento)</small>
                  </small>
                </div>
              </div>
            </div>

            <div className="mx-3">
              <img
                src="/img/pexels-vlada-karpovich-5602996.jpg"
                alt=""
                className="img-fluid destacados-img  w-100"
              />
              <div className="d-flex flex-column">
                <small className="fw-semibold">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </small>
                <small>Rating</small>
                <small className="fw-bold">23,54 US$</small>
                <div>
                  <small className="text-success text-decoration-line-through">
                    20,40 US$
                  </small>
                  <small>
                    <small className="text-success">(60% de descuento)</small>
                  </small>
                </div>
              </div>
            </div>

            <div className="ms-3">
              <img
                src="/img/pexels-vlada-karpovich-5602996.jpg"
                alt=""
                className="img-fluid destacados-img  w-100"
              />
              <div className="d-flex flex-column">
                <small className="fw-semibold">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </small>
                <small>Rating</small>
                <small className="fw-bold">23,54 US$</small>
                <div>
                  <small className="text-success text-decoration-line-through">
                    20,40 US$
                  </small>
                  <small>
                    <small className="text-success">(60% de descuento)</small>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <h3 className="pt-5 pb-4">Recomendados</h3>
          <div className="row">
            {products.map((product) => {
              return <div key={product.id} className="col-3"></div>;
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
