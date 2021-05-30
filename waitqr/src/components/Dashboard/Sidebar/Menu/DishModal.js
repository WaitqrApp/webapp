import React, { useState, useContext } from "react";
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

function DishModal({
  setModalShow,
  modalShow,
  platillo,
  handleChange,
  onGuardarPlatillo,
  onClickEliminarPlatillo,
  guardarPlatilloAux,
}) {
  const { nombre, descripcion, precio, disponible } = platillo;

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
              <Col sm={12}>
                <Form.File
                  className="input-imagen"
                  label="Imagen Platillo"
                  custom
                />
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
                <Col sm={{ span: 10, offset: 2 }}>
                  <Form.Check type="switch" onClick={() => 
                    guardarPlatilloAux((platilloAux) => ({
                        ...platilloAux,
                        disponible: !platilloAux.disponible,
                      }))} 
                      checked={platillo.disponible}
                      >
                  </Form.Check>
                </Col>
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
