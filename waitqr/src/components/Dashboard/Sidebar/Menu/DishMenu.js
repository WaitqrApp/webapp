import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";


function DishMenu() {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Picaña Loca</Card.Title>
                    <Card.Text>
                        Servida con Salsa BBQ y Cebolla Caramelizada
        </Card.Text>
                    <Button variant="primary">Editar</Button>
                    <Button variant="primary">Desactivar</Button>
                </Card.Body>
            </Card>
        </>
    );


}


export default DishMenu;

