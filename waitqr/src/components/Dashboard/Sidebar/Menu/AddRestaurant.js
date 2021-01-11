import React, {Fragment, useState, useContext}  from 'react';
import restauranteContext from '../../../../context/restaurantes/restauranteContext';
import { Container, Row, Col, Card, Form, Button, Modal, InputGroup, FormControl } from "react-bootstrap";

function AddRestaurant(props) {

//obtener el state del formulario
const restaurantesContext = useContext(restauranteContext);
const {formulario, errorformulario, mostrarFormulario, agregarRestaurante, mostrarError} = restaurantesContext;

//state para restaurante
const [restaurante, guardarRestaurante] = useState({
  nombre:'',
  correo:'',
  telefono: '',
  facebook:'',
  instagram:'',
});

//extraer nombre, correo, telefono, facebook e Instagram de restaurante
    const{nombre, correo, telefono, facebook, instagram} = restaurante;

    //Lee los contenidos del input
    const onChangeRestaurante = e =>{
        guardarRestaurante({
            ...restaurante,
            [e.target.name] : e .target.value
        })
    }

  
    //cuando el usuario envia un restaurante
    const onSubmitRestaurante = e =>{
      e.preventDefault();

      //validar el restaurante
      if(nombre === ''){
          mostrarError();
          return;
      }

      //agregar al state
      agregarRestaurante(restaurante);

      //Reiniciar el form
      guardarRestaurante({
          nombre:'',       
          correo:'',
          telefono: '',
          facebook:'',
          instagram:'',

      })
  }




  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
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
        <Container>
          
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label>
                Nombre del restaurante
              </Form.Label>
              <Col classname="input-categoria" sm={"auto"}>
                <Form.Control
                 classname="input-categoria"
                  type="text"
                  placeholder="Nombre del Restaurante"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeRestaurante} 
                   />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label>
                Correo del restaurante
              </Form.Label>
              <Col classname="input-categoria" sm={"auto"}>
                <Form.Control
                 classname="input-categoria"
                  type="text"
                   placeholder="Correo del Restaurante"
                   name="correo"
                   value={correo}
                  onChange={onChangeRestaurante} 
                   />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label>
                Telefono del restaurante
              </Form.Label>
              <Col classname="input-categoria" sm={"auto"}>
                <Form.Control
                 classname="input-categoria"
                  type="text"
                  placeholder="Telefono del Restaurante"
                  name="telefono"
                  value={telefono}

                  onChange={onChangeRestaurante} 
                   />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label>
                Facebook del restaurante
              </Form.Label>
              <Col classname="input-categoria" sm={"auto"}>
                <Form.Control
                 classname="input-categoria"
                  type="text"
                   placeholder="Facebook del Restaurante"
                   name="facebook"
                   value={facebook}

                  onChange={onChangeRestaurante} 
                   />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label>
                Instagram del restaurante
              </Form.Label>
              <Col classname="input-categoria" sm={"auto"}>
                <Form.Control
                 classname="input-categoria"
                  type="text"
                   placeholder="Instagram del Restaurante"
                   name="instagram"
                   value={instagram}
                  onChange={onChangeRestaurante} 
                   />
              </Col>
            </Form.Group>
           
          
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" onClick={props.onHide}>Agregar Restaurante</Button>
      </Modal.Footer>

      </Form>
    </Modal>
  );
}

export default AddRestaurant;