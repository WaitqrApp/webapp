import React from 'react';
import { Container, Row, Col, Card, Form, Button, Modal } from "react-bootstrap";
import './menusidebar.css'

function AddDish() {
    return (
        <>
            <Button className="boton-platillo" variant="primary" size="lg" block>
                    Agregar Platillo
                </Button>
            {/* <AddDishForm show={modalShow} onHide={() => setModalShow(false)} /> */}
        </>
    );
}

export default AddDish;