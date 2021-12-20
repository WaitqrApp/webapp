import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import menusContext from "../../../../context/menus/menusContext";
import seccionesContext from "../../../../context/secciones/seccionesContext";

function AddCategory(props) {
  const [checked, setChecked] = useState(false);

  //Extraer si un menu esta activo
  const menussContext = useContext(menusContext);
  const { menu } = menussContext;

  //obtener la funcion del context de seccion
  const seccionessContext = useContext(seccionesContext);
  const {
    seccionseleccionada,
    errorseccion,
    agregarSeccion,
    validarSeccion,
    obtenerSecciones,
    actualizarSeccion,
    limpiarSeccion,
  } = seccionessContext;

  //Effect que detecta si hay una seccion seleccionada
  useEffect(() => {
    if (seccionseleccionada !== null) {
      guardarSeccion(seccionseleccionada);
    } else {
      guardarSeccion({
        nombre: "",
        disponible: true,
      });
    }
  }, [seccionseleccionada]); //para que este revisando la seccion seleccionada

  //state del formulario
  const [seccion, guardarSeccion] = useState({
    nombre: "",
    disponible: true,
  });
  //extraer el nombre del proyecto
  const { nombre, disponible } = seccion;
  //si no hay restaurante seleccionado
  if (!menu) return null;

  //Array destructuring para extraer el proyecto actual
  const [menuActual] = menu;

  //leer los valores del formulario
  const handleChange = (e) => {
    guardarSeccion({
      ...seccion,
      [e.target.name]: e.target.value,
    });
  };


  const onSubmit = (e) => {
    console.log("si entre putooooo");
    e.preventDefault();

    //validar
    if (nombre.trim() === "") {
      console.log("si entre putooooo");

      validarSeccion();
      return;
    }

    //Si es edicion o si es nueva seccion
    if (seccionseleccionada === null) {
      //agregar la nueva seccion al state de secciones
      seccion.menu = menuActual._id;
      agregarSeccion(seccion);
    } else {
      //actualizar menu existente
      actualizarSeccion(seccion);

      //Elimina menuseleccionado del state
      limpiarSeccion();
    }

    //reiniciar el form
    guardarSeccion({
      nombre: "",
      disponible: true,
    });
    props.onHide();
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Form onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Agregar Sección
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Nombre de la seccion"
                  name="nombre"
                  value={nombre}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          {/*<Button type="Submit" onClick={props.onHide}>Agregar Seccion</Button>*/}
          <Button onClick={onSubmit}>Agregar Seccion</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
export default AddCategory;
