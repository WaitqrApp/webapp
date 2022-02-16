import React, {useState, useEffect, useContext} from "react";
import { Nav, Button } from "react-bootstrap";
import './menusidebar.css';
import EditCategoryModal from './EditCategoryModal';
import AddCategoryButton from './AddCategoryButton';
import menusContext from '../../../../context/menus/menusContext';
import seccionesContext from '../../../../context/secciones/seccionesContext';
import AlertaContext from '../../../../context/alertas/alertaContext';

function MenuSideBar(){
    

    //Extraer si un menu esta activo
    const menussContext = useContext(menusContext); 
    const {menuactual } = menussContext;
    
    


    //obtener la funcion del context de seccion
    const seccionessContext = useContext(seccionesContext);
    const {seccionactual,seccionesmenu, obtenerSecciones, guardarSeccionActual} = seccionessContext;

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;


    //obtener secciones cuando carga el componente
    useEffect(() =>{
        console.log("llego este nuevo menu", menuactual)
        if(menuactual){
            obtenerSecciones(menuactual._id)
        }
        
    }, [menuactual]); //para que corra solo una vez
    
    const seleccionarSeccion = seccion =>{
        guardarSeccionActual(seccion)
        obtenerSecciones(menuactual._id)
    }

    return (
        <>
            <Nav className="col-md-12 d-none d-md-block sidebar-menu"
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item className="mx-auto">
                    <Nav.Link className="sidebar-title" href="">Secciones</Nav.Link>
                </Nav.Item>
                {seccionesmenu.map(seccion=>(
                <Nav.Item className="mx-auto">
                    <Nav.Link className="sidebar-text-active" onClick={() => seleccionarSeccion(seccion)}>{seccion.nombre}
                    <Button className="boton-editar-seccion" variant="light">
                         <EditCategoryModal
                            seccion = {seccion}
                         ></EditCategoryModal>
                         </Button>
                    </Nav.Link>
                </Nav.Item>
                ))}
                
                <Nav.Item>
                    <AddCategoryButton/>
                </Nav.Item>
            </Nav>
        </>
    );
}
export default MenuSideBar;
