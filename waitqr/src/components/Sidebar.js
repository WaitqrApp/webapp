import React , {useState, useContext}from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";


function Sidebar() {
    return(
        <div className="sidebar col-md-2">
            <span className="active">
                <Link to={'/'}>
                    <span className="material-icons mr-3">home</span>
                    Dashboard 
                </Link>
            </span>
            <a className="non-active" href="#news">
             <span className="material-icons mr-3">fastfood</span> Menu
            </a>
            <a className="non-active" href="#contact">
                <span className="material-icons mr-3" >view_list</span>Ordenes
            </a>
            <a className="non-active" href="#contact">
                <span className="material-icons mr-3">bar_chart</span>Estadísticas
            </a>
            <a className="non-active" href="#about">
                <span className="material-icons mr-3">history</span>Historial
            </a>
            <a className="non-active" href="#about">
                <span className="material-icons mr-3">all_out</span>Mesas
            </a>
            <a className="non-active" href="#about">
                <span className="material-icons mr-3">settings</span>Herramientas
            </a>
        </div>
    );
}

export default Sidebar;