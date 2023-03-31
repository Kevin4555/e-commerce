import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PageNavbar from "../../navbar/PageNavbar";
import MultiItemCarousel from "../../Carousel/MultiItemCarousel";
import ProductMini from "../../ProductMini/ProductMini";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../../Footer/Footer";
import Newsletter from "../../Newsletter/Newsletter";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 750);
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/products`,
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  const productsFromCategory1 = products.filter((product) => product.categoryId === 1);
  const productsFromCategory2 = products.filter((product) => product.categoryId === 2);
  const productsFromCategory3 = products.filter((product) => product.categoryId === 3);
  const productsFromCategory4 = products.filter((product) => product.categoryId === 4);

  function showProducts(arrayProducts) {
    return (
      arrayProducts && (
        <div className="row">
          {arrayProducts.slice(0, 4).map((product) => {
            return <ProductMini product={product} key={`${product.name}_${product.id}`} />;
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

  if (isLoading)
    return (
      <div className="screen">
        <div className="spinner"></div>
      </div>
    );
  else
    return (
      <>
        <PageNavbar />
        <main>
          <Carousel className="carousel">
            <Carousel.Item>
              <img
                className="d-block"
                src="/img/mainBanner.webp"
                alt="First slide"
                draggable="false"
              />
              <Carousel.Caption className="carouselCaption">
                <p>Lo más vendido</p>
                <h2>Colección Madera Moderna</h2>
                <button className="btn bannerBtn">Comprar ahora</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src="/img/mainBanner2.webp"
                alt="Second slide"
                draggable="false"
              />

              <Carousel.Caption className="carouselCaption">
                <p>Los mejores productos hechos a mano</p>
                <h2>Nueva Colección Handmade</h2>
                <button className="btn bannerBtn">Comprar ahora</button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="container">
            <h3 className="fs-2 mt-5 text-center">Categorías</h3>
            <div className="row rounded" id="categoryDisplay">
              <div
                className="col-12 col-sm-6 col-md-4 col-xl-2"
                onClick={() => scrollToCategory("maderas")}
              >
                <img
                  src={
                    process.env.REACT_APP_API_BASE_URL + `/img/${productsFromCategory1[2].img.img1}`
                  }
                  alt=""
                  className="categories-img"
                />
                <h5 className="mt-3">Pinturas</h5>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-xl-2">
                <img
                  src={
                    process.env.REACT_APP_API_BASE_URL + `/img/${productsFromCategory2[1].img.img1}`
                  }
                  alt=""
                  className="categories-img"
                />
                <h5 className="mt-3">Cerámicas</h5>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-xl-2">
                <img
                  src={
                    process.env.REACT_APP_API_BASE_URL + `/img/${productsFromCategory3[0].img.img1}`
                  }
                  className="categories-img"
                  alt=""
                />
                <h5 className="mt-3">Maderas</h5>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-xl-2">
                <img
                  src={
                    process.env.REACT_APP_API_BASE_URL + `/img/${productsFromCategory4[0].img.img1}`
                  }
                  className="categories-img"
                  alt=""
                />
                <h5 className="mt-3">Tejidos</h5>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-xl-2">
                <img
                  src={
                    process.env.REACT_APP_API_BASE_URL + `/img/${productsFromCategory2[3].img.img1}`
                  }
                  className="categories-img"
                  alt=""
                />
                <h5 className="mt-3">Decoraciones</h5>
              </div>
            </div>

            <section id="display">
              <div className="displayOffer">
                <img src="/img/subBanner.webp" alt="" />
                <div>
                  <p className="fs-5 mb-2">35% off</p>
                  <h3>Especial Nórdico Matte</h3>
                  <button className="btn bannerBtn">Comprar ahora</button>
                </div>
              </div>
              <div className="displayOffer">
                <img src="/img/subBanner2.webp" alt="" />
                <div>
                  <p className="fs-5 mb-2">25% off</p>
                  <h3>Terra Punto Cotta</h3>
                  <button className="btn bannerBtn">Comprar ahora</button>
                </div>
              </div>
            </section>
            <h2 className="pb-4">Destacados</h2>
            {products && (
              <MultiItemCarousel
                products={products.filter((product) => (product.rating = 5))}
                productsPerPage={4}
              ></MultiItemCarousel>
            )}

            <div className="mt-5 mb-5 ms-2">
              <h3 className="pt-5 pb-4 d-inline fs-2" id="pinturas">
                Pinturas
              </h3>
              <Link to={"/"} className="categoryLink">
                ver todos <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
            {showProducts(productsFromCategory1)}
            <div className="mt-5 mb-5 ms-2">
              <h3 className="pt-5 pb-4 d-inline fs-2" id="ceramicas">
                Cerámicas & Decoraciones
              </h3>
              <Link to={"/"} className="categoryLink">
                ver todos <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
            {showProducts(productsFromCategory2)}
            <div className="mt-5 mb-5 ms-2">
              <h3 className="pt-5 pb-4 d-inline fs-2" id="muebles">
                Muebles & Carpintería
              </h3>
              <Link to={"/"} className="categoryLink">
                ver todos <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
            {showProducts(productsFromCategory3)}
          </div>
        </main>
        <Newsletter />
        <Footer />
      </>
    );
}

export default Home;
