import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ordenes from '../../img/ordenes.png';
import { Row, Container, Col } from 'react-bootstrap';
import './styles/home.css';
import VerticalBar from './VerticalBar';


function OrdenesPorHora() {
  return (
    <Container className="">
      <Row>
        <Col sm={12} className="platillosdashboard">
          {/* <img className="ordenes" src={ordenes} /> */}
          <VerticalBar/>
        </Col>
      </Row>
    </Container>
  );
}

export default OrdenesPorHora;