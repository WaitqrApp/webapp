import React, { Fragment } from 'react';
import { Container, Row, Col, Form, Button, Modal, Card } from "react-bootstrap";
import '../Tables/styles/tables.css';

function TableCard() {
  return (
    <Fragment>
    <Card className="mt-1" style={{ width: '18rem', height: "11rem", justifyContent: 'center' }}>
                        <Card.Body>
                            <Card.Title className="text-center font-weight-bold">
                                Mesa 1
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Comienzo: 23-06-2020 12:30
                            </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">
                                Sesiones: 2                     
                            </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">                    
                                Total: $278
                            </Card.Subtitle>
                            <Button variant="primary" block>Cerrar Mesa</Button>
                        </Card.Body>
                    </Card>
    </Fragment>
  );
}

export default TableCard;