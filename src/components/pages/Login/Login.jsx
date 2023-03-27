import { React, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import ReactDOM from "react-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Login() {
  const [email, setEmail] = useState();

  return (
    <Container>
      <div className="caja">
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase titulo">Login!</h2>
                  <div className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">Email address</Form.Label>
                      <Form.Control
                        type="email"
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter email"
                      />
                    </Form.Group>

                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        Login
                      </Button>
                    </div>

                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Sign up with Google{" "}
                        {/* <div>
                          ReactDOM.render(
                          <GoogleOAuthProvider clientId="386932037035-k8v833noqjk7m4***********.apps.googleusercontent.com">
                            <React.StrictMode>
                              <App />
                            </React.StrictMode>
                          </GoogleOAuthProvider>
                          , document.getElementById('root') );
                        </div> */}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
