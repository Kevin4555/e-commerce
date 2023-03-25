import "./ProductPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import PageNavbar from "../../navbar/PageNavbar";
import Rating from "react-rating";

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
      <div className="container mt-5 shadow-lg p-3">
        <div className="row">
          <div className="col-6" id="producto">
            <div className="carousel-div me-5 text-end">
              {product ? (
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
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
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
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
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
              ) : (
                <div className="carousel-div d-flex align-items-center justify-content-center">
                  <img
                    src="/img/Spinner-1s-200px.svg"
                    className="loading"
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>

          <div className="col-6 p-3">
            <h1 className="">
              {product ? (
                product.title
              ) : (
                <div className="loading">
                  <img
                    src="/img/Spinner-1s-200px.svg"
                    className="loading"
                    alt=""
                  />
                </div>
              )}
            </h1>
            <small className="d-block mb-3 mt-5">
              {product ? (
                "Precio: " + product.price
              ) : (
                <div className="loading">
                  <img
                    src="/img/Spinner-1s-200px.svg"
                    className="loading"
                    alt=""
                  />
                </div>
              )}{" "}
              USD
            </small>

            {product ? (
              <Rating
                className="d-block my-3"
                emptySymbol="bi bi-star"
                fullSymbol="bi bi-star-fill"
                initialRating={product.rating}
              />
            ) : (
              <div className="loading">
                <img
                  src="/img/Spinner-1s-200px.svg"
                  className="loading"
                  alt=""
                />
              </div>
            )}

            <small className="d-block my-3">
              Stock:{" "}
              {product ? (
                product.stock
              ) : (
                <div className="loading">
                  <img
                    src="/img/Spinner-1s-200px.svg"
                    className="loading"
                    alt=""
                  />
                </div>
              )}{" "}
              units.
            </small>
            <p>
              {product ? (
                product.description
              ) : (
                <div className="loading">
                  <img
                    src="/img/Spinner-1s-200px.svg"
                    className="loading"
                    alt=""
                  />
                </div>
              )}
            </p>
            <div className="d-flex align-items-center">
              <button className="btn fw-semibold" id="btn">
                Añadir al carrito
              </button>

              <button className="border-0 bg-white">
                <i className="bi bi-heart fs-5"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 mx-auto p-3" id="reviews-container">
        <h3>Comentarios</h3>
        <div className="mb-4 shadow p-3">
          <Rating
            className="d-block my-3"
            emptySymbol="bi bi-star"
            fullSymbol="bi bi-star-fill"
            readonly="true"
            initialRating="5"
          />
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

        <div className="mb-4 shadow p-3">
          <Rating
            className="d-block my-3"
            emptySymbol="bi bi-star"
            fullSymbol="bi bi-star-fill"
            readonly="true"
            initialRating="4.5"
          />
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

        <div className="mb-4 shadow p-3">
          <Rating
            className="d-block my-3"
            emptySymbol="bi bi-star"
            fullSymbol="bi bi-star-fill"
            readonly="true"
            initialRating="4"
          />
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
