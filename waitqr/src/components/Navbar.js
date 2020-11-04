import React, { useState, useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Logo from './img/logo_waiter-01 copy.png';


function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <img className="waitqr-logo" src={Logo} />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li>
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <span className="material-icons">
            notifications
          </span>
          <span>
            <DropdownButton id="dropdown-item-button" title="John Doe">
              <Dropdown.ItemText>Agregar Restaurante</Dropdown.ItemText>
              <Dropdown.Item>Agregar Platillo</Dropdown.Item>
              <Dropdown.Item>Cambiar Contraseña</Dropdown.Item>
              <Dropdown.Item>Cerrar Sesión</Dropdown.Item>
            </DropdownButton>
          </span>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;