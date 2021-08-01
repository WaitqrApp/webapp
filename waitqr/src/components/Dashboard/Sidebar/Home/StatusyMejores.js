import React, { Fragment } from 'react';
import { Row, Container, Col } from 'react-bootstrap';


function StatusyMejores({mesasrestaurante, ordenrestaurante}) {
  console.log("dentro status" + JSON.stringify(ordenrestaurante))
  return (

    <Fragment>
      <Container className=" text-center dashboard-componente-status">
        <Row >
          <Col sm={4} id="restaurante-ahora" >
            <h1>Mesas</h1>
            <p> 50</p>
          </Col>
          <Col sm={4} id="restaurante-ahora" >
            <h1>Capacidad</h1>
            <p>96%</p>
          </Col>
          <Col sm={4} id="restaurante-ahora">
            <h1>Estatus</h1>
            <p>Abierto</p>
          </Col>
        </Row>
      </Container>
    </Fragment>

  );
}

export default StatusyMejores;