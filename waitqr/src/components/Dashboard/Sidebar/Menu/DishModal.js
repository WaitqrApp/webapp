import React, { useState, useContext } from 'react';
import { Container, Row, Col, Card, Form, Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import './menusidebar.css'
import DeleteDishModal from './DeleteDishModal';

import platillosContext from '../../../../context/platillos/platillosContext';

function DishModal(platillo) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const [platilloAux, guardarPlatilloAux] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    disponible: true
  })

  const { nombre, descripcion, precio, disponible } = platilloAux;
  platilloAux.nombre = platillo.platillo.platillo.nombre;
  platilloAux.descripcion = platillo.platillo.platillo.descripcion;
  platilloAux.precio = platillo.platillo.platillo.precio;




  //obtener la funcion del context de platillo
  const platillossContext = useContext(platillosContext);
  const { platilloseleccionado, errorplatillo, agregarPlatillo, validarPlatillo, obtenerPlatillos,
    actualizarPlatillo, limpiarPlatillo, eliminarPlatillo } = platillossContext;

  const onClickEliminarPlatillo = e => {
    eliminarPlatillo(platillo.platillo.platillo._id, platillo.platillo.platillo.seccion)
  }

  const onClickEditarPlatillo = e => {

    //actualizarPlatillo()
    platillo.platillo.platillo.nombre = nombre;
    platillo.platillo.platillo.descripcion = descripcion;
    platillo.platillo.platillo.precio = precio;
    console.log(JSON.stringify(platillo))
    actualizarPlatillo(platillo.platillo.platillo)
    handleClose();
  }

  const handleChange = e => {
    guardarPlatilloAux({
      ...platilloAux,
      [e.target.name]: e.target.value,

    })

  }

  return (
    <>
      <Button className="boton-editar" size="m" block variant="primary" onClick={handleShow}>
        Editar Platillo
        </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Platillo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Form>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Platillo
              </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    onChange={handleChange}
                    name="nombre" value={nombre}
                    className="input-nombre"
                    type=""
                  >
                  </Form.Control>

                </Col>
              </Form.Group>
              <Form.File
                className="input-imagen"
                label="Imagen Platillo"
                custom
              />
              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={"auto"}>
                  Descripción
              </Form.Label>
                <Col className="input" sm={"auto"}>
                  <Form.Control onChange={handleChange} name="descripcion" value={descripcion} className="input-desc" type="text">
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={"auto"}>
                  Precio: $
              </Form.Label>
                <Col sm={"auto"}>
                  <Form.Control onChange={handleChange} name="precio" value={precio} className="input-dinero" type="">
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Form.Check
                    onChange={handleChange}
                    className="disponible-edit-platillo"
                    type="switch"
                    id="custom-switch"
                    label="Disponible"
                  />
                </Col>
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Container>
            <Row>
              <Col md={6} className="text-left">
                <button onClick={onClickEliminarPlatillo} type="button" class="btn btn-danger">
                  Eliminar
              </button>
              </Col>
              <Col md={3} className="text-right">
                <Button variant="secondary" onClick={handleClose}>
                  Cancelar
            </Button>
              </Col>
              <Col md={3} className="text-right">
                <Button variant="primary" onClick={onClickEditarPlatillo}>
                  Guardar 
            </Button>

              </Col>
            </Row>

          </Container>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DishModal;
