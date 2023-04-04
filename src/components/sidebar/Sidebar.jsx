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
      <div id="menu-dashboard">
        <div className="top-menu">
          <div className="logo">
            <img src="../../logo.svg" alt="" />
          </div>
        </div>

        <div className="toggle">
          <Button className="boton-admin" variant="primary" onClick={handleShow}>
            <i className="bi bi-list"></i>
          </Button>
        </div>
      </div>

      {
        <Offcanvas show={show} onHide={handleClose} id="menu">
          <div>
            <Button className="boton-admin" variant="primary" onClick={handleShow}>
              <i className="bi bi-list"></i>
            </Button>
          </div>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="titulo-sidebar">Vista de Admins</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="admin-bottons ">
              <Link to="/admin/categories" className="d-block admin-botton">
                <i className="bi bi-card-checklist iconos"></i>
                Admin Categories
              </Link>
              <Link to="/admin/orders" className="d-block admin-botton">
                <i className="bi bi-receipt iconos"></i>
                Admin Orders
              </Link>
              <Link to="/admin/reviews" className="d-block admin-botton">
                <i className="bi bi-chat-left-quote iconos"></i>
                Admin Reviews
              </Link>
              <Link to="/admin/products" className="d-block admin-botton">
                <i className="bi bi-shop iconos"></i>
                Admin Products
              </Link>
              <Link to="/admin/users" className="d-block admin-botton">
                <i className="bi bi-people iconos"></i>
                Admin Users
              </Link>
              <hr className="hr" />
              <Link to="/" className="d-block volver">
                <i className="bi bi-house iconos"></i>
                Volver al sitio
              </Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      }
    </>
  );
}

export default Sidebar;
