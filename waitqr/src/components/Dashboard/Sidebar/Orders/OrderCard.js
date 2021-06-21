import PropTypes from "prop-types";
import React, { Fragment, useEffect, useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
  Card,
} from "react-bootstrap";
import "./styles/orders.css";

import platillosOrdenadosContext from "../../../../context/platillosOrdenados/platilloOrdenadoContext";
import { propTypes } from "react-bootstrap/esm/Image";

/* Copiado de models/Ordern */
const ORDEN_ESPERANDO = 1;
const ORDEN_RECHAZADO = 2;
const ORDEN_EMPEZADO = 3;
const ORDEN_FINALIZADO = 4;

function OrderCard(orden) {
  //obtener la funcion del context de platillo
  const platillosOrdenadossContext = useContext(platillosOrdenadosContext);
  const { platilloOrdenadoOrden, obtenerPlatilloOrdenado } =
    platillosOrdenadossContext;

  useEffect(() => {
    console.log("este es el id de la orden" + orden.orden._id);
    obtenerPlatilloOrdenado(orden.orden._id);
  }, [orden]);

  console.log(JSON.stringify(platilloOrdenadoOrden));
  return (
    <Fragment>
      <Card
        className="tarjeta-orden mt-1"
        style={{ width: "18rem", height: "22rem", justifyContent: "center" }}
      >
        <Card.Body>
          <Card.Title className="text-center font-weight-bold">
            Orden
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Terraza</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            {orden.orden.registro.substring(0, 10)}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            {orden.orden.registro.substring(11, 16)}
          </Card.Subtitle>
          {platilloOrdenadoOrden.map((platilloOrdenado) => (
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label={platilloOrdenado.nombre} />
            </Form.Group>
          ))}
          <OrderCardActions order={orden} />
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default OrderCard;

const OrderCardActions = ({ orden }) => {
  let orderActions;
  switch (orden.status) {
    case ORDEN_ESPERANDO:
      orderActions = (
        <>
          <Button className="boton-orden-aceptar" variant="primary">
            Aceptar
          </Button>
          <Button className="boton-orden-rechazar" variant="light">
            Rechazar
          </Button>
        </>
      );
    case ORDEN_EMPEZADO:
      orderActions = (
        <>
          <Button className="boton-orden-finalizat" variant="primary">
            Finalizar
          </Button>
        </>
      );
  }
  return orderActions;
};

OrderCardActions.propTypes = {
  order: PropTypes.object.isRequired,
};
