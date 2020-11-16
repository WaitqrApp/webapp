import React from 'react';
import { Container, Row, Col, Card, Form, Button, Modal } from "react-bootstrap";
function DishModal(props) {
    return (
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Using Grid in Modal
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="show-grid">
                <Container>
                  <Row>
                    <Col xs={12} md={8}>
                      Picaña
                    </Col>
                    <Col xs={6} md={4}>
                      En el menu: Comida
                    </Col>
                  </Row>
        
                  <Row>
                    <Col xs={6} md={4}>
                      Descripcion: Carne Molida de res
                    </Col>
                    <Col xs={6} md={4}>
                      Precio: 150
                    </Col>
                    <Col xs={6} md={4}>
                      Disponible:
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={props.onHide}>Guardar</Button>
              </Modal.Footer>
            </Modal>
    );
}

export default DishModal;