import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Sidebar from "../Sidebar/Sidebar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Administrators = () => {
  const [admins, setAdmins] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getAdmins = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/admin`,
        });
        setAdmins(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAdmins();
  }, []);
  const handleDeleteAdmin = async (admin) => {
    try {
      await axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_BASE_URL}/admin/${admin.id}`,
      });
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="container-fluid py-5 d-flex align-item-center justify-content-center flex-column">
        <header>
          <h1 className="fs-3 fw-bold text-light text-center">Panel de Administracion</h1>
        </header>
      </div>
      <Container fluid>
        <h2>Panel de admins</h2>

        {/* Cambiar segun excalidraw */}
        <div className="text-end">
          <Link to="/admin/createAdmin">
            <Button variant="success"> Agregar admin </Button>
          </Link>
        </div>

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
            {admins.map((admin, index) => {
              return (
                <tr key={index}>
                  <td>{admin.id}</td>
                  <td>{admin.firstname}</td>
                  <td>{admin.lastname}</td>
                  <td>{admin.email}</td>
                  <td>{admin.address}</td>
                  <td>{admin.phone}</td>
                  <td>{admin.avatar}</td>
                  <td>{admin.birthdate}</td>
                  <td>
                    {" "}
                    <Link to={`/admin/administrators/${admin.id}`} variant="warning">
                      Editar Admin
                    </Link>
                  </td>
                  <td>
                    {" "}
                    <Button variant="danger" onClick={() => handleDeleteAdmin(admin)}>
                      Eliminar Admin
                    </Button>
                  </td>
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

export default Administrators;
