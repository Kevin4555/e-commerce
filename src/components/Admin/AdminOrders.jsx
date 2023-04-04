import React from "react";
import css from "./Admin.module.css";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Sidebar from "../Sidebar/Sidebar";
import Button from "react-bootstrap/Button";

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
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);
  return (
    <>
      <Sidebar />
      <div className="container-fluid py-5 d-flex align-item-center justify-content-center flex-column">
        <header>
          <h1 className="fs-3 fw-bold text-light text-center">Panel de Administracion</h1>
        </header>
      </div>
      <Container fluid>
        <h2>Panel de Orders</h2>
        <div className="text-end">
          <Button variant="success">Agregar nueva Orden</Button>
        </div>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Address</th>
              <th>Products</th>
              <th>User Id</th>
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
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      ;
    </>
  );
};

export default AdminOrders;
