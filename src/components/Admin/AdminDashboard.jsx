import React from "react";
import css from "./Admin.module.css";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Sidebar from "../Sidebar/Sidebar";
import Button from "react-bootstrap/Button";
import NavbarAdmin from "../Admin/NavbarAdmin/NavbarAdmin";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/orders`,
        });
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);
  return (
    <>
      <NavbarAdmin />
      <Sidebar />
      <div>
        <h2 className="col-2 d-flex justify-content-center ">Dashboard</h2>
        <h5 className="col-2 d-flex justify-content-center "> Last 30 days </h5>
      </div>
      <div className="tarjetas">
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  {" "}
                  <h5>
                    {" "}
                    <i className="bi bi-receipt"></i> Monthly Sales (USD)
                  </h5>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Import</Card.Title>

                  <Card.Text>
                    {" "}
                    <h3> USD 1000 </h3>
                    <h6 className="fw-bold text-success">
                      <i className="bi bi-plus-lg "></i> 10%
                    </h6>
                  </Card.Text>
                  <Button variant="primary">View all</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header>
                  <h5>
                    {" "}
                    <i className="bi bi-clipboard2-pulse"></i>Conversion Rate
                  </h5>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Quantity</Card.Title>
                  <Card.Text>
                    {" "}
                    <h3>23.569</h3>
                    <h6 className="fw-bold text-danger">
                      <i className="bi bi-dash-circle"></i> 10%
                    </h6>
                  </Card.Text>
                  <Button variant="primary">View All</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header>
                  {" "}
                  <h5>
                    <i class="bi bi-shop"></i> Products{" "}
                  </h5>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Quantity</Card.Title>
                  <Card.Text>
                    {" "}
                    <h3>4.563</h3>
                    <h6 className="fw-bold text-success">
                      <i className="bi bi-plus-lg"></i> 10%
                    </h6>
                  </Card.Text>
                  <Button variant="primary">View All</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <>
        <Container fluid>
          <Row>
            <Col>
              <h2 className="col-2 d-flex justify-content-center ">Panel de Orders</h2>
              <div>
                <h5 className="col-2 d-flex justify-content-center "> Last 50 Orders </h5>
              </div>
              <div className="text-end">
                <Button variant="success">Agregar nueva Orden</Button>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <Table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Status</th>
                    <th>Address</th>
                    <th>Products</th>
                    <th>User Id</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => {
                    return (
                      <tr>
                        <td>{order.id}</td>
                        <td>{order.status}</td>
                        <td>{order.address}</td>
                        <td>{order.products}</td>
                        <td>{order.user.id}</td>
                        <td>
                          {" "}
                          <Link to={order} variant="primary">
                            Ver orden
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
        ;
      </>
    </>
  );
};

export default AdminDashboard;
