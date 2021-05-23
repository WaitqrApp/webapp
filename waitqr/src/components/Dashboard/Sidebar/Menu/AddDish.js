import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import './menusidebar.css'

import seccionesContext from '../../../../context/secciones/seccionesContext';
import platillosContext from '../../../../context/platillos/platillosContext';


function AddDish() {
  const [show, setShow] = useState(false);
  //aqui se agrega la imagen
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  //Extraer si una seccion esta activa
  const seccionessContext = useContext(seccionesContext);
  const { seccion } = seccionessContext;

  //obtener la funcion del context de platillo
  const platillossContext = useContext(platillosContext);
  const { platilloseleccionado, errorplatillo, agregarPlatillo, validarPlatillo, obtenerPlatillos,
    actualizarPlatillo, limpiarPlatillo } = platillossContext;

  //Effect que detecta si hay un platillo seleccionado
  useEffect(() => {
    if (platilloseleccionado !== null) {
      guardarPlatilloCreado(platilloseleccionado);
    } else {
      guardarPlatilloCreado({
        nombre: '',
        descripcion: '',
        precio: '',
        platillo: '',
        disponible: true,
      })
    }
  }, [platilloseleccionado]); //para que este revisando la platillo seleccionado 

  //state del formulario
  const [platilloCreado, guardarPlatilloCreado] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    platillo: '',
    disponible: true,

  })

  //extraer el nombre del proyecto
  const { nombre, descripcion, precio, platillo, imagenPlatillo, disponible } = platilloCreado;

  //si no hay restaurante seleccionado
  if (!seccion) return null;

  //Array destructuring para extraer el proyecto actual
  const [guardarSeccionActual] = seccion

  var aux

  const postImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "waitqrapp")
    data.append("cloud_name", "waitqrapp")

    fetch("https://api.cloudinary.com/v1_1/waitqrapp/image/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.url)
        aux = JSON.parse(JSON.stringify(data.url))
        console.log("esto tiene aux" + aux)
      })
      .catch(err => {
        console.log(err)
      })
    }

  //leer los valores del formulario
  const handleChange = e => {
    guardarPlatilloCreado({
      ...platilloCreado,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    console.log("ENTRE AL SUBMIT DE platillo PUTO")
    e.preventDefault();

    //validar
    if (nombre.trim() === '') {
      validarPlatillo();
      return;
    }

    //Si es edicion o si es nueva menu
    if (platilloseleccionado === null) {
    
      //agregar la seccion al state de platillos
      platilloCreado.seccion = guardarSeccionActual._id;
      postImage()
      console.log("antes de enviarlo" + JSON.parse(JSON.stringify(aux)))
      platilloCreado.imagenPlatillo = aux;
      agregarPlatillo(platilloCreado);
    } else {
      //actualizar platillo existente
      actualizarPlatillo(platilloCreado);

      //Elimina menuseleccionado del state
      limpiarPlatillo();
    }


    //Obtener y filtrar las tareas del proyecto actual, practicamente lo recarga
    obtenerPlatillos(guardarSeccionActual.id);

    //reiniciar el form
    guardarPlatilloCreado({
      nombre: '',
      horarioInicio: '',
      horarioFin: '',
      disponible: true,
    })

    handleClose();


  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <>
      <Button className="boton-platillo" size="m" block variant="primary" onClick={handleShow}>
        + Platillo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form
          onSubmit={onSubmit}
        >
          <Modal.Header closeButton>
            <Modal.Title>Agregar Platillo</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              <Form>
                <Form.Group controlId="formHorizontalEmail">
                  <Col >
                    <Form.Label>
                      Nombre del Platillo
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Nombre del platillo"
                      className="input-nombre"
                      name="nombre"
                      value={nombre}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.File as={Row}
                  label="Imagen Platillo"
                  /* onChange={handleChange,(e)=>console.log(e.target.files)} */
                  /*  onChange={(e)=>console.log(e.target.files[0])} */
                  onChange={(e) => setImage(e.target.files[0])}
                  className="mb-auto mr-auto ml-auto"
                />
                <Form.Group as={Row} >
                  <Col sm={3}>
                    <Form.Label>
                      Descripción
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Control className="input-nombre" type="text" placeholder="Descripción del Platillo"
                      name="descripcion"
                      value={descripcion}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Col className="mt-2" sm={12}>

                  <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={"auto"}>
                      Precio: $
                    </Form.Label>
                    <Col className="input-precio" sm={"auto"}>
                      <Form.Control onChange={handleChange} name="precio" value={precio} className="input-dinero" type="">
                      </Form.Control>
                    </Col>
                  </Form.Group>
                </Col>
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
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button className="ml-4" type="submit" variant="primary" onClick={onSubmit}>
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddDish;
