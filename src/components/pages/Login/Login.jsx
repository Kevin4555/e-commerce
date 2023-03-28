import { React, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

//import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handlelogin(event) {
    event.preventDefault();
    try {
      const response = axios({
        method: "post",
        url: `${process.env.REACT_APP_URL}/users/tokens`,
        data: {
          email,
          password,
        },
      });
      //dispatch(setUser(response.data));
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  }

  return (
    <Container>
      <div>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Login</h2>
                  <form className="mb-3" onSubmit={handlelogin}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-center">Correo electrónico</Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-center">Contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </Form.Group>

                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        Login
                      </Button>
                    </div>
                  </form>
                  <div className="mt-3">
                    <p className="mb-0  text-center">
                      Todavia no tienes una cuenta?
                      <Link to="/signup" className="text-primary fw-bold">
                        Crea una
                      </Link>
                    </p>
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
