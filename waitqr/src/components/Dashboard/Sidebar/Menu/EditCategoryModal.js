import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import { AiFillEdit } from 'react-icons/ai';

import seccionesContext from '../../../../context/secciones/seccionesContext';

function EditCategoryModal(seccion) {
    console.log("hola " + JSON.stringify(seccion.seccion.nombre) )
    const seccionessContext = useContext(seccionesContext);
    const {actualizarSeccion, eliminarSeccion} = seccionessContext;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   

      const [seccionAux, guardarSeccionAux] = useState({
        nombre:"",
        disponible: true
      })
      
      const {nombre, disponible} = seccionAux;
      seccionAux.nombre = seccion.seccion.nombre;
      console.log(seccionAux.nombre)

      const onChange = e => {
        guardarSeccionAux({
          ...seccionAux,
          [e.target.name] : e.target.value,
          
        })
        
      }

      const onClickEditarSeccion = e =>{

        //actualizarPlatillo()
        seccion.seccion.nombre = nombre;
        console.log(JSON.stringify(seccion))
        actualizarSeccion(seccion.seccion)
        handleClose();
      }

      const onClickEliminarSeccion= e =>{
        eliminarSeccion(seccion.seccion._id, seccion.seccion.menu)
      }
      
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
                        <Form.Control type="text"  name="nombre" value={nombre} onChange={onChange}/>
                    
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Switch id="switch-2" label="Disponible" onChange={onChange} />
                    </Form.Group>
                </Form></Modal.Body>
                <Modal.Footer>
            <Container>
              <Row>

              
              <Col  md={6} className="text-left">
              <button onClick={onClickEliminarSeccion} type="button" class="btn btn-danger">
                Eliminar
              </button>
              </Col>
              <Col md={3} className="text-right">
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
            </Col>
            <Col md={3} className="text-right">
            <Button variant="primary" onClick={onClickEditarSeccion}>
              Guardar Cambios
            </Button>
          
              </Col>
              </Row>
            
            </Container>
           
          </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditCategoryModal;