import React, { Fragment } from 'react';
import { Container, Row, Col, Form, Button, Modal, Card } from "react-bootstrap";
import './styles/orders.css';

function OrderCard(orden) {
    return (
        <Fragment>
            <Card className="tarjeta-orden mt-1" style={{ width: '18rem', height: "22rem", justifyContent: 'center' }}>
                <Card.Body>
                    <Card.Title className="text-center font-weight-bold">
                        Orden 1
                            </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Terraza
                            </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                        12:30 23-06-2020
                            </Card.Subtitle>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Picaña Haye x1" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Cerveza x2" />
                    </Form.Group>
                    <Button className="boton-orden-aceptar" variant="primary">Aceptar</Button>
                    <Button className="boton-orden-rechazar" variant="light">Rechazar</Button>
                </Card.Body>
            </Card>
        </Fragment>

    );
}

export default OrderCard;