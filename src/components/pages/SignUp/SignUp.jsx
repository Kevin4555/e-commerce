import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import PageNavbar from "../../navbar/PageNavbar";
import "./SignUp.css";

export default function SignUp() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [state, setState] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <PageNavbar />
      <Container fluid id="background">
        <Row id="content" className="py-3 d-flex justify-content-center align-items-center">
          <Col xs={11} sm={8} md={6} xl={4}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3">
                  <h2 className="mb-2 text-center ">Registro</h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Adjuntar Foto</Form.Label>
                        <Form.Control type="file" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="FirstName">
                        <Form.Label className="text-center">Nombre</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(event) => setFirstName(event.target.value)}
                          placeholder="Juan"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="LastName">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(event) => setLastName(event.target.value)}
                          placeholder="Pérez"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">Email</Form.Label>
                        <Form.Control
                          type="email"
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="juan@gmail.com"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicStreet">
                        <Form.Label className="text-center">Dirección</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(event) => setAddress(event.target.value)}
                          placeholder="2023 Calle Cielo, Maldonado, Uruguay"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label cclassName="text-center">Contraseña</Form.Label>
                        <Form.Control
                          type="password"
                          onChange={(event) => setPassword(event.target.value)}
                          placeholder="Ingrese contraseña"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <div className="d-grid">
                          <Button type="submit" id="button">
                            Create Account
                          </Button>
                        </div>
                      </Form.Group>

                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Already have an account?{" "}
                          <a href="/login" className="">
                            Sign In
                          </a>
                        </p>
                      </div>
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
