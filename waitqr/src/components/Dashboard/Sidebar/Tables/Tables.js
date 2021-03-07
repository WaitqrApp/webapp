import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../Tables/styles/tables.css';
import TableCard from './TableCard';
import { Dropdown, DropdownButton, Col, Row, Container } from 'react-bootstrap';

import restauranteContext from '../../../../context/restaurantes/restauranteContext';
import AlertaContext from '../../../../context/alertas/alertaContext';
import mesasContext from '../../../../context/mesas/mesasContext';




function Tables() {

    const [modalShow, setModalShow] = useState(false);
    const [restauranteEscogido, guardarRestauranteEscogido] = useState('');

    //Extraer restaurantes de state inicial
    const restaurantesContext = useContext(restauranteContext);
    const { mensaje, restaurantes, obtenerRestaurantes, restauranteActual } = restaurantesContext;

    const mesassContext = useContext(mesasContext);
    const { mesasrestaurante, eliminarMesa, obtenerMesas, actualizarMesa, guardarMesaActual } = mesassContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    //obtener restaurantes cuando carga el componente
    useEffect(() => {

        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }


        obtenerRestaurantes();
    }, [mensaje]); //para que corra solo una vez


    //Funcion para agregar el restaurante actual
    const seleccionarRestaurante = restaurante => {
        restauranteActual(restaurante._id); //fijar un restaurante actual
        obtenerMesas(restaurante._id);
        guardarRestauranteEscogido(restaurante.nombre);
    }
    return (
        <Container>
            <Row>
                <Col sm={10}></Col>
                <Col sm={2} className="dropdown-restaurante btn-group btn-block">
                    <Dropdown>
                        <DropdownButton
                            menuAlign="right"
                            title={restauranteEscogido == '' ? (<span>Restaurante</span>) : <span>{restauranteEscogido}</span>}
                            id="dropdown-menu-align-right">
                            {restaurantes.map(restaurante => (
                                <Dropdown.Item
                                    onClick={() => seleccionarRestaurante(restaurante)
                                    }
                                >{restaurante.nombre}</Dropdown.Item>
                            ))}
                        </DropdownButton>
                    </Dropdown>
                </Col>
            </Row>
            <Row></Row>
            <Row>
                <Col sm={12} className="contenido-mesas text-left" >
                    {mesasrestaurante.map(mesa => (
                        <TableCard
                            mesa={mesa}
                        />
                    ))}
                </Col>
            </Row>
        </Container>
    );
}

export default Tables;