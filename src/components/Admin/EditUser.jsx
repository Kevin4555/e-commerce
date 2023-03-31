import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../pages/SignUp/SignUp.css";

export default function EditUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  //   const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    let formdata = new FormData(event.target);
    try {
      await axios({
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "patch", // revisar que metodo corresponde. Si el endpoint es patch, tengo que armarlo con patch
        url: `${process.env.REACT_APP_API_BASE_URL}/user-patch`, //poner el endpoint que usamos
        data: formdata,
      });
      navigate("/login");
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
                  <h2 className="mb-2 text-center ">Edit User</h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSignUp}>
                      <Form.Group className="mb-3" controlId="FirstName">
                        <Form.Label className="text-center">Nombre</Form.Label>
                        <Form.Control
                          type="text"
                          value={firstName}
                          name="firstname"
                          onChange={(event) => setFirstName(event.target.value)}
                          placeholder="Juan"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="LastName">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                          type="text"
                          value={lastName}
                          name="lastname"
                          onChange={(event) => setLastName(event.target.value)}
                          placeholder="Pérez"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="text-center">Email</Form.Label>
                        <Form.Control
                          type="email"
                          value={email}
                          name="email"
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="juan@gmail.com"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="phone">
                        <Form.Label className="text-center">Celular</Form.Label>
                        <Form.Control
                          type="text"
                          value={phone}
                          name="phone"
                          onChange={(event) => setPhone(event.target.value)}
                          placeholder="09*******"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="address">
                        <Form.Label className="text-center">Dirección</Form.Label>
                        <Form.Control
                          type="text"
                          value={address}
                          name="address"
                          onChange={(event) => setAddress(event.target.value)}
                          placeholder="2023 Calle Cielo, Maldonado, Uruguay"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="buttonsubmit">
                        <div className="d-grid">
                          <Button type="submit" id="button">
                            Confirm{" "}
                          </Button>
                        </div>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="buttonsubmit">
                        <div className="d-grid">
                          <Button type="submit" id="button">
                            Reset password{" "}
                          </Button>
                        </div>
                      </Form.Group>
                      {/*   </Form.Group>
                </Form.Group>
              </Form.Group> */}
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/*   
        </div> */}
        </Row>
        <Card.Body />
        {/*  </div> */}
      </Container>
    </>
  );
}
