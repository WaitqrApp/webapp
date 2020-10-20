import React , {useState, useContext}from 'react';


function Sidebar() {
    return(
        <div class="sidebar">
            <a class="active" href="#home">
                <span class="material-icons mr-3">home</span>Dashboard
            </a>
            <a class="non-active" href="#news">
                <span class="material-icons mr-3">menu_book</span>Menu
            </a>
            <a class="non-active" href="#contact">
                <span class="material-icons mr-3" >view_list</span>Ordenes
            </a>
            <a class="non-active" href="#contact">
                <span class="material-icons mr-3">bar_chart</span>Estadísticas
            </a>
            <a class="non-active" href="#about">
                <span class="material-icons mr-3">history</span>Historial
            </a>
            <a class="non-active" href="#about">
                <span class="material-icons mr-3">all_out</span>Mesas
            </a>
            <a class="non-active" href="#about">
                <span class="material-icons mr-3">settings</span>Herramientas
            </a>
        </div>

    );
}

export default Sidebar;