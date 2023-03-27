import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN

export default function SignUp() {
  const paises = [
    "Afganistán",
    "Argentina",
    "Armenia",
    "Australia",
    "Uganda",
    "Uruguay",
    "Uzbekistán",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Yibuti",
    "Zambia",
    "Zimbabue",
  ];

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  const [password, setPassword] = useState();

  return (
    <Container>
      {/* </Container><div> */}
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          {/* <div className="border border-2 border-primary"></div> */}
          <Card className="shadow px-4">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-center text-uppercase ">
                  Sign Up to buy products!
                </h2>
                <div className="mb-3">
                  <Form>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Adjuntar Foto</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FirstName">
                      <Form.Label className="text-center">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(event) => setFirstName(event.target.value)}
                        placeholder="Enter First Name"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="LastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(event) => setLastName(event.target.value)}
                        placeholder="Enter Last Name"
                      />
                    </Form.Group>
                    {/* <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      ></Form.Group> */}

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">Email address</Form.Label>
                      <Form.Control
                        type="email"
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                      <Form.Label className="text-center">Phone</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder="Enter Phone"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCountry">
                      <Form.Label className="text-center">Country</Form.Label>
                      <br />
                      <select
                        onChange={(event) => setCountry(event.target.value)}
                        name="countries"
                        id="countries"
                      >
                        {paises.map((pais) => (
                          <option value={pais}>{pais}</option>
                        ))}
                      </select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCity">
                      <Form.Label className="text-center">City</Form.Label>

                      <Form.Control
                        type="text"
                        onChange={(event) => setCity(event.target.value)}
                        placeholder="Enter City"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicStreet">
                      <Form.Label className="text-center">Street address</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(event) => setAddress(event.target.value)}
                        placeholder="Enter Adress"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicState">
                      <Form.Label className="text-center">State / Province</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(event) => setState(event.target.value)}
                        placeholder="Enter State"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicZip">
                      <Form.Label className="text-center">Zip / Postal Code</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(event) => setZip(event.target.value)}
                        placeholder="Enter Zip"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                      <br />
                      <Form.Label cclassName="text-center">Password</Form.Label>
                      <Form.Control
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Set Password"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                      <Form.Label cclassName="text-center">Repeat Password</Form.Label>
                      <Form.Control
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Set Password"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form.Group>

                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{" "}
                        <a href="{''}" className="text-primary fw-bold">
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
  );
}
