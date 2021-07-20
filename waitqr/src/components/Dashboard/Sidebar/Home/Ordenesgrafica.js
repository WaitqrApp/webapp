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

  console.log("dentro de ordenes grafica" + aux)

  const days = [];

  if(aux.ordenrestaurante[0]){
    //esta es la forma en la que podemos acceder a cualquier propiedad de nuestro objeto
    //solo es necesario cambiar "registro" por cualquier otra propiedad necesaria.
    Object.keys(aux.ordenrestaurante).forEach(key => {
      days.push(aux.ordenrestaurante[key].registro.substring(0,10))
    })
  }
  
  
  
  return (
    <Container className="text-center p-0 dashboard-componente">
      <Row className="mt-2">
        <Col sm={8} className="ml-2 mb-2">
          <h1>Órdenes</h1>
        </Col>
      </Row>
      
      <Row>
        <Col sm={12} className="platillosdashboard">
          {/* <img className="ordenes" src={ordenes} /> */}
          <VerticalBar days = {days}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Ordenesgrafica;