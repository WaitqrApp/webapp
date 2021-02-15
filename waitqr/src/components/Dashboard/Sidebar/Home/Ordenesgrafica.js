import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ordenes from '../../img/ordenes.png';
import { Row, Container, Col } from 'react-bootstrap';
import './styles/home.css'

function Ordenesgrafica() {
  return (
    <Container className="container-fluid text-center p-0 dashboard-componente">
      <Row className="mt-2">
        <Col sm={8} className="ml-2">
          <h1>Órdenes</h1>
        </Col>
        <Col sm={3} id="month-button">
          <DropdownButton id="dropdown-item-button" title="Mes">
            <Dropdown.ItemText>Noviembre</Dropdown.ItemText>
            <Dropdown.Item>Enero</Dropdown.Item>
            <Dropdown.Item>Febrero</Dropdown.Item>
            <Dropdown.Item>Marzo</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row>
        <Col sm={4} className="ml-2">
          <h2>En curso</h2>
        </Col>
        <Col sm={4}>
          <p>13 ordenes</p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="platillosdashboard">
          <img className="ordenes" src={ordenes} />
        </Col>
      </Row>
    </Container>

  );
}

export default Ordenesgrafica;