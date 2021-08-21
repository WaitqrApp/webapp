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
      <Container className="">
        <Row>
          <Col className="" sm={12}>
            <PlatilloChart platillos={platillos} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PlatillosProbados;
