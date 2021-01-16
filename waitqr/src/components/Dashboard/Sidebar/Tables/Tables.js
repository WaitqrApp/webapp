import React, {useContext,useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import '../Tables/styles/tables.css';
import TableCard from './TableCard';
import { Dropdown, DropdownButton, Col, Row } from 'react-bootstrap';

import restauranteContext from '../../../../context/restaurantes/restauranteContext'; 
import AlertaContext from '../../../../context/alertas/alertaContext';
import mesasContext from '../../../../context/mesas/mesasContext'; 




function Tables() {

    const [modalShow, setModalShow] = useState(false);
    const [restauranteEscogido, guardarRestauranteEscogido] = useState('');

    //Extraer restaurantes de state inicial
    const restaurantesContext = useContext(restauranteContext);
    const {mensaje, restaurantes, obtenerRestaurantes, restauranteActual} = restaurantesContext;

    const mesassContext = useContext(mesasContext);
    const {mesasrestaurante, eliminarMesa, obtenerMesas, actualizarMesa, guardarMesaActual} = mesassContext;

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    //obtener restaurantes cuando carga el componente
    useEffect(() =>{

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        

        obtenerRestaurantes();
    }, [mensaje]); //para que corra solo una vez


     //Funcion para agregar el restaurante actual
   const seleccionarRestaurante = restaurante =>{
    restauranteActual(restaurante._id); //fijar un restaurante actual
    obtenerMesas(restaurante._id);
    guardarRestauranteEscogido(restaurante.nombre);
}
    return (
        <div className="container-fluid dashboard-componente-mesas mt-4 mb-4">
            <div className="row">
            <Col md = "auto">
                    <DropdownButton
                        className = "dropdown-restaurante-mesas"
                        menuAlign="right"
                        title={restauranteEscogido == '' ? (<span>Escoge un restaurante</span>) : <span>{restauranteEscogido}</span>}
                        id="dropdown-menu-align-right">
                         {restaurantes.map(restaurante=>(
                         <Dropdown.Item 
                onClick={() => seleccionarRestaurante(restaurante)
                }  
                >{restaurante.nombre}</Dropdown.Item>
                 ))}
                    </DropdownButton>
                </Col>
                <div className="col-md-6 text-left contenido-mesas" >
                {mesasrestaurante.map(mesa=>(
        <TableCard
            mesa = {mesa}
        />
        ))}
                    
                </div>
            </div>
        </div>
    );
}

export default Tables;