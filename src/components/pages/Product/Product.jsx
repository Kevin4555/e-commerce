import Carousel from "react-bootstrap/Carousel";
import PageNavbar from "../../navbar/PageNavbar";
import "./Product.css";

function Product() {
  return (
    <>
      <PageNavbar />
      <body>
        <div className="row d-flex justify-content-center mt-5">
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
            </Carousel>
          </div>

          <div className="d-flex align-items-center carousel-div">
            <div>
              <h1 className="">Titulo</h1>
              <small className="d-block mb-3 mt-5">USD 84</small>
              <small className="d-block my-3">Estrellitas</small>
              <small className="d-block my-3">Stock: 12312312 units.</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem illum dolor, reprehenderit hic nulla, ad quod fugit
                quis maxime nemo veritatis dolorem beatae excepturi asperiores
                molestiae sunt. Eaque, dolore aspernatur?
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
      </body>
    </>
  );
}

export default Product;
