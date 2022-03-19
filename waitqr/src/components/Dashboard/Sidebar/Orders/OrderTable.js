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
import ordenContext from "../../../../context/ordenes/ordenContext";

export default function OrderTable(orden, index) {
  //obtener la funcion del context de platillo
  const platillosOrdenadosContext = useContext(platilloOrdenadoContext);
  const {
    platilloOrdenadoOrden,
    obtenerPlatilloOrdenado,
    actualizarPlatilloOrdenado,
  } = platillosOrdenadosContext;

  const ordenesContext = useContext(ordenContext);
  const { actualizarOrden } = ordenesContext;

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

  var [totalstate, guardarTotalState] = useState(0);

  var total = 0;

  const cambiarTotal = (e) => {
    orden.orden.total = totalstate;
    console.log("este es el total que llego", orden.orden.total);
    console.log("esta es la orden que tengo", JSON.stringify(orden.orden));

    actualizarOrden(orden.orden);
  };

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
    .map(
      (platillo) =>
        (totalstate = platillo.precio * platillo.cantidad + totalstate)
    );

  // console.log({ platilloOrdenadoOrden, ordenId: orden.orden._id });
  return (
    <Fragment>
      <tr
        data-toggle="collapse"
        data-target={`.multi-collapse${orden.orden._id}`}
        aria-controls={`multiCollapseExample1${orden.orden._id}`}
      >
        <td>{orden.orden._id}</td>
        <td>{orden.orden.mesaNombre}</td>
        <td>
          {orden.orden.registro.toString().substring(11, 16)} -{" "}
          {orden.orden.registro.toString().substring(0, 10)}
        </td>
        <td></td>
        <td></td>
      </tr>
      <tr class={`collapse multi-collapse${orden.orden._id}`} id={`multiCollapseExample${orden.orden._id}`}>
          <td>
              Platillos por tomar
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
                  ""
                )
              )}
            </td>

<td>
    Platillos Tomados
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
                    ""
                )
              )} 

              </td>  
        <td>Total a pagar:  ${totalstate}</td>
        <td>{botontomado ? (
            <Button
              className="boton-orden-tomado"
              variant="primary"
              onClick={tomado}
            >
              Tomado
            </Button>
          ) : (
            <span></span>
          )}</td>
        <td><Button
            className="boton-orden-aceptar"
            variant="primary"
            onClick={() =>
              orden.actualizarOrden({ ...orden.orden, finalizado: true })
            }
          >
            Finalizar
          </Button></td>
      </tr>
      </Fragment>
  );
}
