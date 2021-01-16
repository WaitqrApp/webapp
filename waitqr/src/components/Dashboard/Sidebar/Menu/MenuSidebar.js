import React, {useState, useEffect, useContext} from "react";
import { Nav, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import './menusidebar.css';
import AddCategory from './AddCategory';
import AddRestaurant from './AddRestaurant';
import BotonMenuSidebar from './BotonMenuSidebar';

import menusContext from '../../../../context/menus/menusContext';
import seccionesContext from '../../../../context/secciones/seccionesContext';
import AlertaContext from '../../../../context/alertas/alertaContext';





function MenuSideBar(){
    

    //Extraer si un menu esta activo
    const menussContext = useContext(menusContext); 
    const {menu } = menussContext;
    


    //obtener la funcion del context de seccion
    const seccionessContext = useContext(seccionesContext);
    const {seccion,seccionesmenu, obtenerSecciones, guardarSeccionActual} = seccionessContext;

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;


    //obtener secciones cuando carga el componente
    useEffect(() =>{

        if(menu){
            obtenerSecciones(menu[0]._id)
        }
        
    }, [menu]); //para que corra solo una vez
    
    const seleccionarSeccion = seccion =>{
        guardarSeccionActual(seccion._id)
    }
    console.log(seccion);


    return (
        <>
            <Nav className="col-md-12 d-none d-md-block sidebar-menu"
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item className="mx-auto">
                    <Nav.Link className="sidebar-title" href="">Secciones del menu</Nav.Link>
                </Nav.Item>
                {seccionesmenu.map(seccion=>(
                <Nav.Item className="mx-auto">
                    <Nav.Link className="sidebar-text-active" onClick={() => seleccionarSeccion(seccion)}>{seccion.nombre}</Nav.Link>
                </Nav.Item>
                ))}
                <Nav.Item>
                    <BotonMenuSidebar/>
                </Nav.Item>
                
                
            </Nav>
           
            

        </>
    );
}
export default MenuSideBar;
