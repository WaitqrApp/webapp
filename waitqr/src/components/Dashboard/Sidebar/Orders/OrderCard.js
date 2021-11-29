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
import mesasContext from "../../../../context/mesas/mesasContext";

function OrderCard(orden) {
  //obtener la funcion del context de platillo
  const platillosOrdenadosContext = useContext(platilloOrdenadoContext);
  const { platilloOrdenadoOrden, obtenerPlatilloOrdenado } =
    platillosOrdenadosContext;

  useEffect(() => {
    obtenerPlatilloOrdenado(orden.orden._id);
  }, [orden]);

  var pagar;
  if(orden.orden.pagar == true){
    pagar = "pagar"
    console.log("pagar")
  }
  else{
    pagar = ""
    console.log(" no pagar")
  }

 // console.log({ platilloOrdenadoOrden, ordenId: orden.orden._id });
  return (
    <Card className={`tarjeta-orden ${pagar}` } style={{ justifyContent: "center" }}>
      <Card.Body className="">
        <Card.Title className="text-center font-weight-bold">Orden</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{orden.orden.mesaNombre}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted font-weight-bold">
          {orden.orden.registro.substring(11, 16)} -{" "}
          {orden.orden.registro.substring(0, 10)}
        </Card.Subtitle>
        <Card.Body className="platillos">
          {platilloOrdenadoOrden
            .filter(({ orden: ordenOpt }) => ordenOpt === orden.orden._id)
            .map((platilloOrdenado, index) =>
            
              platilloOrdenado.ordenado == true ? (
                index == platilloOrdenadoOrden.length?(
                  <ul id="nuevoPlatilloOrdenado">
                  <h5>
                    {platilloOrdenado.nombre} X {platilloOrdenado.cantidad}
                  </h5>
                  <p>{platilloOrdenado.comentario}</p>
                </ul>
                ):
                <ul >
                  <h5>
                    {platilloOrdenado.nombre} X {platilloOrdenado.cantidad}
                  </h5>
                  <p>{platilloOrdenado.comentario}</p>
                </ul>
              ) : (
                <span></span>
              )
            )}
        </Card.Body>
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
  );
}

export default OrderCard;
