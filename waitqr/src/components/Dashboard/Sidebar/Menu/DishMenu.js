import React, { useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import Picaña from './img/picaña.jpg';
import DishModal from './DishModal';
import './Styles/Styles.css';
import AddDish from './AddDish';

function DishMenu() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Card className="mt-4" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={Picaña} />
                <Card.Body>
                    <Card.Title className="font-weight-bold">
                        <Row>
                            <Col>
                                Picaña Loca
                            </Col>
                            <Col>
                                <Col>
                                    <Form.Check
                                        className="boton-disponible"
                                        type="switch"
                                        id="disponible-switch"
                                    />
                                </Col>
                            </Col>
                        </Row>

                    </Card.Title>
                    <Card.Text>
                        Carne de vacuno al estilo Brazileiro Irmao
                    </Card.Text>
                    <Row>
                        <Col>
                            <DishModal show={modalShow} onHide={() => setModalShow(false)} />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Row>
                <Col md={{ span: 8, offset: 3 }}>
                    <AddDish show={modalShow} onHide={() => setModalShow(false)} />
                </Col>
            </Row>
        </>
    );


}


export default DishMenu;

