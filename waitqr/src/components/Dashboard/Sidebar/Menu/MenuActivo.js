import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import menusContext from "../../../../context/menus/menusContext";
import { useHistory } from "react-router-dom";
import restauranteContext from "../../../../context/restaurantes/restauranteContext";



export default function MenuActivo() {
    const menussContext = useContext(menusContext);
    const {
        menu,
        menusrestaurante,
        eliminarMenu,
        obtenerMenus,
        actualizarMenu,
        guardarMenuActual,
    } = menussContext;
    var restauranteactual
    useEffect(()=>{
         restauranteactual = localStorage.getItem("restaurantewebapp")
        if(restauranteactual){
            console.log(restauranteactual._id)
            obtenerMenus(restauranteactual._id)
        }
        console.log(restauranteactual)
    })
   

    const guardarMenuActivo = (menutrue) => {
        menusrestaurante.map((menu) => {
            menu.disponible = false;
            actualizarMenu(menu);
        });
        menutrue.disponible = true;
        actualizarMenu(menutrue);
    };

      
  return (
    <Col className="text-center" xs={2}>
            <DropdownButton
              className="dropdown-menus"
              title={
                restauranteactual ? (
                  <span>Menu activo</span>
                ) : (
                  <span>Menu activo</span>
                )
              }
              
            >
              {menusrestaurante.map((menutrue) => (
                <Dropdown.Item onClick={() => guardarMenuActivo(menutrue)}>
                  {menutrue.nombre}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Col>
  )
}
