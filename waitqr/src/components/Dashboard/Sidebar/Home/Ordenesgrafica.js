import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ordenes from '../../img/ordenes.png';
import { Row, Container, Col } from 'react-bootstrap';
import './styles/home.css';
import VerticalBar from './VerticalBar';


function Ordenesgrafica(ordenrestaurante) {
  // recibimos las ordenes del restaurante desde el Home
  //convertimos ordenrestaurante en legible para manipularlo usado aux como variable
  var aux= JSON.parse(JSON.stringify(ordenrestaurante))

if( aux.ordenrestaurante[0]){
  //esta es la forma en la que podemos acceder a cualquier propiedad de nuestro objeto
  //solo es necesario cambiar "registro" por cualquier otra propiedad necesaria.
  console.log("estoy dentro"+ aux.ordenrestaurante[0].registro)

  var dates = aux.ordenrestaurante[0].registro
}
  
  
  return (
    <Container className="container-fluid text-center p-0 dashboard-componente">
      <Row className="mt-2">
        <Col sm={8} className="ml-2 mb-2">
          <h1>Órdenes</h1>
        </Col>
        <Col sm={3} id="month-button">
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
          {/* <img className="ordenes" src={ordenes} /> */}
          <VerticalBar dates = {dates}/>
        </Col>
      </Row>
    </Container>

  );
}

export default Ordenesgrafica;