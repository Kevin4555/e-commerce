import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Sidebar from "../Sidebar/Sidebar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin/NavbarAdmin";
import css from "./Admin.module.css";

const AdminAdmins = () => {
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
      <NavbarAdmin />
      <Container className="p-0" fluid id={css["backgroundAdminLogin"]}>
        <Sidebar />
        <Row className="m-0">
          <div className="col-2"></div>

          <div className={`${css.backgroundTop} col-10 px-4`}>
            <div className={css.header}>
              <h2 className={css.tituloContainer}>Panel de Usuarios</h2>
            </div>

            <div className={css.tableProducts}>
              <Table striped bordered hover className={`${css.table} mt-2`}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <th>Avatar</th>
                    <th>Acciones</th>
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
                        <td>
                          {
                            <img
                              src={process.env.REACT_APP_API_BASE_IMG_URL + `/${user.avatar}`}
                              alt=""
                              className={css.userAvatar}
                            />
                          }
                        </td>
                        <td>
                          {" "}
                          <Button className="buttons" variant="warning">
                            {" "}
                            <Link
                              to={`/admin/editUser/${user.id}`}
                              className="text-decoration-none text-light"
                            >
                              Editar{" "}
                            </Link>
                          </Button>{" "}
                          <Button
                            className="buttons"
                            variant="danger"
                            onClick={() => handleDeleteAdmin(admin)}
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
          </div>
        </Row>
      </Container>
    </>
  );
};

export default AdminAdmins;
