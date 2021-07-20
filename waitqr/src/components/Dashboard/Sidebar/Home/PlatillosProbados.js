import React, { useContext} from "react";
import { Row, Container, Col } from "react-bootstrap";
import platillos from "../../img/total-platillos.png";
import "./platillochart.js";
import PlatilloChart from "./platillochart";
import './styles/home.css'
import PlatilloOrdenadoContext from "../../../../context/platillosOrdenados/platilloOrdenadoContext.js";
import authContext from "../../../../context/autenticacion/authContext";



function PlatillosProbados(ordenrestaurante) {


  // recibimos las ordenes del restaurante desde el Home
  //convertimos ordenrestaurante en legible para manipularlo usado aux como variable
  var aux = JSON.parse(JSON.stringify(ordenrestaurante));

  console.log("estamos bien eh" + aux)

  var platillos;
  
  const PlatillosOrdenadosContext = useContext(PlatilloOrdenadoContext);
  const { platillosordenados, obtenerPlatillosOrdenados } =
  PlatillosOrdenadosContext;

  if (aux.ordenrestaurante) {
    console.log("existe la vida" + platillos)
    aux.ordenrestaurante.map(orden => (
      console.log(orden._id),
      obtenerPlatillosOrdenados(orden._id),
      platillos.push(platillosordenados)
      ))
  
    
  }

  console.log("HOLA HOLA ES EL LOG" + JSON.stringify(platillos))

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
