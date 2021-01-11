import React, {useState, useEffect, useContext} from "react";
import { Nav, Button } from "react-bootstrap";
import './menusidebar.css';
import AddCategory from './AddCategory';
import DeleteCategoryModal from './DeleteCategoryModal';
import { AiFillEdit } from 'react-icons/ai';
import AddRestaurant from './AddRestaurant';

import menusContext from '../../../../context/menus/menusContext';
import seccionesContext from '../../../../context/secciones/seccionesContext';
import AlertaContext from '../../../../context/alertas/alertaContext';





function MenuSideBar(){
    const [modalShow, setModalShow] = useState(false);

    //Extraer si un menu esta activo
    const menussContext = useContext(menusContext); 
    const {menu } = menussContext;
    


    //obtener la funcion del context de seccion
    const seccionessContext = useContext(seccionesContext);
    const {seccionseleccionada,seccionesmenu, obtenerSecciones, guardarSeccionActual} = seccionessContext;

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
                     <Button variant="light">
                         <AiFillEdit />
                         </Button>
                        </Nav.Link>
                </Nav.Item>
                ))}
                
                <Nav.Item className="mx-auto">
                    <Nav.Link className="boton-categoria" href="">
                    <Button type = "submit" variant="primary" size="m" block onClick={() => setModalShow(true)}>
                                + Categoria
                            </Button>
                        <AddCategory show={modalShow} onHide={() => setModalShow(false)} />

                        </Nav.Link>

                </Nav.Item>
                {/* <DeleteCategoryModal show={modalShow} onHide={() => setModalShow(false)} /> */}

            </Nav>
            

        </>
    );
}
export default MenuSideBar;
