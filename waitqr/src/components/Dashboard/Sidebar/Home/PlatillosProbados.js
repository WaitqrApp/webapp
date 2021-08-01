import React, { useContext} from "react";
import { Row, Container, Col } from "react-bootstrap";
import platillos from "../../img/total-platillos.png";
import "./platillochart.js";
import PlatilloChart from "./platillochart";
import './styles/home.css'
import PlatilloOrdenadoContext from "../../../../context/platillosOrdenados/platilloOrdenadoContext.js";
import authContext from "../../../../context/autenticacion/authContext";



function PlatillosProbados(ordenrestaurante) {

  return (
    <>
      <Container className="container-fluid text-center p-0 dashboard-componente">
        <Row className="mt-2">
          <Col sm={12}>
            <h1>Total de platillos probados</h1>
          </Col>
        </Row>

        <Row>
          <Col className="platillo-chart" sm={12}>
            <PlatilloChart platillos={platillos} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PlatillosProbados;
