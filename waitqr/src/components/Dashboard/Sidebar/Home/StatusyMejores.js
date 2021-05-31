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
            <h1>Status</h1>
            <p>Abierto</p>
          </Col>
        </Row>
      </Container>

      <Container className=" text-center dashboard-componente-mejores">
        <Row>
          <Col sm={12} className="text-left" >
            <h1>Mejores dias</h1>
          </Col>
        </Row>

        <Row className="row">
          <Col sm={6}>
            <h2>08-09-2020</h2>
            <p> 320 ordenes entregadas</p>
          </Col>
          <Col sm={6}>
            <h2>64,000 MXN</h2>
          </Col>
        </Row>

        <Row className="row">
          <Col sm={6}>
            <h2>08-09-2020</h2>
            <p> 320 ordenes entregadas</p>
          </Col>
          <Col sm={6}>
            <h2>64,000 MXN</h2>
          </Col>
        </Row>

        <Row className="row">
          <Col sm={6}>
            <h2>08-09-2020</h2>
            <p> 320 ordenes entregadas</p>
          </Col>
          <Col sm={6}>
            <h2>64,000 MXN</h2>
          </Col>
        </Row>
        
      </Container>
    </Fragment>

  );
}

export default StatusyMejores;