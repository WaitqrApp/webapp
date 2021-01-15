import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { AiFillEdit } from 'react-icons/ai';

function EditCategoryModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                <AiFillEdit />

            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Sección</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nombre de Seccion</Form.Label>
                        <Form.Control type="text" placeholder="Desayunos" />
                        <Form.Text className="text-muted">
                            Desayunos
                </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Disponible"
                        />
                    </Form.Group>
                </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
            </Button>
                    <Button variant="primary" onClick={handleClose} type="submit">
                        Guardar Cambios
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditCategoryModal;