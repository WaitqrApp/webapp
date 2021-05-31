import React, { Fragment, useState, useContext } from 'react';
import restauranteContext from '../../../../context/restaurantes/restauranteContext';
import { Container, Row, Col, Card, Form, Button, Modal, InputGroup, FormControl } from "react-bootstrap";

function AddRestaurant(props) {

  //obtener el state del formulario
  const restaurantesContext = useContext(restauranteContext);
  const { formulario, errorformulario, mostrarFormulario, agregarRestaurante, mostrarError } = restaurantesContext;

  //state para restaurante
  const [restaurante, guardarRestaurante] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    facebook: '',
    instagram: '',
    capacidad: ''
  });

  //extraer nombre, correo, telefono, facebook e Instagram de restaurante
  const { nombre, correo, telefono, facebook, instagram, capacidad } = restaurante;

  //Lee los contenidos del input
  const onChangeRestaurante = e => {
    guardarRestaurante({
      ...restaurante,
      [e.target.name]: e.target.value
    })
  }


  //cuando el usuario envia un restaurante
  const onSubmitRestaurante = e => {
    e.preventDefault();

    //validar el restaurante
    if (nombre === '') {
      mostrarError();
      return;
    }

    //agregar al state
    agregarRestaurante(restaurante);

    //Reiniciar el form
    guardarRestaurante({
      nombre: '',
      correo: '',
      telefono: '',
      facebook: '',
      instagram: '',
      capacidad: '',

    })
  }




  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Container>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Form
          onSubmit={onSubmitRestaurante}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Agregar Restaurante
          </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Col sm={3} className="ml-0">
                <Form.Label>
                  Nombre
                  </Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Nombre del Restaurante"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeRestaurante} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Col sm={3}>
                <Form.Label>
                  Email
              </Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Correo del Restaurante"
                  name="correo"
                  value={correo}
                  onChange={onChangeRestaurante}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Col sm={3}>
                <Form.Label>
                  Teléfono
              </Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Telefono del Restaurante"
                  name="telefono"
                  value={telefono}

                  onChange={onChangeRestaurante}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Col sm={3}>
                <Form.Label>
                  Facebook
              </Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Facebook del Restaurante"
                  name="facebook"
                  value={facebook}
                  onChange={onChangeRestaurante}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Col sm={3}>
              <Form.Label>
                Instagram
              </Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Instagram del Restaurante"
                  name="instagram"
                  value={instagram}
                  onChange={onChangeRestaurante}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Col sm={3}>
              <Form.Label>
                Capacidad
              </Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  type="number"
                  placeholder="Capacidad del restaurante"
                  name="capacidad"
                  value={capacidad}
                  onChange={onChangeRestaurante}
                />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={props.onHide}>Agregar Restaurante</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}

export default AddRestaurant;