import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="boton-admin" variant="primary" onClick={handleShow}>
        Vistas Admin
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Vista de Admins</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link to="/admin/categories" className="d-block">
            Admin Categories
          </Link>
          <Link to="/admin/orders" className="d-block">
            Admin Orders
          </Link>
          <Link to="/admin/reviews" className="d-block">
            Admin Reviews
          </Link>
          <Link to="/admin/products" className="d-block">
            Admin Products
          </Link>
          <Link to="/admin/users" className="d-block">
            Admin Users
          </Link>
          <Link to="/admin/users" className="d-block">
            Volver al sitio
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
