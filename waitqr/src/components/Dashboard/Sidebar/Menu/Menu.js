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
import Restaurantes from "./Restaurantes";

function Menu() {
 
 



  //Extraer restaurantes de state inicial
  const restaurantesContext = useContext(restauranteContext);
  const {restaurante, mensaje, restaurantes, obtenerRestaurantes, restauranteActual } =
    restaurantesContext;

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
          <MenuActivo/>
          <MenuLista/>
          <Restaurantes/>
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
