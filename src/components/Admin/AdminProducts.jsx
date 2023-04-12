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
import NavbarAdmin from "./NavbarAdmin/NavbarAdmin";

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
      <NavbarAdmin />
      <Container className="p-0" fluid id={css["backgroundAdminLogin"]}>
        <Sidebar />
        <Row className="m-0">
          <div className="col-2"></div>
          <div className={`${css.backgroundTop} col-10 px-4`}>
            <div className={css.header}>
              <h2 className={css.tituloContainer}>Panel de Productos</h2>{" "}
              <Button variant="success" className="ms-4 mb-2">
                <Link to="/admin/createProduct" className="text-decoration-none text-light">
                  {" "}
                  Agregar producto{" "}
                </Link>
              </Button>
            </div>
            <div className="text-end">
              <div className={css.botonAgregar}></div>
            </div>
            <div className={css.tableProducts}>
              <Table striped bordered hover className={css.table}>
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
                    <th>Rating</th>
                    <th>Categoría</th>
                    <th>Acciones </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => {
                    return (
                      <tr key={index}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>
                          <p className={css.description}>{product.description}</p>
                        </td>
                        <td>{product.price}</td>
                        <td>
                          {
                            <img
                              src={process.env.REACT_APP_API_BASE_IMG_URL + `/${product.img.img1}`}
                              alt=""
                              className={css.productImg}
                            />
                          }
                        </td>
                        <td>
                          <img
                            src={process.env.REACT_APP_API_BASE_IMG_URL + `/${product.img.img2}`}
                            alt=""
                            className={css.productImg}
                          />
                        </td>
                        <td>{product.stock}</td>
                        <td>{product.featured}</td>
                        <td>{product.rating}</td>
                        <td>{product.categoryId}</td>
                        <td>
                          {" "}
                          <Button className="buttons" variant="warning">
                            <Link
                              to={`/admin/editProduct/${product.slug}`}
                              className="text-decoration-none text-light"
                            >
                              {" "}
                              Editar{" "}
                            </Link>
                          </Button>{" "}
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
          </div>
        </Row>
      </Container>
      ;
    </>
  );
};

export default AdminProducts;
