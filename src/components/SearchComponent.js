import React, { useState, useEffect } from "react";
import ProductMini from "./ProductMini/ProductMini";
import axios from "axios";
import PageNavbar from "./PageNavbar/PageNavbar";
import css from "../components/pages/Product/Product.module.css";

const SearchComponent = () => {
  //set de hooks useState

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // funcion para traer datos de la api

  const URL = `${process.env.REACT_APP_API_BASE_URL}/products`;

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

  //funcion de busqueda

  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  //metodo de filtrado
  let results = [];
  if (!search) {
    results = products;
  } else {
    results = products.filter((dato) =>
      dato.title.toLowerCase().includes(search.toLocaleLowerCase()),
    );
  }

  //   useEffect(() => {
  //     showData();
  //   }, []);

  //renderizar

  return (
    <>
      <PageNavbar />
      <div className="container-fluid">
        <div className={css["barra-filtrar"]}>
          <input
            value={search}
            onChange={searcher}
            type="text"
            placeholder="Escriba el producto que busca"
            className="form-control"
          ></input>
        </div>

        {results.map((product) => (
          <ProductMini product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default SearchComponent;
