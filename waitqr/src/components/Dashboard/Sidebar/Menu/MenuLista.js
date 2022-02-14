import React, { useEffect, useState, useContext } from "react";
import restauranteContext from "../../../../context/restaurantes/restauranteContext";
import menusContext from "../../../../context/menus/menusContext";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AddMenu from "./AddMenu";

function MenuLista({ restauranteEscogido }) {
  const [modalShow, setModalShow] = useState(false);

  const [menuEscogido, guardarMenuEscogido] = useState("");
  const menussContext = useContext(menusContext);
  const {
    menu,
    menusrestaurante,
    eliminarMenu,
    obtenerMenus,
    actualizarMenu,
    guardarMenuActual,
  } = menussContext;

  //Extraer restaurantes de state inicial
  const restaurantesContext = useContext(restauranteContext);
  const { restauranteactual } = restaurantesContext;

  //Funcion para agregar el menu actual
  const seleccionarMenu = (menu) => {
    guardarMenuActual(menu._id); //fijar un menu actual
    guardarMenuEscogido(menu.nombre);
    localStorage.setItem("menuwebapp", menu);
    localStorage.setItem("menuwebappid", menu._id);
  };
  let history = useHistory();

  useEffect(() => {
    if (restauranteEscogido) {
      obtenerMenus(restauranteEscogido._id);
    }
    console.log("este es el restaurante escogido", restauranteEscogido);
  }, [restauranteEscogido]);

  return (
    <Col className="text-center" xs={2}>
      <DropdownButton
        className="dropdown-menus"
        title={
          (restauranteEscogido ? (
            <span>Primero escoge un restaurante</span>
          ) : (
            <span>Escoge un menu</span>
          ),
          !menu ? <span> Menu</span> : <span>{menu[0].nombre}</span>)
        }
      >
        {menusrestaurante.map((menu) => (
          <Dropdown.Item onClick={() => seleccionarMenu(menu)}>
            {menu.nombre}
          </Dropdown.Item>
        ))}
        <Dropdown.Divider />
        <Dropdown.Item as="button" onClick={() => setModalShow(true)}>
          <AddMenu show={modalShow} onHide={() => setModalShow(false)} />
        </Dropdown.Item>
      </DropdownButton>
    </Col>
  );
}

export default MenuLista;
