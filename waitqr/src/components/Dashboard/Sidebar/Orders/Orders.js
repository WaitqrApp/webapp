import React, { Fragment, useContext, useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import { Dropdown, DropdownButton, Col, Row, Container, Table} from "react-bootstrap";
import "./styles/orders.css";
import "bootstrap/js/src/collapse.js";

import restauranteContext from "../../../../context/restaurantes/restauranteContext";
import ordenContext from "../../../../context/ordenes/ordenContext";

import AlertaContext from "../../../../context/alertas/alertaContext";
import OrderTable from "./OrderTable";

function Orders() {
  const [restauranteEscogido, guardarRestauranteEscogido] = useState();
  const [restauranteEscogidoId, guardarRestauranteEscogidoId] = useState("");
  //Extraer restaurantes de state inicial
  const restaurantesContext = useContext(restauranteContext);
  const {
    restauranteactual,
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
        obtenerOrdenRestaurante(restauranteactual._id);
        guardarBandera(1)
      
    }
    setTimeout(ifObtenerOrdenes, 1500000);

    

    guardarRestauranteEscogido(localStorage.getItem("restaurantewebapp"));
  }, [ordenrestaurante]); //para que corra solo una vez

  const ifObtenerOrdenes = (e) => {
    console.log("el restaurante actual fue:", JSON.stringify(restauranteactual))
    console.log("entre a la funcion ifobtener")
    if (restauranteactual) {
      obtenerOrdenRestaurante(restauranteactual._id);
    }
  };

  const seleccionarRestaurante = (restaurante) => {
    restauranteActual(restaurante); //fijar un restaurante actual
    guardarRestauranteEscogido(restaurante.nombre);
    guardarRestauranteEscogidoId(restaurante._id);
    //console.log(restaurante._id);
    obtenerOrdenRestaurante(restaurante._id);
    localStorage.setItem("restaurantewebapp", restaurante);
  };
  return (

    
    <Container fluid className="">
      <Row><Table striped bordered hover className="text-center">
                    <thead>
                        <tr>
                            <th># Orden</th>
                            <th>Mesa</th>
                            <th>Fecha</th>
                            <th>Tomado</th>
                            <th>Finalizar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {ordenrestaurante
          .filter(
            (orden) => !orden.finalizado,
            (orden) => (orden.restaurante = restauranteactual._id)
          )
          .map((orden) => (
              <OrderTable
                className=""
                actualizarOrden={actualizarOrden}
                orden={orden}
              />
          ))}
          </tbody>
                </Table>
        <Col sm={10}></Col>
        <Col sm={2} className="dropdown-restaurante">
          <DropdownButton
            className="dropdown-menus"
            size="m"
            title={
              !restauranteactual ? (
                <span>Restaurante</span>
              ) : (
                <span>{restauranteactual.nombre}</span>
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
            (orden) => (orden.restaurante = restauranteactual._id)
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
