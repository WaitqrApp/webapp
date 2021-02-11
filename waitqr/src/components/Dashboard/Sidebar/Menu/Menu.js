import React, {  useEffect, useState, useContext } from "react";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import MenuSidebar from './MenuSidebar';
import DishMenu from './DishMenu';
import './menusidebar.css';
import AddRestaurant from './AddRestaurant';

import AddMenu from './AddMenu';
import restauranteContext from '../../../../context/restaurantes/restauranteContext'; 
import menusContext from '../../../../context/menus/menusContext'; 

import AlertaContext from '../../../../context/alertas/alertaContext';




function Menu() {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [restauranteEscogido, guardarRestauranteEscogido] = useState('');
    const [menuEscogido, guardarMenuEscogido] = useState('');


    //Extraer restaurantes de state inicial
    const restaurantesContext = useContext(restauranteContext);
    const { mensaje, restaurantes, obtenerRestaurantes, restauranteActual } = restaurantesContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const menussContext = useContext(menusContext);
    const { menusrestaurante, eliminarMenu, obtenerMenus, actualizarMenu, guardarMenuActual } = menussContext;




    //obtener restaurantes cuando carga el componente
    useEffect(() => {

        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }


        obtenerRestaurantes();
    }, [mensaje]); //para que corra solo una vez

    //revisar si restaurantes tiene contenido
    //if (restaurantes.length === 0 ) return <p>No hay restaurantes, comienza creando uno</p>;

    //Funcion para agregar el restaurante actual
    const seleccionarRestaurante = restaurante => {
        restauranteActual(restaurante._id); //fijar un restaurante actual
        obtenerMenus(restaurante._id);
        guardarRestauranteEscogido(restaurante.nombre);
    }

    //Funcion para agregar el menu actual
    const seleccionarMenu = menu => {
        guardarMenuActual(menu._id); //fijar un menu actual
        guardarMenuEscogido(menu.nombre);
    }
    console.log(menuEscogido)

    //Extraer el restaurante
    return (
        <>
            <Container fluid>
                <Row>
                
                    <Col>

                        <DropdownButton className="py-2 px-5"  size="m" title={restauranteEscogido == '' ? (<span>Restaurante</span>) : <span>{restauranteEscogido}</span>}>
                        {restaurantes.map(restaurante=>(
                        <Dropdown.Item 
                        onClick={() => seleccionarRestaurante(restaurante)
                        }  
                        >{restaurante.nombre}</Dropdown.Item>
                        ))} 
                        <Dropdown.Divider/>
                        <Dropdown.Item as="button" onClick={() => setModalShow(true)}>Agregar Restaurante +</Dropdown.Item>
                        <AddRestaurant show={modalShow} onHide={() => setModalShow(false)} />
                    </DropdownButton>
                    </Col>

                    <Col>
                    <DropdownButton size="lg" title={restauranteEscogido == '' ? (<span>Primero escoge un restaurante</span>) : <span>Escoge un menu</span>, 
                menuEscogido !== '' ? (<span>{menuEscogido}</span>) : <span> Escoge un menu</span>
                }>
                        {menusrestaurante.map(menu=>(
                <Dropdown.Item 
                onClick={() => seleccionarMenu(menu)
                }  
                >{menu.nombre}</Dropdown.Item>
            ))}

                        <Dropdown.Item as="button" onClick={() => setModalShow2(true)}>Agregar Menu +</Dropdown.Item>
                        <AddMenu show={modalShow2} onHide={() => setModalShow2(false)} />

                  </DropdownButton>
                    </Col>
                    
                </Row>

                <Row>
                <Col xs={2} id="sidebar-wrapper">
                        <MenuSidebar />
                    </Col>
                    
                    <Col xs={10} id="page-content-wrapper">
                        <DishMenu />
                    </Col>
                </Row>
                
            </Container>
        </>
    );
};

export default Menu;
