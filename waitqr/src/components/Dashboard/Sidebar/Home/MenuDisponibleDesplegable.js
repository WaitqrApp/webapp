/*
    Master Component: MenuDisponibleDesplegable
    Author: Emiliano Bonilla
    Fecha: Lunes, Jun 21, 2021
*/
import React from "react";
import PropTypes from "prop-types";
import { Dropdown, DropdownButton, Container } from "react-bootstrap";

const baseData = [
  {
    nombre: "Menu 1",
  },
  {
    nombre: "Menu 2",
  },
];

function MenuDisponibleDesplegable(props) {
  return (
    <Container className="dashboard-componente">
      <DropdownButton title="Menu Activo" className="dropdown-restaurante">
        {baseData.map((menu) => (
          <Dropdown.Item onClick={() => console.log("Menu Seleccionado")}>
            {menu.nombre}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Container>
  );
}

MenuDisponibleDesplegable.propTypes = {};

export default MenuDisponibleDesplegable;
