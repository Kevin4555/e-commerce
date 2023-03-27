import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const MultiItemCarousel = ({ products }) => {
  const items = [
    { id: 1, image: "/img/default-avatar.jpg", title: "Item 1" },
    {
      id: 2,
      image: "/img/pexels-los-muertos-crew-8066050.jpg",
      title: "Item 2",
    },
    {
      id: 3,
      image: "/img/pexels-rodnae-productions-6806697.jpg",
      title: "Item 3",
    },
    { id: 4, image: "/img/default-avatar.jpg", title: "Item 4" },
    {
      id: 5,
      image: "/img/pexels-vlada-karpovich-5602996.jpg",
      title: "Item 5",
    },
  ];
  const featuredProducts = products.filter((product) => product.featured === 1);

  return (
    <Carousel className="container">
      {featuredProducts.map((product) => (
        <Carousel.Item key={product.id}>
          <div className="row">
            <div className="col-3">
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
                      <small className="fw-semibold col-12 mb-2" id="product">
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
            <div className="col-3">
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
                      <small className="fw-semibold col-12 mb-2" id="product">
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
            <div className="col-3">
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
                      <small className="fw-semibold col-12 mb-2" id="product">
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
            <div className="col-3">
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
                      <small className="fw-semibold col-12 mb-2" id="product">
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
          </div>
          <Carousel.Caption>{/* <h3>{item.title}</h3> */}</Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default MultiItemCarousel;
