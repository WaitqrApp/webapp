import React, { useState, useEffect, useContext} from "react";
import { Row, Col, Card, CardDeck, Form, Container } from "react-bootstrap";
import DishModal from './DishModal';
import './menusidebar.css';


function Dish(platillo) {

    const [modalShow, setModalShow] = useState(false);
    return (
                <CardDeck className="col-sm-3 d-inline-flex p-2 overflow-y-scroll" >
                    <Card className="mb-0">
                        <Card.Img variant="top" src={platillo.platillo.imagenPlatillo}></Card.Img> 
                      {/*  <Card.Img variant="top" src={platillo.platillo.imagenPlatillo}></Card.Img>  */}
                        <Card.Body>
                            <Card.Title className="font-weight-bold">
                                <Row>
                                    <Col>
                                    {/* {platillo.imagenPlatillo} */}
                                        {platillo.platillo.nombre}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Check
                                                className="boton-disponible mt-2"
                                                type="switch"
                                                id="disponible-switch"
                                            />
                                    </Col>
                                </Row>
                            </Card.Title>
                            <Card.Text>
                                {platillo.platillo.descripcion}
                                <span><span>$</span>{platillo.platillo.precio}</span>
                            </Card.Text>
                            <Row>
                                <DishModal className="boton-editar" show={modalShow} onHide={() => setModalShow(false)}
                                    platillo={platillo}
                                />
                            </Row>
                            <Row></Row>
                        </Card.Body>
                    </Card>
                </CardDeck>
    );
   
}

export default Dish;