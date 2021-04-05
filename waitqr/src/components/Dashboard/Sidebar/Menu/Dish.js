import React, { useState, useEffect, useContext} from "react";
import { Row, Col, Card, CardDeck, Form, Container } from "react-bootstrap";
import Picaña from './img/picaña.jpg';
import DishModal from './DishModal';

function Dish(platillo) {

    const [modalShow, setModalShow] = useState(false);
    return (
                <CardDeck className="col-sm-3 d-inline-flex p-2 overflow-y-scroll" >
                    <Card className="mb-0">
                        <Card.Img variant="top" src={Picaña} />
                        <Card.Body>
                            <Card.Title className="font-weight-bold">
                                <Row>
                                    <Col>
                                        {platillo.platillo.nombre}
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
                                {platillo.platillo.descripcion}
                                <span><span>$</span>{platillo.platillo.precio}</span>
                            </Card.Text>
                            <Row>
                                <DishModal show={modalShow} onHide={() => setModalShow(false)}
                                    platillo={platillo}
                                />
                            </Row>
                        </Card.Body>
                    </Card>
                </CardDeck>
    );
   
}

export default Dish;