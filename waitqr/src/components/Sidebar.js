import React , {useState, useContext}from 'react';


function Sidebar() {
    return(
        <div class="sidebar">
  <a class="active" href="#home">Dashboard</a>
  <a href="#news">Menu</a>
  <a href="#contact">Ordenes</a>
  <a href="#about">Historial</a>
  <a href="#about">Mesas</a>
  <a href="#about">Herramientas</a>
</div>

    );
}

export default Sidebar;