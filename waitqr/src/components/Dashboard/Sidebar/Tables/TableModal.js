import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Modal, Card } from "react-bootstrap";
import '../Tables/styles/tables.css';
import sesionGeneralContext from '../../../../context/sesionesGenerales/sesionGeneralContext';
import sesionIndividualContext from '../../../../context/sesionesIndividuales/sesionIndividualContext';


function TableModal(mesa){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

     //Extraer si una seccion esta activa
 const sesionGeneralsContext = useContext(sesionGeneralContext);
 const {sesiongeneralmesa, obtenerSesionGeneral } = sesionGeneralsContext;

 const sesionIndividualsContext = useContext(sesionIndividualContext);
 const {sesionindividualsesiongeneral, obtenerSesionIndividual } = sesionIndividualsContext;

 const [sesiongeneralAuxId, guardarSesionGeneralAuxId] = useState("");

 
    const verDetalle = e => {
        obtenerSesionGeneral(mesa.mesa._id)
        var intento
        setShow(true)
    sesiongeneralmesa.map(sesiongeneral=>(
        intento = sesiongeneral._id))
        if(intento){
          console.log("intentandeando", intento)
          var resultado2 = obtenerSesionIndividual(intento)
          console.log(resultado2)
          //console.log("avanzando",sesionindividualsesiongeneral)
        }
    }
    
 
        //ToDo: mandar el intento a obtener sesion individual, obtener el length y mostrarlo como personas conectadas
        //el total lo podemos sacar de Orden
        //podemos sacar el total sumando platillos ordenados

        


   
    

    
    
   
    return(
        <>
      <Button className="boton-editar" size="m" block variant="primary" onClick={() => verDetalle()}>
        Ver Detalle
        </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalle de la mesa {mesa.mesa.numero}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            {sesiongeneralmesa.map(sesiongeneral=>(
                <span>Hora de Inicio: {sesiongeneral.horarioInicio}</span>
            ))}
            {/*<span>{intento}</span>*/}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          

        </Modal.Footer>
      </Modal>
    </>
    );
}

export default TableModal;