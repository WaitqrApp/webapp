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

function OrderCard(props) {
  const {orden, actualizarOrden} = props
  //obtener la funcion del context de platillo
  const platillosOrdenadossContext = useContext(platillosOrdenadosContext);
  const { platilloOrdenadoOrden, obtenerPlatilloOrdenado } =
    platillosOrdenadossContext;

  const [finalizado, setFinalizado] = useState(false)

  useEffect(() => {
    console.log("este es el id de la orden" + orden._id);
    obtenerPlatilloOrdenado(orden._id);
  }, [orden]);

<<<<<<< HEAD
  console.log(JSON.stringify(platilloOrdenadoOrden))
    return (
        <Fragment>
            <Card className="tarjeta-orden mt-1" style={{ width: '18rem', height: "22rem", justifyContent: 'center' }}>
                <Card.Body>
                    <Card.Title className="text-center font-weight-bold">
                        Orden 
                            </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Terraza
                            </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                        {orden.orden.registro.substring(0,10)}
                        
                            </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">
                            {orden.orden.registro.substring(11,16)}
                            </Card.Subtitle>
                    {platilloOrdenadoOrden.map(platilloOrdenado => (
                        <ul>
                            <li>
                                <p>{platilloOrdenado.nombre}</p>
                            </li>
                        </ul>
                    ))}
                   
                    <Button className="boton-orden-aceptar" variant="primary">Aceptar</Button>
                    <Button className="boton-orden-rechazar" variant="light">Rechazar</Button>
                </Card.Body>
            </Card>
        </Fragment>

    );
=======
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
            {orden.registro.substring(0, 10)}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            {orden.registro.substring(11, 16)}
          </Card.Subtitle>
          {platilloOrdenadoOrden.map((platilloOrdenado) => (
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label={platilloOrdenado.nombre} />
            </Form.Group>
          ))}
            <Button className="boton-orden-finalizar" variant="primary" onClick={() => {actualizarOrden({...orden, finalizado: !orden.finalizado})}}>
              {!orden.finalizado ? "Finalizar" : "Undo"}
            </Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
>>>>>>> e53497304dc9e03c0cedd23f5a05c0e50e499f5b
}

export default OrderCard;