import css from "./Home.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PageNavbar from "../../PageNavbar/PageNavbar";
import MultiItemCarousel from "../../Carousel/MultiItemCarousel";
import ProductMini from "../../ProductMini/ProductMini";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../../Footer/Footer";
import Newsletter from "../../Newsletter/Newsletter";
import Loading from "../../Loading/Loading";

function Home() {
  window.document.title = "Manos Creativas";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

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
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/categories`,
        });
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

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

  if (products.length > 0) {
    const productsFromCategory1 = products.filter((product) => parseInt(product.categoryId) === 1);
    const productsFromCategory2 = products.filter((product) => parseInt(product.categoryId) === 2);
    const productsFromCategory3 = products.filter((product) => parseInt(product.categoryId) === 3);
    const productsFromCategory4 = products.filter((product) => parseInt(product.categoryId) === 4);
    const productsFromCategory5 = products.filter((product) => parseInt(product.categoryId) === 5);

    return (
      <>
        <PageNavbar />
        <main>
          <Carousel className={css.carousel}>
            <Carousel.Item>
              <img
                className={`${css.imgPrueba} d-block`}
                src="/img/mainBanner.webp"
                alt="First slide"
                draggable="false"
              />
              <Carousel.Caption className={css.carouselCaption}>
                <p>Lo más vendido</p>
                <h2>Colección Madera Moderna</h2>
                <button className={`btn ${css.bannerBtn}`}>Comprar ahora</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src="/img/mainBanner2.webp"
                alt="Second slide"
                draggable="false"
              />

              <Carousel.Caption className={css.carouselCaption}>
                <p>Los mejores productos hechos a mano</p>
                <h2>Nueva Colección Handmade</h2>
                <button className={`btn ${css.bannerBtn}`}>Comprar ahora</button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <div className="container">
            <h3 className="fs-2 mt-5 text-center">Categorías</h3>
            <div className="row rounded" id={css["categoryDisplay"]}>
              {categories.map((category) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-xl-2"
                  onClick={() =>
                    scrollToCategory(
                      category.name.toLowerCase().replace(/[áéíóú]/g, function (match) {
                        switch (match) {
                          case "á":
                            return "a";
                          case "é":
                            return "e";
                          case "í":
                            return "i";
                          case "ó":
                            return "o";
                          case "ú":
                            return "u";
                        }
                      }),
                    )
                  }
                >
                  <img
                    src={process.env.REACT_APP_API_BASE_IMG_URL + `/${category.img}`}
                    alt=""
                    className={css.categoriesImg}
                  />
                  <h5 className="mt-3">{category.name}</h5>
                </div>
              ))}
            </div>
            <section id={css["display"]}>
              <div className={css.displayOffer}>
                <img src="/img/subBanner.webp" alt="" />
                <div>
                  <p className="fs-5 mb-2">35% off</p>
                  <h3>Especial Nórdico Matte</h3>
                  <button className={`btn ${css.bannerBtn}`}>Comprar ahora</button>
                </div>
              </div>
              <div className={css.displayOffer}>
                <img src="/img/subBanner2.webp" alt="" />
                <div>
                  <p className="fs-5 mb-2">25% off</p>
                  <h3>Terra Punto Cotta</h3>
                  <button className={`btn ${css.bannerBtn}`}>Comprar ahora</button>
                </div>
              </div>
            </section>
            <h2 className="pb-4">Destacados</h2>
            {products && (
              <MultiItemCarousel
                products={products.filter((product) => Number(product.rating) === 5)}
                productsPerPage={4}
              ></MultiItemCarousel>
            )}

            <div className="mt-5 mb-5 ms-2">
              <h3 className="pt-5 pb-4 d-inline fs-2" id="pinturas">
                Pinturas
              </h3>
              <Link to={"/categories"} className={css.categoryLink}>
                ver todos <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
            {showProducts(productsFromCategory1)}
            <div className="mt-5 mb-5 ms-2">
              <h3 className="pt-5 pb-4 d-inline fs-2" id="ceramicas">
                Cerámicas
              </h3>
              <Link to={"/categories"} className={css.categoryLink}>
                ver todos <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
            {showProducts(productsFromCategory2)}
            <div className="mt-5 mb-5 ms-2">
              <h3 className="pt-5 pb-4 d-inline fs-2" id="maderas">
                Maderas
              </h3>
              <Link to={"/categories"} className={css.categoryLink}>
                ver todos <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
            {showProducts(productsFromCategory3)}
            <div className="mt-5 mb-5 ms-2">
              <h3 className="pt-5 pb-4 d-inline fs-2" id="tejidos">
                Tejidos
              </h3>
              <Link to={"/categories"} className={css.categoryLink}>
                ver todos <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
            {showProducts(productsFromCategory4)}
            <div className="mt-5 mb-5 ms-2">
              <h3 className="pt-5 pb-4 d-inline fs-2" id="decoraciones">
                Decoraciones
              </h3>
              <Link to={"/categories"} className={css.categoryLink}>
                ver todos <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
            {showProducts(productsFromCategory5)}
          </div>
        </main>
        <Newsletter />
        <Footer />
      </>
    );
  } else return <Loading />;
}

export default Home;
