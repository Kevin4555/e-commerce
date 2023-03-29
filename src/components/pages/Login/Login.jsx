import { React, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../slices/usersSlice";
import axios from "axios";
import PageNavbar from "../../navbar/PageNavbar";
import "./Login.css";

//import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  /*   const dispatch = useDispatch();
  const navigate = useNavigate(); */

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_BASE_URL}/users/tokens`,
        data: {
          email,
          password,
        },
      });
      console.log(response.data);
      dispatch(setUser(response.data));
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
      <PageNavbar />
      <Container fluid id="background">
        <Row id="content" className="d-flex justify-content-center align-items-center">
          <Col xs={11} sm={8} md={6} xl={4}>
            <Card className=" px-4">
              <Card.Body>
                <div>
                  <h2 className="mb-3 text-center ">Iniciar Sesión</h2>
                  <form className="mb-3" onSubmit={handleLogin}>
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

                    <div className="mt-3 d-grid">
                      <Button id="button" type="submit">
                        Login
                      </Button>
                    </div>
                  </form>
                  <div className="mt-3">
                    <p className="mb-0  text-center">
                      Todavía no tienes una cuenta?
                      <Link to="/signup" className="link">
                        Regístrate
                      </Link>
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
