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
      <Sidebar />
      <div className={css.backgroundTop}>
        <div className="container-fluid py-5 d-flex align-item-center justify-content-center flex-column">
          <header>
            <h1 className={css.titulo}>Panel de Administracion</h1>
          </header>
        </div>
      </div>
      <Container className="p-5" fluid id={css["backgroundAdminLogin"]}>
        <h2 className={css.tituloContainer}>Panel de Órdenes</h2>
        <div className="text-end">
          <Button variant="success">Agregar Órden</Button>
        </div>

        <div className={css.tableProducts}>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Estado</th>
                <th>Dirección</th>
                <th>Productos</th>
                <th> Id usuario</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr key={index}>
                    <td>{order.id}</td>
                    <td>{order.status}</td>
                    <td>{order.address}</td>
                    <td>{order.products}</td>
                    <td>{order.user.id}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
      ;
    </>
  );
};

export default AdminOrders;
