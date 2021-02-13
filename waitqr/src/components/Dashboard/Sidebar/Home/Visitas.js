import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';


function Visitas() {
  return (

    <Container className="dashboard-componente mt-4 mb-4">
      <Row className="mt-2" >
        <Col sm={6}>
          <h1>Visitas mensuales</h1>
        </Col>
        <Col sm={6} className="text-right" >
          <span className="material-icons">
            filter_alt
          </span>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm={12} >
          <table className="table">
            <thead className="text-center">
              <tr>
                <th scope="col">Dia</th>
                <th scope="col">Platillos</th>
                <th scope="col">Ingreso</th>
                <th scope="col">Restaurante</th>
                <th scope="col">Órdenes por hora</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>08-09-2020</td>
                <td>1600</td>
                <td>34,220</td>
                <td>La Noria</td>
                <td>10/hr</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>

  );
}

export default Visitas;