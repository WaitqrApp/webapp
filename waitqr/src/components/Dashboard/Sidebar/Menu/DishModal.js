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
import platillosContext from "../../../../context/platillos/platillosContext";
import nombreetiquetaContext from "../../../../context/nombreetiquetas/nombreetiquetasContext"




function DishModal({
  setModalShow,
  modalShow,
  platillo, 
  
}) {

  const platillosContextLocal = useContext(platillosContext);
  const {
    obtenerPlatillos,
    actualizarPlatillo,
    eliminarPlatillo,
  } = platillosContextLocal;

  const nombreetiquetasContext = useContext(nombreetiquetaContext);
  const{
    agregarNombreEtiqueta,
    obtenerNombreEtiquetas,
    validarNombreEtiqueta,
    nombreetiquetasplatillo
  } = nombreetiquetasContext

console.log("me llego este platillo", platillo)



useEffect(() =>{
  if(platillo!== null){
      guardarPlatilloAux(platillo)
  }else{
      guardarPlatilloAux({
        nombre: '',
        descripcion: '',
        precio: ''
      })
  }

  obtenerNombreEtiquetas(platillo._id)
}, [platillo]); //para que este revisando la tarea seleccionada

const [platilloAux, guardarPlatilloAux] = useState({
  nombre : "",
  descripcion:"",
  precio:"",
})

  const { nombre, descripcion, precio} = platilloAux;


  const [nombreetiquetaAux, guardarNombreEtiquetaAux] = useState({
    nombreetiqueta: ""
  })
  const {nombreetiqueta} = nombreetiquetaAux

  const handleChange = e => {
    guardarPlatilloAux({
      ...platilloAux,
      [e.target.name]: e.target.value,

    })

  }

  const handleChangeNombreEtiqueta = e => {
    guardarPlatilloAux({
      ...nombreetiquetaAux,
      [e.target.name]: e.target.value,

    })

  }

  const onAgregarNombreEtiqueta = e =>{
    if(nombreetiqueta.trim() === ""){
      validarNombreEtiqueta();
      return;
    }
    agregarNombreEtiqueta(nombreetiquetaAux)
  }

  const onGuardarPlatillo = e =>{
    //actualizarPlatillo()

    
    platillo.nombre = nombre;
    platillo.descripcion = descripcion;
    platillo.precio = precio;

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
              {
              nombreetiquetasplatillo.length === 0 ?
              <p>no hay nombre de etiqueta</p>
              :
              nombreetiquetasplatillo.map((nombreetiqueta) =>(
                <p>{nombreetiqueta.nombre}</p>
                
              ))
            }
              </Form.Group>
            </Form>
            

            <hr></hr>
            <Form>
              <Col sm={12}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Col sm={8}>
                    <Form.Control
                    placeholder="Agregar Nombre Etiqueta"
                      onChange={handleChangeNombreEtiqueta}
                      name="nombreetiqueta"
                       value={nombreetiqueta}
                      className="input-nombre"
                      type="text"
                    ></Form.Control>
                  </Col>
                  <Col sm={4}>
                  <Button
                  variant="primary"
                  type="submit"
                   onClick={onAgregarNombreEtiqueta}
                >
                  Agregar
                </Button>
                  </Col>
                </Form.Group>
              </Col>
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
