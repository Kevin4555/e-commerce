import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import css from "../Edit/Edit.module.css";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import Sidebar from "../../Sidebar/Sidebar";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [stock, setStock] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateProduct = async (event) => {
    event.preventDefault();
    let formdata = new FormData(event.target);
    try {
      await axios({
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "post", // revisar que metodo corresponde. Si el endpoint es patch, tengo que armarlo con patch
        url: `${process.env.REACT_APP_API_BASE_URL}/products`, //poner el endpoint que usamos
        data: formdata,
      });
      navigate("/admin/products");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <>
      <NavbarAdmin />
      <Sidebar />
      <Row className="p-0 m-0">
        <div className="col-2"></div>
        <div className="col-10 p-0">
          <Container fluid id={css["background"]}>
            <Row
              id={css["content"]}
              className="py-3 d-flex justify-content-center align-items-center"
            >
              <Col xs={11} sm={8} md={6} xl={4}>
                <Card className="px-4">
                  {error && (
                    <Alert variant="danger" onClose={() => setError(false)} dismissible>
                      <p>No se pudo crear el producto</p>
                    </Alert>
                  )}
                  <Card.Body>
                    <div className="mb-3">
                      <h2 className="mb-2 text-center">Crear Producto</h2>
                      <div className="mb-3">
                        <Form onSubmit={handleCreateProduct}>
                          <Form.Group className="mb-3" controlId="title">
                            <Form.Label className="text-center">Nombre producto</Form.Label>
                            <Form.Control
                              type="text"
                              value={title}
                              name="title"
                              onChange={(event) => setTitle(event.target.value)}
                              placeholder="Ingrese el nombre del producto"
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="description">
                            <Form.Label className="text-center">Descripción</Form.Label>
                            <Form.Control
                              type="text"
                              value={description}
                              name="description"
                              onChange={(event) => setDescription(event.target.value)}
                              placeholder="Ingrese descripción"
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="price">
                            <Form.Label className="text-center">Precio</Form.Label>
                            <Form.Control
                              type="number"
                              value={price}
                              name="price"
                              onChange={(event) => setPrice(event.target.value)}
                              placeholder="USD"
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="imgformFile">
                            <Form.Label className="text-center">Seleccionar Imagenes</Form.Label>
                            <Form.Control
                              type="file"
                              value={img}
                              name="img"
                              onChange={(event) => setImg(event.target.value)}
                              placeholder="Seleccionar imagenes"
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="stock">
                            <Form.Label className="text-center">Definir Stock</Form.Label>
                            <Form.Control
                              type="number"
                              value={stock}
                              name="stock"
                              onChange={(event) => setStock(event.target.value)}
                              placeholder="Definir stock remanente"
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="categoryId">
                            <Form.Label className="text-center">Definir Category Id</Form.Label>
                            <Form.Control
                              type="number"
                              value={categoryId}
                              name="categoryId"
                              onChange={(event) => setCategoryId(event.target.value)}
                              placeholder="Definir categoria de producto"
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="buttonsubmit">
                            <div className="d-grid">
                              <Button type="submit" className={css.adminButton}>
                                Confirm{" "}
                              </Button>
                            </div>
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Card.Body />
          </Container>
        </div>
      </Row>
    </>
  );
}
