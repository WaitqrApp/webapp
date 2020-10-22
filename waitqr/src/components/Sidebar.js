import React , {useState, useContext}from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";


function Sidebar() {
    return(
        <div class="sidebar col-md-2">
            <a class="active" href="#home">
                <span class="material-icons mr-3">home</span>Dashboard
            </a>
            <a class="non-active" href="#news">
                <span class="material-icons mr-3">fastfood</span>Menu
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