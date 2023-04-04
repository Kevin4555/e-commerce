import css from "./Category.module.css";
import cssHome from "../Home/Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import PageNavbar from "../../navbar/PageNavbar";
import ProductMini from "../../ProductMini/ProductMini";
import Newsletter from "../../Newsletter/Newsletter";
import Footer from "../../Footer/Footer";
import Loading from "../../Loading/Loading";

function Category() {
  const [products, setProducts] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("Todos nuestros productos");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/products`,
        });
        setProducts(response.data);
        setProductsToShow(response.data);
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
  const productsFromCategory5 = products.filter((product) => product.categoryId === 5);

  function scrollToCategory(id) {
    const elemento = document.getElementById(id);
    const posicion = elemento.getBoundingClientRect();
    window.scrollTo({
      top: posicion.top + window.pageYOffset,
      behavior: "smooth",
    });
  }

  function showProducts(arrayProducts) {
    return (
      arrayProducts && (
        <div className="row">
          {arrayProducts.map((product) => {
            return <ProductMini product={product} key={`${product.name}_${product.id}`} />;
          })}
        </div>
      )
    );
  }

  if (products[0]) {
    return (
      <>
        <PageNavbar />
        <main>
          <div className="container">
            <h3 className="fs-1 mt-4 text-center">Categorías</h3>
            <div className="row rounded border-bottom" id={cssHome["categoryDisplay"]}>
              <div
                className="col-2"
                onClick={() => {
                  setProductsToShow(productsFromCategory1);
                  setCategoryTitle("Pinturas");
                  scrollToCategory("products");
                }}
              >
                <img
                  src={
                    process.env.REACT_APP_API_BASE_IMG_URL + `/${productsFromCategory1[2].img.img1}`
                  }
                  alt=""
                  className={css.categoriesImg}
                />
                <h5 className="mt-3">Pinturas</h5>
              </div>
              <div
                className="col-2"
                onClick={() => {
                  setProductsToShow(productsFromCategory2);
                  setCategoryTitle("Cerámicas");
                  scrollToCategory("products");
                }}
              >
                <img
                  src={
                    process.env.REACT_APP_API_BASE_IMG_URL + `/${productsFromCategory2[1].img.img1}`
                  }
                  alt=""
                  className={css.categoriesImg}
                />
                <h5 className="mt-3">Cerámicas</h5>
              </div>
              <div
                className="col-2"
                onClick={() => {
                  setProductsToShow(productsFromCategory3);
                  setCategoryTitle("Maderas");
                  scrollToCategory("products");
                }}
              >
                <img
                  src={
                    process.env.REACT_APP_API_BASE_IMG_URL + `/${productsFromCategory3[0].img.img1}`
                  }
                  className={css.categoriesImg}
                  alt=""
                />
                <h5 className="mt-3">Maderas</h5>
              </div>
              <div
                className="col-2"
                onClick={() => {
                  setProductsToShow(productsFromCategory4);
                  setCategoryTitle("Tejidos");
                  scrollToCategory("products");
                }}
              >
                <img
                  src={
                    process.env.REACT_APP_API_BASE_IMG_URL + `/${productsFromCategory4[0].img.img1}`
                  }
                  className={css.categoriesImg}
                  alt=""
                />
                <h5 className="mt-3">Tejidos</h5>
              </div>
              <div
                className="col-2"
                onClick={() => {
                  setProductsToShow(productsFromCategory5);
                  setCategoryTitle("Decoraciones");
                  scrollToCategory("products");
                }}
              >
                <img
                  src={
                    process.env.REACT_APP_API_BASE_IMG_URL + `/${productsFromCategory2[3].img.img1}`
                  }
                  className={css.categoriesImg}
                  alt=""
                />
                <h5 className="mt-3">Decoraciones</h5>
              </div>
            </div>
            <div className="mt-5 mb-5 ms-2">
              <h3 className="pt-5 pb-4 d-inline fs-2" id="products">
                {categoryTitle}
              </h3>
              <small
                className="categoryLink"
                onClick={() => {
                  setProductsToShow(products);
                  setCategoryTitle("Todos nuestros productos");
                  scrollToCategory("products");
                }}
              >
                ver todos <i className="bi bi-arrow-right-short"></i>
              </small>
            </div>
            {showProducts(productsToShow)} artículos
          </div>
        </main>
        <Newsletter />
        <Footer />
      </>
    );
  } else {
    return <Loading />;
  }
}

export default Category;
