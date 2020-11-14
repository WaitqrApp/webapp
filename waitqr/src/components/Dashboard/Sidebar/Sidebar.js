import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Sidebar() {
    return (




        <div className="sidebar col-md-2">
            <div className="active">
                <Link to={'/home'}>
                    <span className="material-icons mr-3">home</span>
                    Dashboard
                </Link>
            </div>
            <div className="non-active">
                <Link to={'/menu'}>
                    <span className="material-icons mr-3">fastfood</span> Menu
                </Link>
            </div>
            <span className="non-active">
                <Link to={'/orders'}>
                    <span className="material-icons mr-3" >view_list</span>Ordenes
                </Link>
            </span>
            <span className="non-active">
                <Link to={'/insights'}>
                    <span className="material-icons mr-3">bar_chart</span>Estadísticas
                </Link>
            </span>
            <span className="non-active">
                <Link to={'/history'}>
                    <span className="material-icons mr-3">history</span>Historial
                </Link>
            </span>
            <span className="non-active">
                <Link to={'/tables'}>
                    <span className="material-icons mr-3">all_out</span>Mesas
                </Link>
            </span>
            <span className="non-active">
                <Link to={'/settings'}>
                    <span className="material-icons mr-3">settings</span>Herramientas
                </Link>
            </span>
        </div>

    );
}

export default Sidebar;