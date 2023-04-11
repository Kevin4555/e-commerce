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

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/users`,
        });
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  {
    console.log(users);
  }

  const handleDeleteUser = async (user) => {
    try {
      await axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_BASE_URL}/users/${user.id}`,
      });
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

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
        <Row>
          <Col>
            <h2 className={css.tituloContainer}>Panel de Usuarios</h2>

            <div className="text-end">
              <div className={css.botonAgregar}>
                <Link to="/admin/createProduct">
                  <Button variant="success"> Agregar usuario </Button>
                </Link>
              </div>
            </div>

            <div className={css.tableProducts}>
              <Table className="table" striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Avatar</th>
                    <th>Birthdate</th>
                    <th>Edit</th>
                    <th>Erase User</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>{user.phone}</td>
                        <td>{user.avatar}</td>
                        <td>{user.birthdate}</td>
                        <td>
                          {" "}
                          <Button className="buttons" variant="warning">
                            {" "}
                            <Link to={`/admin/editUser/${user.id}`}>Editar </Link>
                          </Button>
                        </td>
                        <td>
                          {" "}
                          <Button
                            className="buttons"
                            variant="danger"
                            onClick={() => handleDeleteUser(user)}
                          >
                            Eliminar{" "}
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
      ;
    </>
  );
};

export default AdminUsers;
