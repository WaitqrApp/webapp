import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import Picaña from './img/picaña.jpg';
import DishModal from './DishModal';
import './Styles/Styles.css';



function Dish(platillo){
    
    const [modalShow, setModalShow] = useState(false);



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
                        <br></br>
                        <span><span>$</span>{platillo.platillo.precio}</span>
                    </Card.Text>
                    <Row>

                        <DishModal show={modalShow} onHide={() => setModalShow(false)}
                            platillo = {platillo}
                        />
                    </Row>
                </Card.Body>
            </Card>
            
            </>
    );
}

export default Dish;