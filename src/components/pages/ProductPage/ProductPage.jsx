import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import PageNavbar from "../../navbar/PageNavbar";
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `http://localhost:8000/products/${id}`,
        });
        console.log("response", response.data);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);
  return (
    <>
      <PageNavbar />
      <div className="d-flex justify-content-center mt-5">
        <div className="carousel-div me-5">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/pexels-los-muertos-crew-8066050.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/pexels-los-muertos-crew-8066050.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/pexels-los-muertos-crew-8066050.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="d-flex align-items-center carousel-div px-0">
          <div>
            <h1 className="">
              {product ? (
                product.title
              ) : (
                <img
                  src="/img/Spinner-1s-200px.svg"
                  alt=""
                  className="spinner"
                />
              )}
            </h1>
            <small className="d-block mb-3 mt-5">
              {product ? (
                "Precio: " + product.price
              ) : (
                <img
                  src="/img/Spinner-1s-200px.svg"
                  alt=""
                  className="spinner"
                />
              )}{" "}
              USD
            </small>
            <small className="d-block my-3">
              {" "}
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </small>
            <small className="d-block my-3">
              Stock:{" "}
              {product ? (
                product.stock
              ) : (
                <img
                  src="/img/Spinner-1s-200px.svg"
                  alt=""
                  className="spinner"
                />
              )}{" "}
              units.
            </small>
            <p>
              {product ? (
                product.description
              ) : (
                <img
                  src="/img/Spinner-1s-200px.svg"
                  alt=""
                  className="spinner"
                />
              )}
            </p>
            <div className="">
              <button className="btn fw-semibold" id="btn">
                Add to cart
              </button>

              <button className="border-0 bg-white ms-3">
                <i className="bi bi-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 mx-auto" id="reviews-container">
        <h3>Comentarios</h3>
        <div className="mb-4">
          <small>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </small>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ducimus
            illum nulla placeat ab, rem excepturi quibusdam distinctio earum.
            Voluptate facere suscipit ut fugit illo molestias! Ratione, quasi.
            Doloribus, delectus?
          </p>
          <div>
            <img
              src="/img/default-avatar.jpg"
              alt="User img"
              className="user-avatar rounded-pill"
            />
            <small className="mx-2 fw-semibold">Pepe Rodriguez</small>
            <small>
              <small>21 mar 2023 </small>
            </small>
          </div>
        </div>

        <div className="mb-4">
          <small>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </small>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ducimus
            illum nulla placeat ab, rem excepturi quibusdam distinctio earum.
            Voluptate facere suscipit ut fugit illo molestias! Ratione, quasi.
            Doloribus, delectus?
          </p>
          <div>
            <img
              src="/img/default-avatar.jpg"
              alt="User img"
              className="user-avatar rounded-pill"
            />
            <small className="mx-2 fw-semibold">Pepe Rodriguez</small>
            <small>
              <small>21 mar 2023 </small>
            </small>
          </div>
        </div>

        <div className="mb-4">
          <small>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </small>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ducimus
            illum nulla placeat ab, rem excepturi quibusdam distinctio earum.
            Voluptate facere suscipit ut fugit illo molestias! Ratione, quasi.
            Doloribus, delectus?
          </p>
          <div>
            <img
              src="/img/default-avatar.jpg"
              alt="User img"
              className="user-avatar rounded-pill"
            />
            <small className="mx-2 fw-semibold">Pepe Rodriguez</small>
            <small>
              <small>21 mar 2023 </small>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
