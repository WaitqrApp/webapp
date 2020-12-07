import React from 'react';
import { Container, Row, Col, Card, Form, Button, Modal } from "react-bootstrap";
function AddDish() {
    setChecked((prev) => !prev);
    return (

        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                                Agregar Categoría
                            </Button>
                        <AddDishFormye show={modalShow} onHide={() => setModalShow(false)} />
        </>

    );
}

export default AddDish;