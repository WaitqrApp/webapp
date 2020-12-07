import React from 'react';
import { Container, Row, Col, Card, Form, Button, Modal, InputGroup, FormControl } from "react-bootstrap";

function AddCategory(props) {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Agregar Categoría
                </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label>
                Nombre de Categoría
              </Form.Label>
              <Col classname="input-categoria" sm={"auto"}>
                <Form.Control classname="input-categoria" type="password" placeholder="Nombre de Categoría" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check
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
        <Button onClick={props.onHide}>Agregar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddCategory;