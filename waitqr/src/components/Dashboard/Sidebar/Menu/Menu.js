import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import MenuSidebar from "./MenuSidebar";
import DishMenu from "./DishMenu";
import "./menusidebar.css";
import AddRestaurant from "./AddRestaurant";
import { useHistory } from "react-router-dom";

import restauranteContext from "../../../../context/restaurantes/restauranteContext";
import menusContext from "../../../../context/menus/menusContext";

import AlertaContext from "../../../../context/alertas/alertaContext";
import MenuActivo from "./MenuActivo";
import MenuLista from "./MenuLista";

function Menu() {

  const [restauranteEscogido, guardarRestauranteEscogido] = useState({});
  const [restauranteEscogidoId, guardarRestauranteEscogidoId] = useState("");
  const [modalShow, setModalShow] = useState(false);
  //Extraer restaurantes de state inicial
  const restaurantesContext = useContext(restauranteContext);
  const { restauranteactual, mensaje, restaurantes, obtenerRestaurantes, restauranteActual } =
    restaurantesContext;
  const seleccionarRestaurante = (restaurante) => {
    restauranteActual(restaurante); //fijar un restaurante actual
    guardarRestauranteEscogido(restaurante);
    guardarRestauranteEscogidoId(restaurante._id);
    localStorage.setItem('restaurantewebapp', restaurante)
    localStorage.setItem('restaurantewebappid', restaurante._id)
    restauranteActual(localStorage.getItem("restaurantewebapp"))
  };
  let history = useHistory();


  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;



  //obtener restaurantes cuando carga el componente
  useEffect(() => {
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // guardarRestauranteEscogido(localStorage.getItem('restaurantewebapp'))
    // guardarMenuEscogido(localStorage.getItem('menuwebapp'))
    obtenerRestaurantes();
  }, [mensaje]); //para que corra solo una vez


  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={6}></Col>
          <MenuActivo />
          <MenuLista 
          restauranteEscogido = {restauranteEscogido}
          />
          <Col className="text-center" xs={2}>
            <DropdownButton
              className="dropdown-menus"
              title={
                Object.keys(restauranteEscogido).length === 0  ? (
                  <span>Restaurante</span>
                ) 
                : (
                  <span>{restauranteEscogido.nombre}</span>
                )
              }
            >
              {restaurantes.map((restaurante) => (
                <Dropdown.Item
                  onClick={() => seleccionarRestaurante(restaurante)}
                >
                  {restaurante.nombre}
                </Dropdown.Item>
              ))}
              <Dropdown.Divider />
              <Dropdown.Item as="button" onClick={() => setModalShow(true)}>
                Agregar Restaurante +
              </Dropdown.Item>
              <AddRestaurant
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </DropdownButton>
          </Col>
        </Row>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <MenuSidebar />
          </Col>
          <Col xs={10} id="mt-1 page-content-wrapper">
            <DishMenu />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Menu;
