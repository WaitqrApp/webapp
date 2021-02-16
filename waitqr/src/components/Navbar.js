import React, { useState, useContext, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Logo from './img/logo_waiter-01 copy.png';
import { Col, Row, Container } from 'react-bootstrap';


import AuthContext from '../context/autenticacion/authContext'



function Navbar() {



  //Extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, [])

  return (
    <Container fluid>
        <Row className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
          <Col sm={2}>
            <img className="waitqr-logo" src={Logo} />
          </Col>
          <Col sm={8}>
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          </Col>
          <Col sm={1}>
            <span className="material-icons">notifications</span>
          </Col>
          <Col sm={1}>
              <DropdownButton block id="dropdown-restaurante" title={usuario ? <span>{usuario.nombre}</span> : null}>
                <Dropdown.ItemText>Agregar Restaurante</Dropdown.ItemText>
                <Dropdown.Item>Agregar Platillo</Dropdown.Item>
                <Dropdown.Item>Cambiar Contraseña</Dropdown.Item>
                <Dropdown.Item>Contáctanos</Dropdown.Item>
                <Dropdown.Item onClick={() => cerrarSesion()}>Cerrar Sesión</Dropdown.Item>
              </DropdownButton>
          </Col>
        </Row>
    </Container>
  );
}

export default Navbar;