import React from "react";
import css from "./Admin.module.css";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "../Sidebar/Sidebar";
import Button from "react-bootstrap/Button";

const AdminReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/reviews`,
        });
        setReviews(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
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
        <h2>Panel de Reviews</h2>

        <div className="text-end">
          <Button variant="success">Agregar Review</Button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Content</th>
              <th>User Id</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => {
              return (
                <tr>
                  <td>{review.id}</td>
                  <td>{review.content}</td>
                  <td>{review.user.id}</td>
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

export default AdminReviews;
