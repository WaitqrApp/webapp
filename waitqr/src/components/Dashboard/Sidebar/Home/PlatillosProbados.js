import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import platillos from "../../img/total-platillos.png";
import "./platillochart.js";
import PlatilloChart from "./platillochart";
import './styles/home.css'

function PlatillosProbados(platillosordenados) {
  // recibimos las ordenes del restaurante desde el Home
  //convertimos ordenrestaurante en legible para manipularlo usado aux como variable
  var aux = JSON.parse(JSON.stringify(platillosordenados));

  const platillos = [];

  if (aux.platillosordenados) {
    //esta es la forma en la que podemos acceder a cualquier propiedad de nuestro objeto
    //solo es necesario cambiar "registro" por cualquier otra propiedad necesaria.
    console.log("estoy dentro" + aux.platillosordenados[0].registro);

    Object.keys(aux.platillosordenados).forEach((key) => {
      platillos.push(aux.platillosordenados[key].registro.substring(0, 10));
    });
  }

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
