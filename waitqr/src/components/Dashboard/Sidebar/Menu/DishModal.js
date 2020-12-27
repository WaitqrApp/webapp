import React, {useState} from 'react';
import { Container, Row, Col, Form, Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import './menusidebar.css'
import DeleteDishModal from './DeleteDishModal';

function DishModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button className = "boton-editar" size = "lg" block variant="primary" onClick={handleShow}>
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
                <Form.Control className="input-nombre" type="" placeholder="Picaña Especial" />
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
              <Col  className="input" sm={"auto"}>
                <Form.Control className="input-desc" type="password" placeholder="Picaña Especial acompañada de aire" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label  column sm={"auto"}>
                Precio: $
              </Form.Label>
              <Col sm={"auto"}>
                <Form.Control  className="input-dinero" type="" placeholder="250.00" />
              </Col>
            </Form.Group>
            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Sección
                </Form.Label>
                <Form.Control
                  as="select"
                  className="input-seccion my-1 mr-sm-2"
                  id="inlineFormCustomSelectPref"
                  custom
                >
                  <option value="0">Sección...</option>
                  <option value="1">Restaurante</option>
                  <option value="2">Bar</option>
                  <option value="3">Otro</option>
                </Form.Control>
              </Form.Group>
            </fieldset>
            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check
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
          <DeleteDishModal show={modalShow} onHide={() => setModalShow(false)} />

            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
            <Button type = "submit" variant="primary" onClick={handleClose}>
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default DishModal;
