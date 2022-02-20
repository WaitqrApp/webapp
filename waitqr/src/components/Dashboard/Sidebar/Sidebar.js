import React, { useState, useContext, useEffect } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Col, Row, Container, DropdownButton, Dropdown } from "react-bootstrap";
import Logo from "../img/logo_waitqr_update.png";
import Ayuda from "./Home/Ayuda";
import AuthContext from "../../../context/autenticacion/authContext";
import { useHistory } from "react-router-dom";
import "./sidebar.css";

import restauranteContext from "../../../context/restaurantes/restauranteContext";
import AlertaContext from "../../../context/alertas/alertaContext";

function Sidebar() {
  return (
    <Col className="sidebar">
      <Col className="col-waitqr-logo">
        <img className="waitqr-logo" src={Logo} />
      </Col>
      {/*<div className="active">
        <Link to={"/home"}>
          <span className="material-icons mr-3">home</span>
          Home
        </Link>
      </div*/}
      <div className="non-active">
        <Link to={"/menu"}>
          <span className="material-icons mr-3">fastfood</span> Menu
        </Link>
      </div>
      <span className="non-active">
        <Link to={"/orders"}>
          <span className="material-icons mr-3">view_list</span>Ordenes
        </Link>
      </span>
      {/*<span className="non-active">
        <Link to={"/insights"}>
          <span className="material-icons mr-3">bar_chart</span>Estadísticas
        </Link>
      </span>*/}
      {/*<span className="non-active">
                <Link to={'/history'}>
                    <span className="material-icons mr-3">history</span>Historial
                </Link>
            </span>*/}
      <span className="non-active">
        <Link to={"/tables"}>
          <span className="material-icons mr-3">all_out</span>Mesas
        </Link>
      </span>
      <span className="non-active"></span>
      <Col sm={4}>
        <Ayuda />
      </Col>
    </Col>
  );
}

export default Sidebar;
