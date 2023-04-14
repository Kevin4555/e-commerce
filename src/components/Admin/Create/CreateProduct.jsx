import { useState, useEffect } from "react";
import { Col, Button, Row, Container, Card, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import css from "../../pages/SignUp/SignUp.module.css";
import Loading from "../../Loading/Loading";

export default function CreateProduct() {
  let admin = useSelector((state) => state.persistedReducer.admin);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imgs, setImgs] = useState("");
  const [stock, setStock] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/categories`,
        });
        console.log(response.data);
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const handleCreateProduct = async (event) => {
    event.preventDefault();
    let formdata = new FormData(event.target);
    try {
      await axios({
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${admin.token}`,
        },
        method: "post",
        url: `${process.env.REACT_APP_API_BASE_URL}/products`,
        data: formdata,
      });
      navigate("/admin/products");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  if (categories.length > 0) {
    return (
      <>
        <Container fluid id={css["background"]}>
          <Row
            id={css["content"]}
            className="py-3 d-flex justify-content-center align-items-center"
          >
            <Col xs={11} sm={8} md={6} xl={4}>
              <Card className="px-4">
                {error && (
                  <Alert variant="danger" onClose={() => setError(false)} dismissible>
                    <p>No se pudo crear el usuario</p>
                  </Alert>
                )}
                <Card.Body>
                  <div className="mb-3">
                    <h2 className="mb-2 text-center">Create Product</h2>
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
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="description">
                          <Form.Label className="text-center">Descripcion</Form.Label>
                          <Form.Control
                            type="text"
                            value={description}
                            name="description"
                            onChange={(event) => setDescription(event.target.value)}
                            required
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
                            required
                            min={0}
                            placeholder="USD"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="imgformFile">
                          <Form.Label className="text-center">Seleccionar Imagenes</Form.Label>
                          <Form.Control
                            type="file"
                            value={imgs}
                            name="imgs"
                            accept="image/*"
                            multiple
                            onChange={(event) => setImgs(event.target.value)}
                            required
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
                            required
                            min={0}
                            placeholder="Definir stock remanente"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="categoryId">
                          <Form.Label className="text-center">Definir Categoria</Form.Label>
                          <Form.Select
                            name="categoryId"
                            required
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                          >
                            {categories.map((category) => {
                              return <option value={category.id}>{category.name}</option>;
                            })}
                          </Form.Select>
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
  } else {
    return <Loading />;
  }
}
