import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Picaña from './img/picaña.jpg';


function DishMenu() {
    return (
        <>
            <Card className="mt-4" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Picaña} />
                <Card.Body>
                    <Card.Title className="font-weight-bold">Picaña Loca</Card.Title>
                    <Card.Text>
                        Carne de vacuno al estilo Brazileiro Irmao.
                    </Card.Text>
                    <Button variant="primary">Editar</Button>
                    <Button variant=" btn-outline-danger">Desactivar</Button>
                </Card.Body>
            </Card>
            
        </>
    );


}


export default DishMenu;

