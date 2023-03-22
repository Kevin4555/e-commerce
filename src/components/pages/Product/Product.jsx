import Carousel from "react-bootstrap/Carousel";
import PageNavbar from "../../navbar/PageNavbar";

function Product() {
  return (
    <>
      <PageNavbar />

      <div className="row">
        <div className="col-6">
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
          </Carousel>
        </div>

        <div className="col-6">
          <h1>Titulo</h1>
          <small className="d-block mb-3 mt-5">USD 84</small>
          <small className="d-block my-3">Estrellitas</small>
          <small className="d-block my-3">Stock: 12312312 units.</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            illum dolor, reprehenderit hic nulla, ad quod fugit quis maxime nemo
            veritatis dolorem beatae excepturi asperiores molestiae sunt. Eaque,
            dolore aspernatur?
          </p>
          <div className="d-flex justify-content-between">
            <button>Add to cart</button>{" "}
            <button className="border-0 bg-white">
              <i class="bi bi-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
