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
import ordenContext from '../../../../context/ordenes/ordenContext';

function OrderCard(orden) {
  //obtener la funcion del context de platillo
  const platillosOrdenadosContext = useContext(platilloOrdenadoContext);
  const {
    platilloOrdenadoOrden,
    obtenerPlatilloOrdenado,
    actualizarPlatilloOrdenado,
  } = platillosOrdenadosContext;



  const ordenesContext = useContext(ordenContext);
  const { actualizarOrden } =
    ordenesContext;

  const [botontomado, guardarBotonTomado] = useState(true);

  useEffect(() => {
    obtenerPlatilloOrdenado(orden.orden._id);
  }, [orden]);

  var pagar;
  if (orden.orden.pagar == true) {
    pagar = "pagar";
  } else {
    pagar = "";
  }
  console.log(botontomado);

  var platilloOrdenadoAux;

var [totalstate, guardarTotalState] = useState(0)

  var total = 0;


  const cambiarTotal = e => {
    orden.orden.total = totalstate
    console.log("este es el total que llego", orden.orden.total)
    console.log("esta es la orden que tengo", JSON.stringify(orden.orden))

    actualizarOrden(orden.orden)
  }





  const tomado = (e) => {
    platilloOrdenadoOrden
      .filter(({ orden: ordenOpt }) => ordenOpt === orden.orden._id)
      .map((platilloOrdenado, index) => {
        if (platilloOrdenado.tomado == false) {
          platilloOrdenado.tomado = true;
          actualizarPlatilloOrdenado(platilloOrdenado);

        }
      });
      cambiarTotal();
    // setTimeout(() => {
    //   cambiarTotal();
    // }, 2000)


  };



  platilloOrdenadoOrden
    .filter(({ orden: ordenOpt }) => ordenOpt === orden.orden._id)
    .filter((platilloOrdenado) => platilloOrdenado.tomado == true)
    .map((platillo) => (
      totalstate = platillo.precio * platillo.cantidad + totalstate
    ));

  // console.log({ platilloOrdenadoOrden, ordenId: orden.orden._id });
  return (
    <Container className="tarjeta-orden">
      <Card
        className={`tarjeta-orden ${pagar}`}
        style={{ justifyContent: "center" }}
      >
        <Card.Body className="">
          <Card.Title className="text-center font-weight-bold">
            Orden
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {orden.orden.mesaNombre}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted font-weight-bold">
            {orden.orden.registro.toString().substring(11, 16)} -{" "}
            {orden.orden.registro.toString().substring(0, 10)}
          </Card.Subtitle>
          <Card.Title className="mb-2">Total a pagar: ${totalstate}</Card.Title>
          <Card.Body className="platillos">
            <Card.Subtitle className="mt-2 mb-2 font-weight-bold">
              Platillos por Tomar
            </Card.Subtitle>
            {platilloOrdenadoOrden
              .filter(({ orden: ordenOpt }) => ordenOpt === orden.orden._id)
              .filter((platilloOrdenado) => platilloOrdenado.tomado == false)
              .map((platilloOrdenado, index) =>
                platilloOrdenado.ordenado == true ? (
                  index == platilloOrdenadoOrden.length ? (
                    <ul id="nuevoPlatilloOrdenado">
                      <h4>
                        {platilloOrdenado.nombre} X {platilloOrdenado.cantidad}
                      </h4>
                      <p>{platilloOrdenado.comentario}</p>
                    </ul>
                  ) : (
                    <ul>
                      <h4>
                        {platilloOrdenado.nombre} X {platilloOrdenado.cantidad}
                      </h4>
                      <p>{platilloOrdenado.comentario}</p>
                    </ul>
                  )
                ) : (
                  <span></span>
                )
              )}
            <hr></hr>
            <Card.Subtitle className="mt-3 mb-2 font-weight-bold">
              Platillos Tomados
            </Card.Subtitle>
            {platilloOrdenadoOrden
              .filter(({ orden: ordenOpt }) => ordenOpt === orden.orden._id)
              .filter((platilloOrdenado) => platilloOrdenado.tomado == true)
              .map((platilloOrdenado, index) =>
                platilloOrdenado.ordenado == true ? (
                  index == platilloOrdenadoOrden.length ? (
                    <ul id="nuevoPlatilloOrdenado">
                      <h5>
                        {platilloOrdenado.nombre} X {platilloOrdenado.cantidad}
                      </h5>
                      <p1>{platilloOrdenado.comentario}</p1>
                    </ul>
                  ) : (
                    <ul>
                      <h5>
                        {platilloOrdenado.nombre} X {platilloOrdenado.cantidad}
                      </h5>
                      <p1>{platilloOrdenado.comentario}</p1>
                    </ul>
                  )
                ) : (
                  <span></span>
                )
              )}
          </Card.Body>
          {botontomado ? (
            <Button
              className="boton-orden-tomado"
              variant="primary"
              onClick={tomado}
            >
              Tomado
            </Button>
          ) : (
            <span></span>
          )}

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
    </Container>
  );
}

export default OrderCard;
