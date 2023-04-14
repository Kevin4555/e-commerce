import React from "react";
import css from "./Admin.module.css";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Sidebar from "../Sidebar/Sidebar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavbarAdmin from "./NavbarAdmin/NavbarAdmin";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/orders`,
        });
        setOrders(response.data);
        console.log(orders);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);
  return (
    <>
      <NavbarAdmin />
      <Container className="p-0" fluid id={css["backgroundAdminLogin"]}>
        <Sidebar />
        <Row className="m-0">
          <div className="col-2"></div>
          <div className={`${css.backgroundTop} col-10 px-4`}>
            <div className={css.header}>
              <h2 className={css.tituloContainer}>Panel de Ordenes</h2>{" "}
            </div>

            <div className={css.tableProducts}>
              <Table striped bordered hover className={`${css.table} mt-2`}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ID Usuario</th>
                    <th>Productos</th>
                    <th>Precio Total</th>
                    <th>Estado de la Orden</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => {
                    return (
                      <tr>
                        <td>{order.id}</td>
                        <td>{order.userId}</td>
                        <td>
                          {order.products.products.map((product) => {
                            return <p>• {product.title} </p>;
                          })}
                        </td>
                        <td>USD {order.totalPrice}</td>
                        <td>{order.status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default AdminOrders;
