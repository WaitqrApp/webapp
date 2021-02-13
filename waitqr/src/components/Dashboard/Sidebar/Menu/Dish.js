import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Card, CardDeck, Form, Container } from "react-bootstrap";
import Picaña from './img/picaña.jpg';
import DishModal from './DishModal';
import './Styles/Styles.css';



function Dish(platillo) {

    const [modalShow, setModalShow] = useState(false);



    return (

        <Container>
            <Row>
                <Col xs={3}>
                    <Card className="mb-0" style={{ flex: 1 }}>
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
                                <br></br>
                                <span><span>$</span>{platillo.platillo.precio}</span>
                            </Card.Text>
                            <Row>
                                <DishModal show={modalShow} onHide={() => setModalShow(false)}
                                    platillo={platillo}
                                />
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Dish;