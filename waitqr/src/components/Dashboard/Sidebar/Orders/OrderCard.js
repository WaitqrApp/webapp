import React, { Fragment, useEffect, useContext, useState } from 'react';
import { Container, Row, Col, Form, Button, Modal, Card } from "react-bootstrap";
import './styles/orders.css';

import platillosOrdenadosContext from '../../../../context/platillosOrdenados/platilloOrdenadoContext';


function OrderCard(orden) {

    //obtener la funcion del context de platillo
  const platillosOrdenadossContext = useContext(platillosOrdenadosContext);
  const { platilloOrdenadoOrden,  obtenerPlatilloOrdenado } = platillosOrdenadossContext;

  useEffect(() => {
      console.log("este es el id de la orden" + orden.orden._id)
    obtenerPlatilloOrdenado(orden.orden._id)
  }, [orden]);

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
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label={platilloOrdenado.nombre} />
                    </Form.Group>
                    ))}
                   
                    <Button className="boton-orden-aceptar" variant="primary">Aceptar</Button>
                    <Button className="boton-orden-rechazar" variant="light">Rechazar</Button>
                </Card.Body>
            </Card>
        </Fragment>

    );
}

export default OrderCard;