import React, { useContext, useEffect, useState } from "react";

import { Dropdown, DropdownButton, Col, Row, Container } from "react-bootstrap";

import PlatillosProbados from "./Sidebar/Home/PlatillosProbados";
import Ordenesgrafica from "./Sidebar/Home/Ordenesgrafica";
import OrdenesPorHora from "./Sidebar/Home/OrdenesPorHora";
import StatusyMejores from "./Sidebar/Home/StatusyMejores";
import Visitas from "./Sidebar/Home/Visitas";
import Ayuda from "./Sidebar/Home/Ayuda";
import "./Sidebar/Home/styles/home.css";

import restauranteContext from "../../context/restaurantes/restauranteContext";
import ordenContext from "../../context/ordenes/ordenContext";
import mesasContext from "../../context/mesas/mesasContext";
import PlatilloOrdenadoContext from "../../context/platillosOrdenados/platilloOrdenadoContext.js";

import AuthContext from "../../context/autenticacion/authContext";
import MenuDisponibleDesplegable from "./Sidebar/Home/MenuDisponibleDesplegable";

function Home() {
  const [restauranteEscogido, guardarRestauranteEscogido] = useState("");
  const [restauranteEscogidoId, guardarRestauranteEscogidoId] = useState("");
  //Extraer restaurantes de state inicial
  const restaurantesContext = useContext(restauranteContext);
  const { mensaje, restaurantes, obtenerRestaurantes, restauranteActual } =
    restaurantesContext;

  const ordenesContext = useContext(ordenContext);
  const { ordenrestaurante, obtenerOrdenRestaurante } = ordenesContext;

  const PlatillosOrdenadosContext = useContext(PlatilloOrdenadoContext);
  const { platillosordenados, obtenerPlatillosOrdenados } =
    PlatillosOrdenadosContext;

  const mesassContext = useContext(mesasContext);
  const {
    mesasrestaurante,
    eliminarMesa,
    obtenerMesas,
    actualizarMesa,
    guardarMesaActual,
  } = mesassContext;

  //Extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();

    obtenerRestaurantes();
  }, []);

  const seleccionarRestaurante = (restaurante) => {
    restauranteActual(restaurante._id); //fijar un restaurante actual
    guardarRestauranteEscogido(restaurante.nombre);
    guardarRestauranteEscogidoId(restaurante._id);
    console.log(restaurante._id);
    obtenerOrdenRestaurante(restaurante._id);
    obtenerMesas(restaurante._id);
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={8}>{usuario ? <h1>Hola, {usuario.nombre}</h1> : null}</Col>
        <Col sm={4}>
          <MenuDisponibleDesplegable className="btn-primary" />
        </Col>
        {/*<Col sm={2} className="dropdown-menu-activo restaurant-button btn-group btn-block">
           comment here <DropdownButton
            className="dropdown-restaurante restaurant-button btn-group btn-block"
            title={
              restauranteEscogido == "" ? (
                <span>Restaurante</span>
              ) : (
                <span>{restauranteEscogido}</span>
              )
            }
          >
            {restaurantes.map((restaurante) => (
              <Dropdown.Item
                onClick={() => seleccionarRestaurante(restaurante)}
              >
                {restaurante.nombre}
              </Dropdown.Item>
            ))}
          </DropdownButton> 
        </Col>*/}
      </Row>
      <Row className="row mt-4">
        <Col sm={4} className="platillos-probados">
          <PlatillosProbados ordenrestaurante={ordenrestaurante} />
        </Col>
        <Col sm={4} className="ordenes-grafica">
          <Ordenesgrafica ordenrestaurante={ordenrestaurante} />
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
        </Col>
        <Col sm={4} className="ordenes-grafica">
          <OrdenesPorHora />
        </Col>
      </Row>
      {/* <Row>
        <Col sm={5} className="status">
          <StatusyMejores />
        </Col>
      </Row>
      <Col sm={8}>
          <Visitas />
        </Col>
        <Col sm={4}>
          <Ayuda />
        </Col>*/}
    </Container>
  );
}

export default Home;
