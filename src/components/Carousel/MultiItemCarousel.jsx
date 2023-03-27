import React, { useState } from "react";
import ProductMini from "../../components/ProductMini/ProductMini";

import "./MultiItemCarousel.css";

const Carousel = ({ products, productsPerPage }) => {
  const [activePage, setActivePage] = useState(1);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (activePage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const handlePrevClick = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const handleNextClick = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };

  return (
    <div>
      <div className="carousel justify-content-center">
        <div className="row ">
          {products.slice(startIndex, endIndex).map((product) => (
            <ProductMini product={product} key={product.id} />
          ))}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-3 row justify-content-center">
          <div className="btn-group " role="group" aria-label="Basic example">
            <button
              type="button"
              onClick={handlePrevClick}
              className="btn btn-primary"
            >
              <i className="bi bi-arrow-left text-white"></i>
            </button>
            <button
              type="button"
              onClick={handleNextClick}
              className="btn btn-primary"
            >
              <i className="bi bi-arrow-right text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
