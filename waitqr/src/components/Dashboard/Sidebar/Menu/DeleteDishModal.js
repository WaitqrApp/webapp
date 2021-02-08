import React, {useState} from 'react';
import {Button, Modal } from "react-bootstrap";
import './menusidebar.css'

function DeleteDishModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
        <Button variant="danger" onClick={handleShow}>
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