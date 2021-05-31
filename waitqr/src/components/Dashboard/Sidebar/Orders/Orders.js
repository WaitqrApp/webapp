import React, {useContext, useEffect, useState} from 'react';
import OrderCard from './OrderCard';
import { Dropdown, DropdownButton, Col, Row, Container } from 'react-bootstrap';
import './styles/orders.css'

import restauranteContext from '../../../../context/restaurantes/restauranteContext';
import ordenContext from '../../../../context/ordenes/ordenContext';

import AlertaContext from '../../../../context/alertas/alertaContext';

function Orders() {

    const [restauranteEscogido, guardarRestauranteEscogido] = useState('');
    const [restauranteEscogidoId, guardarRestauranteEscogidoId] = useState('');
    //Extraer restaurantes de state inicial
    const restaurantesContext = useContext(restauranteContext);
    const { mensaje, restaurantes, obtenerRestaurantes, restauranteActual } = restaurantesContext;

    const ordenesContext = useContext(ordenContext);
    const { ordenrestaurante, obtenerOrdenRestaurante } = ordenesContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;


     //obtener restaurantes cuando carga el componente
     useEffect(() => {

        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }


        obtenerRestaurantes();

    }, [mensaje]); //para que corra solo una vez

    const seleccionarRestaurante = restaurante => {
        restauranteActual(restaurante._id); //fijar un restaurante actual
        guardarRestauranteEscogido(restaurante.nombre);
        guardarRestauranteEscogidoId(restaurante._id);
        console.log(restaurante._id)
        obtenerOrdenRestaurante(restaurante._id)
        
    }
    
    

    return (
        <Container fluid className="">
            <Row>
                <Col sm={8}></Col>
                {/*
                <Col xs={2} className="dropdown-seccion">
                    <Dropdown block>
                        <Dropdown.Toggle block
                            menuAlign="right"
                            title="Sección"
                            id="dropdown-menu-align-right">
                            Cocina
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Bar</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                   */ }
                <Col sm={2} className="dropdown-restaurante">
                <DropdownButton className="dropdown-restaurante restaurant-button btn-group gtn-block" size="m" title={restauranteEscogido == '' ? (<span>Restaurante</span>) : <span>{restauranteEscogido}</span>}>
                            {restaurantes.map(restaurante => (
                                <Dropdown.Item
                                    onClick={() => seleccionarRestaurante(restaurante)
                                    }
                                >{restaurante.nombre}</Dropdown.Item>
                            ))}
                        </DropdownButton>
                </Col>
            </Row> 
            <Row className="tarjeta-orden">
            
            {ordenrestaurante.map(orden =>(
                <Col sm={4} className=" text-left tarjeta-orden" >
                    
                        <OrderCard
                            orden = {orden}
                        />
                    
                    
                </Col>
                ))}
            
            
            </Row>
        </Container>
    );
}

export default Orders;