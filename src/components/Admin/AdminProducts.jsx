import React from "react";
import css from "./Admin.module.css";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Sidebar from "../Sidebar/Sidebar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
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

  const handleDeleteProduct = async (product) => {
    try {
      await axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_BASE_URL}/products/${product.id}`,
      });
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
      <Sidebar />
      <div className={css.backgroundTop}>
        <div className="container-fluid py-5 d-flex align-item-center justify-content-center flex-column">
          <header>
            <h1 className={css.titulo}>Panel de Administracion</h1>
          </header>
        </div>
      </div>
      <Container className="p-5" fluid id={css["backgroundAdminLogin"]}>
        <Row>
          <Col>
            <h2 className={css.tituloContainer}>Panel de Products</h2>

            <div className="text-end">
              <div className={css.botonAgregar}>
                <Link to="/admin/createProduct">
                  <Button variant="success"> Agregar producto </Button>
                </Link>
              </div>
            </div>

            <div className={css.tableProducts}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Titulo</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Imagen 1</th>
                    <th>Imagen 2</th>
                    <th>Stock</th>
                    <th>Featured</th>
                    <th>Extracto</th>
                    <th>Rating</th>
                    <th> Id</th>
                    <th>Editar </th>
                    <th>Eliminar </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => {
                    return (
                      <tr key={index}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>
                          {
                            <img
                              src={process.env.REACT_APP_API_BASE_IMG_URL + `/${product.img.img1}`}
                              alt=""
                              className={css.categoriesimg}
                            />
                          }
                        </td>
                        <td>
                          <img
                            src={process.env.REACT_APP_API_BASE_IMG_URL + `/${product.img.img2}`}
                            alt=""
                            className={css.categoriesimg}
                          />
                        </td>
                        <td>{product.stock}</td>
                        <td>{product.featured}</td>
                        <td>{product.slug}</td>
                        <td>{product.rating}</td>
                        <td>{product.categoryId}</td>
                        <td>
                          {" "}
                          <Button className="buttons" variant="warning">
                            <Link to={`/admin/editProduct/${product.id}`}> Editar </Link>
                          </Button>
                        </td>
                        <td>
                          {" "}
                          <Button
                            className="buttons"
                            variant="danger"
                            onClick={() => handleDeleteProduct(product)}
                          >
                            Eliminar
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
      ;
    </>
  );
};

export default AdminProducts;
