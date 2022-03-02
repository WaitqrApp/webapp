import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import "./menusidebar.css";

import seccionesContext from "../../../../context/secciones/seccionesContext";
import platillosContext from "../../../../context/platillos/platillosContext";

function AddDish() {
  const [show, setShow] = useState(false);
  //aqui se agrega la imagen
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  //Extraer si una seccion esta activa
  const seccionessContext = useContext(seccionesContext);
  const { seccionactual } = seccionessContext;

  //obtener la funcion del context de platillo
  const platillossContext = useContext(platillosContext);
  const {
    platilloseleccionado,
    errorplatillo,
    agregarPlatillo,
    validarPlatillo,
    obtenerPlatillos,
    actualizarPlatillo,
    limpiarPlatillo,
  } = platillossContext;

  const [cargando, guardarCargando] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //Effect que detecta si hay un platillo seleccionado
  useEffect(() => {
    if (platilloseleccionado !== null) {
      guardarPlatilloCreado(platilloseleccionado);
    } else {
      guardarPlatilloCreado({
        nombre: "",
        descripcion: "",
        precio: "",
        platillo: "",
        disponible: true,
      });
    }
  }, [platilloseleccionado]); //para que este revisando la platillo seleccionado

  //state del formulario
  const [platilloCreado, guardarPlatilloCreado] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    platillo: "",
    disponible: true,
  });
  const [valorToggle, guardarValorToggle] = useState(false);

  //extraer el nombre del proyecto
  const { nombre, descripcion, precio, platillo, imagenPlatillo, disponible } =
    platilloCreado;

  //si no hay restaurante seleccionado
  if (!seccionactual) return null;


  var aux;




  const cambiarToggle = () => {
    guardarValorToggle(!valorToggle)
  }

  const postImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "waitqrapp");
    data.append("cloud_name", "waitqrapp");

    fetch("https://api.cloudinary.com/v1_1/waitqrapp/image/upload", {
      method: "post",
      body: data,
    })

      .then((res) => res.json())
      .then((data) => {

        console.log(data.url);
        aux = JSON.parse(JSON.stringify(data.url));
        console.log("esto tiene aux " + aux);

        console.log("antes de enviarlo" + JSON.parse(JSON.stringify(aux)));
        platilloCreado.imagenPlatillo = aux;
        platilloCreado.restaurante = localStorage.getItem("restaurantewebappid");

        platilloCreado.disponible = valorToggle;

        console.log("enviare esto", JSON.stringify(platilloCreado))

        agregarPlatillo(platilloCreado);
        obtenerPlatillos(seccionactual._id)

        guardarPlatilloCreado({
          nombre: "",
          horarioInicio: "",
          horarioFin: "",
          disponible: true,
        });

        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //leer los valores del formulario
  const handleChange = (e) => {
    guardarPlatilloCreado({
      ...platilloCreado,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    console.log("entre al submit")
    guardarCargando(true);
    //setTimeout(guardando(),10000);
    setTimeout(() => {
      guardarCargando(false)
    }, 5000)
    e.preventDefault();
  

    //validar
    if (nombre.trim() === "") {
      validarPlatillo();
      return;
    }

    //Si es edicion o si es nueva menu
    if (platilloseleccionado === null) {
      //agregar la seccion al state de platillos
      platilloCreado.seccion = seccionactual._id;
      console.log("punto de control 1")
      postImage();
    } else {
      //actualizar platillo existente
      actualizarPlatillo(platilloCreado);

      //Elimina menuseleccionado del state
      limpiarPlatillo();
    }
  };





  const guardando = e => {

    guardarCargando(false);
  }

  console.log("cargando", cargando)

  return (
    <>
      <Button
        className="boton-platillo"
        size="m"
        block
        variant="primary"
        onClick={handleShow}
      >
        + Platillo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={onSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar Platillo</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              <Form>
                <Form.Group>
                  <Col>
                    <Form.Control
                      placeholder="Nombre del platillo"
                      className="input-nombre"
                      type="text"
                      name="nombre"
                      value={nombre}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.File
                  label="Imagen Platillo"
                  /* onChange={handleChange,(e)=>console.log(e.target.files)} */
                  /*  onChange={(e)=>console.log(e.target.files[0])} */
                  onChange={(e) => setImage(e.target.files[0])}
                  custom
                  className="input-imagen mb-3"
                />
                <Form.Group>
                  <Col>
                    <Form.Control
                      className="input-nombre"
                      type="text"
                      placeholder="Descripción del Platillo"
                      name="descripcion"
                      value={descripcion}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group>
                  <Col className="input-precio">
                    <Form.Control
                      onChange={handleChange}
                      name="precio"
                      placeholder="Precio"
                      value={precio}
                      className="input-dinero"
                    />
                  </Col>
                </Form.Group>
                <Form.Group>
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check
                      onClick={() => cambiarToggle()}
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

            {
              cargando == true ?
                <Button
                  className="ml-4 cargandoButton"
                  variant="primary"
                >
                  Cargando...
                </Button>
                :
                <span></span>

            }
            {
              cargando == false ?
                <Button
                  className="ml-4"
                  type="submit"
                  variant="primary"
                  onClick={onSubmit}
                >
                  Guardar
                </Button>
                :
                <span></span>
            }



          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddDish;