import React, {useState} from 'react';
import { Container, Row, Col, Card, Form, Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import './menusidebar.css'

function DeleteDishModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
        <Button variant="danger" size = "lg" block onClick={handleShow}>
          Eliminar
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Borrar Nombre Platillo</Modal.Title>
          </Modal.Header>
          <Modal.Body>Estas seguro de querer borrarlo?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Borrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default DeleteDishModal;
