import React, { useContext, useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import { Dropdown, DropdownButton, Col, Row, Container } from "react-bootstrap";
import "./styles/orders.css";

import restauranteContext from "../../../../context/restaurantes/restauranteContext";
import ordenContext from "../../../../context/ordenes/ordenContext";

import AlertaContext from "../../../../context/alertas/alertaContext";

function Orders() {
  const [restauranteEscogido, guardarRestauranteEscogido] = useState();
  const [restauranteEscogidoId, guardarRestauranteEscogidoId] = useState("");
  //Extraer restaurantes de state inicial
  const restaurantesContext = useContext(restauranteContext);
  const {
    restaurante,
    mensaje,
    restaurantes,
    obtenerRestaurantes,
    restauranteActual,
  } = restaurantesContext;

  const ordenesContext = useContext(ordenContext);
  const { ordenrestaurante, obtenerOrdenRestaurante, actualizarOrden } =
    ordenesContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;
  const {bandera, guardarBandera}=  useState(0);

  //obtener restaurantes cuando carga el componente
  useEffect(() => {
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }

    obtenerRestaurantes();
    if(bandera == 0){
        obtenerOrdenRestaurante(restaurante[0]._id);
        guardarBandera(1)
      
    }
    setTimeout(ifObtenerOrdenes, 15000);

    

    guardarRestauranteEscogido(localStorage.getItem("restaurantewebapp"));
  }, [ordenrestaurante]); //para que corra solo una vez

  const ifObtenerOrdenes = (e) => {
    if (restaurante) {
      obtenerOrdenRestaurante(restaurante[0]._id);
    }
  };

  const seleccionarRestaurante = (restaurante) => {
    restauranteActual(restaurante._id); //fijar un restaurante actual
    guardarRestauranteEscogido(restaurante.nombre);
    guardarRestauranteEscogidoId(restaurante._id);
    //console.log(restaurante._id);
    obtenerOrdenRestaurante(restaurante._id);
    localStorage.setItem("restaurantewebapp", restaurante);
  };
  return (
    <Container fluid className="">
      <Row>
        <Col sm={10}></Col>
        <Col sm={2} className="dropdown-restaurante">
          <DropdownButton
            className="dropdown-menus"
            size="m"
            title={
              !restaurante ? (
                <span>Restaurante</span>
              ) : (
                <span>{restaurante[0].nombre}</span>
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
        </Col>
      </Row>
      <Row className="container-tarjeta-orden">
        {ordenrestaurante
          .filter(
            (orden) => !orden.finalizado,
            (orden) => (orden.restaurante = restaurante._id)
          )
          .map((orden) => (
            <Col className="col-tarjeta-orden p-0">
              <OrderCard
                className=""
                actualizarOrden={actualizarOrden}
                orden={orden}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Orders;
