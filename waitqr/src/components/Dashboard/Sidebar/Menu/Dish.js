import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import Picaña from './img/picaña.jpg';
import DishModal from './DishModal';
import './Styles/Styles.css';
import AddDish from './AddDish';



function Dish(platillo){
    
    const [modalShow, setModalShow] = useState(false);


    console.log(platillo.platillo)
    console.log(platillo.platillo.nombre)


    return(

        <>

        <Card className="mt-4" style={{ width: '20rem' }}>
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
                    </Card.Text>
                    <Row>

                        <DishModal show={modalShow} onHide={() => setModalShow(false)} />
                    </Row>
                </Card.Body>
            </Card>
            {/* <Row>
                <Col md={{ span: 8, offset: 3 }}>
                    <AddDish show={modalShow2} onHide={() => setModalShow2(false)} />
                </Col>
            </Row> */}
            </>
    );
}

export default Dish;