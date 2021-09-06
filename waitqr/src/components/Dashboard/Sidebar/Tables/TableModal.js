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
        var idSesionGeneral
         sesiongeneralmesa.map(sesiongeneral=>(
          idSesionGeneral = sesiongeneral._id))
          if(idSesionGeneral){
            console.log("intentandeando", idSesionGeneral)
            var resultado2 = obtenerSesionIndividual(idSesionGeneral)
            console.log("este es el resultado"+ JSON.stringify(resultado2))
            console.log("esta es la sesion individual general" + sesionindividualsesiongeneral)
            console.log("esta es la lenght " + sesionindividualsesiongeneral.length)

          }
        setShow(true)
        /*
    
          //console.log("avanzando",sesionindividualsesiongeneral)
        }*/
    }

    const cerrarMesa = e => {
      setShow(false)
    }
    
 
        //ToDo: cerrar la mesa

        
    return(
        <>
      <Button className="boton-detalle-mesa" size="m" variant="primary" onClick={() => verDetalle()}>
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
            <br/>
           {<span>Numero de personas en la mesa: {sesionindividualsesiongeneral.length}</span>}
            {/*<span>{idSesionGeneral}</span>*/}
          </Container>
        </Modal.Body>
        <Modal.Footer>
        <Button className="boton-cerrar" size="m" variant="primary" onClick={() => cerrarMesa()}>
        Finalizar Sesion
        </Button>

        </Modal.Footer>
      </Modal>
    </>
    );
}

export default TableModal;