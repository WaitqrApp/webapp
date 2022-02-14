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
import menusContext from "../../../../context/menus/menusContext";
import restauranteContext from "../../../../context/restaurantes/restauranteContext";
import "./menusidebar.css";

function AddMenu(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
/* 
  //Extraer si un proyecto esta activo
  const restaurantesContext = useContext(restauranteContext);
  const { restaurante } = restaurantesContext;

  //obtener la funcion del context de menu
  const menussContext = useContext(menusContext);
  const {
    menuseleccionado,
    errormenu,
    agregarMenu,
    validarMenu,
    obtenerMenus,
    actualizarMenu,
    limpiarMenu,
  } = menussContext;

  //Effect que detecta si hay una menu seleccionado
  useEffect(() => {
    if (menuseleccionado !== null) {
      guardarMenu(menuseleccionado);
    } else {
      guardarMenu({
        nombre: "",
        horarioInicio: "",
        horarioFin: "",
        disponible: true,
      });
    }
  }, [menuseleccionado]); //para que este revisando la menu seleccionada

  //state del formulario
  const [menu, guardarMenu] = useState({
    nombre: "",
    horarioInicio: "",
    horarioFin: "",
    disponible: true,
  });
  //extraer el nombre del proyecto
  const { nombre, horarioFin, horarioInicio, disponible } = menu;

  //si no hay restaurante seleccionado
  if (!restaurante) return null;

  //Array destructuring para extraer el proyecto actual
  const [restauranteActual] = restaurante;

  //leer los valores del formulario
  const handleChange = (e) => {
    guardarMenu({
      ...menu,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    console.log("ENTRE AL SUBMIT DE MENU PUTO");
    e.preventDefault();

    //validar
    if (nombre.trim() === "") {
      validarMenu();
      return;
    }

    //Si es edicion o si es nueva menu
    if (menuseleccionado === null) {
      //agregar el nuevo menu al state de menus
      menu.restaurante = restauranteActual._id;
      agregarMenu(menu);
    } else {
      //actualizar menu existente
      actualizarMenu(menu);

      //Elimina menuseleccionado del state
      limpiarMenu();
    }

    //Obtener y filtrar las tareas del proyecto actual, practicamente lo recarga
    obtenerMenus(restauranteActual.id);

    //reiniciar el form
    guardarMenu({
      nombre: "",
      horarioInicio: "",
      horarioFin: "",
      disponible: true,
    });
  };
 */
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Agregar Menu
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Demo Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMenu;
