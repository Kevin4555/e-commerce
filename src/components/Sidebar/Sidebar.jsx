import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import css from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className="col-2" id={css["menu"]}>
      <div className={css.adminButton}>
        <Link to="/admin/dashboard" className={`d-block ${css.adminButtons}`}>
          <i className={`bi bi-card-checklist ${css.iconos}`}></i>
          Dashboard
        </Link>
        <Link to="/admin/categories" className={`d-block ${css.adminButtons}`}>
          <i className={`bi bi-card-checklist ${css.iconos}`}></i>
          Categories
        </Link>
        <Link to="/admin/orders" className={`d-block ${css.adminButtons}`}>
          <i className={`bi bi-receipt ${css.iconos}`}></i>
          Orders
        </Link>
        <Link to="/admin/reviews" className={`d-block ${css.adminButtons}`}>
          <i className={`bi bi-chat-left-quote ${css.iconos}`}></i>
          Reviews
        </Link>
        <Link to="/admin/products" className={`d-block ${css.adminButtons}`}>
          <i className={`bi bi-shop ${css.iconos}`}></i>
          Products
        </Link>
        <Link to="/admin/users" className={`d-block ${css.adminButtons}`}>
          <i className={`bi bi-people ${css.iconos}`}></i>
          Users
        </Link>
        <Link to="/" className={`d-block ${css.volver} ${css.adminButtons}`}>
          <i className={`bi bi-house ${css.iconos}`}></i>
          Volver al sitio
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
