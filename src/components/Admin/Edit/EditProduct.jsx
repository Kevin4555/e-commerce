import React, { useState, useEffect } from "react";
import { Col, Button, Row, Container, Card, Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../pages/SignUp/SignUp.css";
import { useParams } from "react-router-dom";

export default function EditProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [stock, setStock] = useState("");
  const [CategoryId, setCategoryId] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/products/${id}`,
        });
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const handleEditProduct = async (event) => {
    event.preventDefault();
    let formdata = new FormData(event.target);
    try {
      await axios({
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "patch",
        url: `${process.env.REACT_APP_API_BASE_URL}/products/${product.id}`,
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
                      <Form.Group className="mb-3" controlId="title">
                        <Form.Label className="text-center">Nombre producto</Form.Label>
                        <Form.Control
                          type="text"
                          value={title}
                          name="title"
                          onChange={(event) => setTitle(event.target.value)}
                          placeholder="Jarron de ceramica"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="description">
                        <Form.Label className="text-center">Descripcion</Form.Label>
                        <Form.Control
                          type="text"
                          value={description}
                          name="description"
                          onChange={(event) => setDescription(event.target.value)}
                          placeholder="Jarron de ceramica modelado color beige..."
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

                      <Form.Group className="mb-3" controlId="CategoryId">
                        <Form.Label className="text-center">Definir Category Id</Form.Label>
                        <Form.Control
                          type="number"
                          value={CategoryId}
                          name="CategoryId"
                          onChange={(event) => setCategoryId(event.target.value)}
                          placeholder="Definir categoria de producto"
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
