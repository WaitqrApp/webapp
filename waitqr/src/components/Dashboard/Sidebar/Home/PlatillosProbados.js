import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import platillos from '../../img/total-platillos.png';

function PlatillosProbados() {
  return (

    <Container className="text-center dashboard-componente" >
      <Row>
        <Col sm={12} >
          <h1>Total de platillos probados</h1>
        </Col>
      </Row>

      <Row>
        <Col sm={12} >
        <img className="platillos-probados" src={platillos} />
        </Col>
      </Row>
    </Container>

  );
}

export default PlatillosProbados;