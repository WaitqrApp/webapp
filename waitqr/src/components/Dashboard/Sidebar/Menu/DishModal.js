import React from 'react';
import { Container, Row, Col, Card, Form, Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function DishModal(props) {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar Platillo
                </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Platillo
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="" placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={"auto"}>
                Descripción
              </Form.Label>
              <Col sm={"auto"}>
                <Form.Control type="password" placeholder="Picaña Especial acompañada de aire" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={"auto"}>
                Precio: $
              </Form.Label>
              <Col sm={"auto"}>
                <Form.Control type="" placeholder="250.00" />
              </Col>
            </Form.Group>
            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Sección
                </Form.Label>
                <Form.Control
                  as="select"
                  className="my-1 mr-sm-2"
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
        <Button onClick={props.onHide}>Guardar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DishModal;