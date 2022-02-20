import React from "react";
import "./styles/home.css";
import help from "../../img/Help.png";
import { Row, Container, Col, Button } from "react-bootstrap";

function Ayuda() {
  return (
    <Container className="container-fluid text-center dashboard-componente-ayuda">
      <Row className="row">
        <img className="help" src={help} />
        <Col sm={12} className="">
          <h3>Ayudanos a mejorar</h3>
        </Col>
      </Row>
      <Row className="row">
        <Col sm={12} className="">
          <div className="platillosdashboard">
            <p>
              Colaboremos para traer una mejor experiencia para tu restaurante y
              comensales
            </p>
          </div>
        </Col>
      </Row>
      <Row className="row">
     
        <Col sm={12} className="">
        
          <div className="">
            <button className="btn btn-warning">CONTÁCTANOS</button>
           
          </div>
          
        </Col>
      </Row>
    </Container>
  );
}

export default Ayuda;
