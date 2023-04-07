import css from "./Product.module.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Carousel, Form, Button } from "react-bootstrap";
import Footer from "../../Footer/Footer";

import PageNavbar from "../../PageNavbar/PageNavbar";
import Review from "./Review/Review";
import Rating from "react-rating";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../..//..//slices/cartSlice.js";
import { useSelector } from "react-redux";
import Newsletter from "../../Newsletter/Newsletter";
import Loading from "../../Loading/Loading";

function Product() {
  let user = useSelector((state) => state.persistedReducer.user);
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewtext, setReviewText] = useState("");
  const [stock, setStock] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/products/${slug}`,
        });
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [slug]);

  const dispatch = useDispatch();

  async function handleReview(event) {
    event.preventDefault();
    if (reviewtext !== "") {
      try {
        const response = await axios({
          method: "post",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
          url: `${process.env.REACT_APP_API_BASE_URL}/reviews`,
          data: {
            content: reviewtext,
            productId: product.id,
          },
        });
        setReviews([...reviews, response.data]);
        setReviewText("");
      } catch (error) {}
    }
  }

  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...product, quantity: 1 }));
  };

  if (product) {
    window.document.title = `${product.title}`;
    return (
      <>
        <PageNavbar />
        <div className="container mt-5 p-3">
          <div className="row">
            <div className="col-12 col-md-6" id={css["producto"]}>
              <div className="me-5 text-end">
                <Carousel className="rounded">
                  <Carousel.Item className="h-100">
                    <img
                      className={`d-block w-100 h-100 object-fit-cover ${css.carouselImage}`}
                      src={process.env.REACT_APP_API_BASE_IMG_URL + `/${product.img.img1}`}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className="h-100">
                    <img
                      className={`d-block w-100 h-100 object-fit-cover ${css.carouselImage}`}
                      src={process.env.REACT_APP_API_BASE_IMG_URL + `/${product.img.img2}`}
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
                fullSymbol={`bi bi-star-fill ${css.stars}`}
                initialRating={product.rating}
              />
              <h1 className="">{product.title}</h1>
              <h3 className="d-inline">${product.price} USD</h3>
              <span className={`${css.priceBefore} ms-2`}>
                ${Math.floor(product.price * 1.2)} USD
              </span>
              {product.stock === 0 ? (
                <span className={`${css.badge} ms-3 bg-red`}>FUERA DE STOCK</span>
              ) : (
                <span className={`${css.badge} ms-3`}>
                  {product.stock === 1 ? `Queda una unidad` : `Quedan ${product.stock} unidades!`}
                </span>
              )}
              <p className="mt-4 w-75">{product.description}</p>
              <div className="d-flex align-items-center mt-5">
                <button className="btn fw-semibold" id={css["btn"]} onClick={handleAddToCart}>
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
          {user ? (
            <Form className="m-3 mb-0" onSubmit={handleReview}>
              <Form.Group className="mb-3" controlId="inputReview">
                <Form.Label>Deja tu Comentario</Form.Label>
                <Form.Control
                  as="textarea"
                  value={reviewtext}
                  onChange={(e) => setReviewText(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" id={css["buttonReview"]}>
                Comentar
              </Button>
            </Form>
          ) : (
            <div className="m-3 mb-0">
              <p>
                Si quieres dejar un comentario debes{" "}
                <Link className="btn" id={css["buttonLogin"]} to="/login">
                  Iniciar Sesión
                </Link>
              </p>
            </div>
          )}
          {reviews.map((review, index) => {
            return <Review review={review} key={index} />;
          })}
          {/* <Review
            review={{
              user: {
                firstname: "Pepe",
                lastname: "Rodriguez",
                avatar: "Profile_defaultMale.png",
              },
              createdAt: "2022-12-30T14:33:11.268Z",
              content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ducimus illum nulla placeat ab,
    rem excepturi quibusdam distinctio earum. Voluptate facere suscipit ut fugit illo molestias!
    Ratione, quasi. Doloribus, delectus?`,
            }}
          /> */}
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
