import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Col, Row, Container } from 'react-bootstrap';
import Logo from '../img/logo_waiter-01 copy.png';



function Sidebar() {
  return (
    <div className="sidebar col-md-2">
      <Col sm={2}>
        <img className="waitqr-logo" src={Logo} />
      </Col>
      <div className="active">
        <Link to={"/home"}>
          <span className="material-icons mr-3">home</span>
          Home
        </Link>
      </div>
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
        <Link to={"/insights"}>
          <span className="material-icons mr-3">bar_chart</span>Estadísticas
        </Link>
      </span>
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
      <span className="non-active">
        <Link to={"/settings"}>
          <span className="material-icons mr-3">logout</span>Log Out
        </Link>
      </span>
    </div>
  );
}

export default Sidebar;
