import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import platillos from '../../img/total-platillos.png';
import "./platillochart.js"

function PlatillosProbados() {
  return (
    <>
    <Container className="text-center dashboard-componente" >
      <Row>
        <Col sm={12} >
          <h1>Total de platillos probados</h1>
        </Col>
      </Row>

      <Row>
        <Col sm={12} >
          
        </Col>
      </Row>
    </Container>
    <div id="chart"></div>
    <script src="./platillochart.js>"></script>
    </>

  );
}

export default PlatillosProbados;