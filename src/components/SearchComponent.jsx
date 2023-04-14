import React, { useState, useEffect } from "react";
import ProductMini from "./ProductMini/ProductMini";
import axios from "axios";
import PageNavbar from "./PageNavbar/PageNavbar";
import css from "../components/pages/Product/Product.module.css";
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";

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

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(search);
  };

  //metodo de filtrado

  return (
    <>
      <PageNavbar />
      <Container className="mt-5">
        <Row>
          <Form onSubmit={handleSearch}>
            <InputGroup className={`mb-3 ${css["barra-filtrar"]}`}>
              <Form.Control
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Escriba el producto que busca"
              />
              <Button variant="outline-secondary" id="button-addon2" size="lg" type="submit">
                <i className={`bi bi-search`}></i>
              </Button>
            </InputGroup>
          </Form>

          {products
            .filter((dato) => dato.title.toLowerCase().includes(search.toLocaleLowerCase()))
            .map((product) => (
              <ProductMini product={product} key={product.id} />
            ))}
        </Row>
      </Container>
    </>
  );
};

export default SearchComponent;
