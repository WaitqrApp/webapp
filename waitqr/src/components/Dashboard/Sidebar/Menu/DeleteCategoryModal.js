import React, {useState} from 'react';
import { Button, Modal } from "react-bootstrap";
import './menusidebar.css'

function DeleteCategoryModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
        <Button variant="danger" size = "lg" block onClick={handleShow}>
          Eliminar Categoria
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Borrar Nombre Categoria</Modal.Title>
          </Modal.Header>
          <Modal.Body>Estas seguro de querer borrar la categoria?</Modal.Body>
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
  
  export default DeleteCategoryModal;