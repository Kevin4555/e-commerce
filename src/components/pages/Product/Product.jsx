import "./Product.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Footer from "../../Footer/Footer";

import PageNavbar from "../../navbar/PageNavbar";
import Rating from "react-rating";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../..//..//slices/cartSlice.js";
import Newsletter from "../../Newsletter/Newsletter";
import Loading from "../../Loading/Loading";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [stock, setStock] = useState(null);

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

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...product, quantity: 1 }));
  };

  if (product) {
    return (
      <>
        <PageNavbar />
        <div className="container mt-5 p-3">
          <div className="row">
            <div className="col-12 col-md-6" id="producto">
              <div className="carousel-div me-5 text-end">
                <Carousel className="rounded">
                  <Carousel.Item className="h-100">
                    <img
                      className="d-block w-100 h-100 object-fit-cover carousel-image"
                      src={process.env.REACT_APP_API_BASE_URL + `/img/${product.img.img1}`}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className="h-100">
                    <img
                      className="d-block w-100 h-100 object-fit-cover carousel-image"
                      src={process.env.REACT_APP_API_BASE_URL + `/img/${product.img.img2}`}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <Rating
                className="d-block my-3 mb-1"
                emptySymbol="bi bi-star"
                fullSymbol="bi bi-star-fill stars"
                initialRating={product.rating}
              />
              <h1 className="">{product.title}</h1>
              <h3 className="d-inline">${product.price} USD</h3>
              <span className="priceBefore ms-2">${Math.floor(product.price * 1.2)} USD</span>
              {product.stock === 0 ? (
                <span className="badge ms-3 bg-red">FUERA DE STOCK</span>
              ) : (
                <span className="badge ms-3">
                  {product.stock === 1 ? `Queda una unidad` : `Quedan ${product.stock} unidades!`}
                </span>
              )}
              <p className="mt-4 w-75">{product.description}</p>
              <div className="d-flex align-items-center mt-5">
                <button className="btn fw-semibold" id="btn" onClick={handleAddToCart}>
                  Añadir al carrito
                </button>

                <button className="border-0 bg-white ms-3">
                  <i className="bi bi-heart fs-5"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <Container className="mt-5 mx-auto p-3 border">
          <h3 className="m-3 mb-0">Comentarios</h3>
          <div className="mb-4 p-3">
            <div>
              <img
                src="/img/default-avatar.jpg"
                alt="User img"
                className="user-avatar rounded-pill "
              />
              <small className="mx-2 mfw-semibold">Pepe Rodriguez</small>
              <small>
                <small>21 mar 2023 </small>
              </small>
            </div>
            <Rating
              className="d-block"
              emptySymbol="bi bi-star"
              fullSymbol="bi bi-star-fill stars"
              readonly="true"
              initialRating="5"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ducimus illum nulla
              placeat ab, rem excepturi quibusdam distinctio earum. Voluptate facere suscipit ut
              fugit illo molestias! Ratione, quasi. Doloribus, delectus?
            </p>
          </div>
        </Container>
        <Newsletter />
        <Footer />
      </>
    );
  } else {
    return <Loading />;
  }
}

export default Product;
