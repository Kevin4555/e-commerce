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

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

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

  const handleDeleteCategory = async (category) => {
    try {
      await axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_BASE_URL}/categories/${category.id}`,
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
            <h2 className={css.tituloContainer}>Panel de categorias</h2>

            <div className="text-end">
              <div className={css.botonAgregar}>
                <Link to="/admin/createCategory">
                  <Button variant="success"> Agregar categoria </Button>
                </Link>
              </div>
            </div>

            <div className={css.tableProducts}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, index) => {
                    return (
                      <tr key={index}>
                        <td>{category.id}</td>
                        <td>{category.name}</td>
                        <td>
                          {" "}
                          <Button className="buttons" variant="warning">
                            <Link to={`/admin/editCategoryId/${category.id}`} variant="warning">
                              Editar
                            </Link>
                          </Button>
                        </td>
                        <td>
                          {" "}
                          <Button
                            className="buttons"
                            variant="danger"
                            onClick={() => handleDeleteCategory(category)}
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

export default AdminCategories;
