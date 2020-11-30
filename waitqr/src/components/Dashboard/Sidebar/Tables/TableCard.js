import React, { Fragment } from 'react';
import { Container, Row, Col, Form, Button, Modal, Card } from "react-bootstrap";
import '../Tables/styles/tables.css';

function TableCard() {
  return (
    <Fragment>
    <Card className="mt-1" style={{ width: '18rem', height: "18rem", justifyContent: 'center' }}>
                        <Card.Body>
                            <Card.Title className="text-center font-weight-bold">
                                Mesa 1
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Terraza
                            </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">
                                12:30 23-06-2020
                            </Card.Subtitle>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Picaña Haye" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Cerveza" />
                            </Form.Group>
                            <Button variant="primary" block>Cerrar Mesa</Button>
                        </Card.Body>
                    </Card>
    </Fragment>
  );
}

export default TableCard;