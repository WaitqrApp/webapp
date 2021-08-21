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

import platilloOrdenadoContext from "../../../../context/platillosOrdenados/platilloOrdenadoContext";

function OrderCard(orden) {
  //obtener la funcion del context de platillo
  const platillosOrdenadosContext = useContext(platilloOrdenadoContext);
  const { platilloOrdenadoOrden, obtenerPlatilloOrdenado } =
    platillosOrdenadosContext;

  useEffect(() => {
    obtenerPlatilloOrdenado(orden.orden._id);
  }, [orden]);

  console.log({ platilloOrdenadoOrden, ordenId: orden.orden._id });
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
          <ul>
            {platilloOrdenadoOrden
              .filter(({ orden: ordenOpt }) => ordenOpt === orden.orden._id)
              .map((platilloOrdenado) => (
                <li>
                  <p>{platilloOrdenado.nombre}</p>
                </li>
              ))}
          </ul>
          <Button
            className="boton-orden-aceptar"
            variant="primary"
            onClick={() =>
              orden.actualizarOrden({ ...orden.orden, finalizado: true })
            }
          >
            Finalizar
          </Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default OrderCard;
