import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../pages/SignUp/SignUp.css";

export default function EditCategoryId() {
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setcategoryName] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEditProduct = async (event) => {
    event.preventDefault();
    let formdata = new FormData(event.target);
    try {
      await axios({
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "patch", // revisar que metodo corresponde. Si el endpoint es patch, tengo que armarlo con patch
        url: `${process.env.REACT_APP_API_BASE_URL}/product-patch`, //poner el endpoint que usamos
        data: formdata,
      });
      navigate("/admin/editProduct");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
      <Container fluid id="background">
        <Row id="content" className="py-3 d-flex justify-content-center align-items-center">
          <Col xs={11} sm={8} md={6} xl={4}>
            <Card className="px-4">
              {error && (
                <Alert variant="danger" onClose={() => setError(false)} dismissible>
                  <p>No se pudo crear el usuario</p>
                </Alert>
              )}
              <Card.Body>
                <div className="mb-3">
                  <h2 className="mb-2 text-center ">Edit Product</h2>
                  <div className="mb-3">
                    <Form onSubmit={handleEditProduct}>
                      <Form.Group className="mb-3" controlId="categoryId">
                        <Form.Label className="text-center">Definir Category Id</Form.Label>
                        <Form.Control
                          type="text"
                          value={categoryId}
                          name="categoryId"
                          onChange={(event) => setCategoryId(event.target.value)}
                          placeholder="1-10"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="categoryName">
                        <Form.Label className="text-center">Nombre de Categoria</Form.Label>
                        <Form.Control
                          type="text"
                          value={categoryName}
                          name="categoryName"
                          onChange={(event) => setcategoryName(event.target.value)}
                          placeholder="Nombre categoria"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="buttonsubmit">
                        <div className="d-grid">
                          <Button type="submit" id="button">
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
    </>
  );
}
