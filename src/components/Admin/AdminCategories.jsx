import React from "react";
import css from "./Admin.module.css";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/categories`,
        });
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
  return (
    <>
      <Sidebar />
      <div className="container-fluid py-5 d-flex align-item-center justify-content-center flex-column">
        <header>
          <h1 className="fs-3 fw-bold text-light text-center">Panel de Administracion</h1>
        </header>
      </div>
      <Container>
        <h2>Panel de Categories</h2>

        <div className="text-end">
          <Link to="/admin/createCategory" variant="success">
            Agregar nueva Category
          </Link>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => {
              return (
                <tr>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
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

export default AdminCategories;
