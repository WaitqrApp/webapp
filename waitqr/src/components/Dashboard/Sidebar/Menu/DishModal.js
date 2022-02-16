import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Modal,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./menusidebar.css";
import DeleteDishModal from "./DeleteDishModal";
import platillosContext from "../../../../context/platillos/platillosContext";




function DishModal({
  setModalShow,
  modalShow,
  platillo, 
  
}) {

  const platillosContextLocal = useContext(platillosContext);
  const {
    platilloseleccionado,
    errorplatillo,
    agregarPlatillo,
    validarPlatillo,
    obtenerPlatillos,
    actualizarPlatillo,
    limpiarPlatillo,
    eliminarPlatillo,
  } = platillosContextLocal;

console.log("me llego este platillo", platillo)

const [platilloAux, guardarPlatilloAux] = useState({
  nombre : "",
  descripcion:"",
  precio:"",
})

  const { nombre, descripcion, precio, disponible } = platilloAux;
  platilloAux.nombre = platillo.nombre;
  platilloAux.descripcion = platillo.descripcion;
  platilloAux.precio = platillo.precio;
  platilloAux.disponible = platillo.disponible;

  const handleChange = e => {
    guardarPlatilloAux({
      ...platilloAux,
      [e.target.name]: e.target.value,

    })

  }

  const onGuardarPlatillo = e =>{
    //actualizarPlatillo()
    platillo.nombre = nombre;
    platillo.descripcion = descripcion;
    platillo.precio = precio;
    platillo.disponible = disponible;

    console.log(JSON.stringify(platillo))
    actualizarPlatillo(platillo)
    setModalShow(false);
  }

  const onClickEliminarPlatillo = (e) => {
    eliminarPlatillo(platillo._id, platillo.seccion);
    obtenerPlatillos(platillo.seccion)
    setModalShow(false);
  };
 
  

  return (
    <>
      <Button 
       className="boton-editar"
       block
       variant="primary"
       onClick={() => setModalShow(true)}
      
      >
        Editar Platillo
      </Button>
        
      
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Platillo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Form>
              <Col sm={12}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column>Nombre del Platillo</Form.Label>
                  <Col sm={12}>
                    <Form.Control
                      onChange={handleChange}
                      name="nombre"
                      value={nombre}
                      className="input-nombre"
                      type=""
                    ></Form.Control>
                  </Col>
                </Form.Group>
              </Col>
              
              <Col className="mt-2" sm={12}>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={"auto"}>
                    Descripción
                  </Form.Label>
                  <Col className="input-nombre" sm={"auto"}>
                    <Form.Control
                      onChange={handleChange}
                      name="descripcion"
                      value={descripcion}
                      className="input-desc"
                      type="text"
                    ></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={"auto"}>
                    Precio: $
                  </Form.Label>
                  <Col className="input-precio" sm={"auto"}>
                    <Form.Control
                      onChange={handleChange}
                      name="precio"
                      value={precio}
                      className="input-dinero"
                      type=""
                    ></Form.Control>
                  </Col>
                </Form.Group>
              </Col>
              <Form.Group as={Row}>
                
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Container>
            <Row>
              <Col md={6} className="text-left">
                <button
                  onClick={onClickEliminarPlatillo}
                  type="button"
                  class="btn btn-danger"
                >
                  Eliminar
                </button>
              </Col>
              <Col md={3} className="text-right">
                <Button variant="secondary" onClick={() => setModalShow(false)}>
                  Cancelar
                </Button>
              </Col>
              <Col md={3} className="text-right">
                <Button
                  variant="primary"
                  type="submit"
                  onClick={onGuardarPlatillo}
                >
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
