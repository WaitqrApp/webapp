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
                    <Card.Title className="font-weight-bold">Picaña Loca</Card.Title>
                    <Card.Text>
                        Carne de vacuno al estilo Brazileiro Irmao
                    </Card.Text>
                    <Row>
                        <Col xs={12} md={8}>
                            <Button variant="primary" onClick={() => setModalShow(true)}>
                                Editar Platillo
                            </Button>
                        </Col>
                        <Col xs={6} md={4} >
                            <Form.Check
                                type="switch"
                                id="disponible-switch"
                                label="Disponible"
                            />
                        </Col>
                        <DishModal show={modalShow} onHide={() => setModalShow(false)} />
                    </Row>

                </Card.Body>
            </Card>
            <Row>
                <Col md={{ span: 8, offset: 3 }}>
                    <AddDish />
                </Col>
            </Row>


        </>
    );


}


export default DishMenu;

