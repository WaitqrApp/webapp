import React, { useEffect, useState, useContext } from "react";
import restauranteContext from "../../../../context/restaurantes/restauranteContext";
import menusContext from "../../../../context/menus/menusContext";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AddMenu from "./AddMenu";




export default function MenuLista() {
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
    const { restauranteactual } =
        restaurantesContext;

    //Funcion para agregar el menu actual
    const seleccionarMenu = (menu) => {
        guardarMenuActual(menu._id); //fijar un menu actual 
        guardarMenuEscogido(menu.nombre);
        localStorage.setItem('menuwebapp', menu)
        localStorage.setItem('menuwebappid', menu._id)


    };
    let history = useHistory();

    

    const [modalShow2, setModalShow2] = useState(false);
    useEffect(() => {
        if (restauranteactual) {
            obtenerMenus(restauranteactual._id);
        }
    })


    return (
        <Col className="text-center" xs={2}>
            <DropdownButton
                className="dropdown-menus"
                title={
                    (restauranteactual ? (
                        <span>Primero escoge un restaurante</span>
                    ) : (
                        <span>Escoge un menu</span>
                    ),
                        !menu ? (
                            <span> Menu</span>
                        ) : (
                            <span>{menu[0].nombre}</span>
                        ))
                }
            >
                {menusrestaurante.map((menu) => (
                    <Dropdown.Item onClick={() => seleccionarMenu(menu)}>
                        {menu.nombre}
                    </Dropdown.Item>
                ))}

                <Dropdown.Item as="button" onClick={() => setModalShow2(true)}>
                    Agregar Menu +
                </Dropdown.Item>
                <AddMenu show={modalShow2} onHide={() => setModalShow2(false)} />
            </DropdownButton>
        </Col>
    )
}
