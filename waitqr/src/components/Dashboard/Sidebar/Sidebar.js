import React, { useState, useContext, useEffect } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Col, Row, Container, DropdownButton, Dropdown } from "react-bootstrap";
import Logo from "../img/logo_waitqr_update.png";
import Ayuda from "./Home/Ayuda";
import "./sidebar.css";

function Sidebar() {
  return (
    <Col className="sidebar">
      <Col className="col-waitqr-logo">
        <img className="waitqr-logo" src={Logo} />
      </Col>
      
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
      <span className="non-active">
        <Link to={"/ordenes"}>
          <span className="material-icons mr-3">view_list</span>Ordenes
        </Link>
      </span>
      
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
