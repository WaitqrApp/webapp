import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import restauranteContext from "../../../../context/restaurantes/restauranteContext";
import { useHistory } from "react-router-dom";
import AddRestaurant from "./AddRestaurant";


export default function Restaurantes() {
    const [restauranteEscogido, guardarRestauranteEscogido] = useState();
    const [restauranteEscogidoId, guardarRestauranteEscogidoId] = useState("");
    const [modalShow, setModalShow] = useState(false);
//Extraer restaurantes de state inicial
  const restaurantesContext = useContext(restauranteContext);
  const {restauranteactual, mensaje, restaurantes, obtenerRestaurantes, restauranteActual } =
    restaurantesContext;
    const seleccionarRestaurante = (restaurante) => {
        restauranteActual(restaurante); //fijar un restaurante actual
        guardarRestauranteEscogido(restaurante);
        guardarRestauranteEscogidoId(restaurante._id);
        localStorage.setItem('restaurantewebapp', restaurante)
        console.log(JSON.stringify(localStorage.getItem("restaurantewebapp")) ) 
        localStorage.setItem('restaurantewebappid', restaurante._id)  
        restauranteActual(localStorage.getItem("restaurantewebapp"))
      };
      let history = useHistory();
  return (
    <Col className="text-center" xs={2}>
            <DropdownButton
              className="dropdown-menus"
              title={
                !restauranteEscogido ? (
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
  )
}
