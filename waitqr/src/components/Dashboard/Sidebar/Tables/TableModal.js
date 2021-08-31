import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Modal, Card } from "react-bootstrap";
import '../Tables/styles/tables.css';
import sesionGeneralContext from '../../../../context/sesionesGenerales/sesionGeneralContext';
import sesionIndividualContext from '../../../../context/sesionesIndividuales/sesionIndividualContext';
import mesasContext from '../../../../context/mesas/mesasContext';


function TableModal(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

     //Extraer si una seccion esta activa

     
     const mesassContext = useContext(mesasContext);
     const {mesa, mesaobtenida, obtenerUnaMesa } = mesassContext;
 const sesionGeneralsContext = useContext(sesionGeneralContext);
 const {sesiongeneralmesa, obtenerSesionGeneral } = sesionGeneralsContext;

 const sesionIndividualsContext = useContext(sesionIndividualContext);
 const {sesionindividualsesiongeneral, obtenerSesionIndividual } = sesionIndividualsContext;


    const verDetalle = e => {
      
      
      console.log("llego esta mesa" + JSON.stringify(mesa))
      obtenerUnaMesa(mesa)
        obtenerSesionGeneral(mesaobtenida._id) 
      
        var intento
        sesiongeneralmesa.map(sesiongeneral=>(
          intento = sesiongeneral._id))
          if(intento){
            obtenerSesionIndividual(intento)
          }
        setShow(true)
      
        
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
        {
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalle de la mesa {mesaobtenida.numero}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            {sesiongeneralmesa.map(sesiongeneral=>(
                <span>Hora de Inicio: {sesiongeneral.horarioInicio}</span>
            ))}
            <br/>
           {
              
              <span>Numero de personas en la mesa: {sesionindividualsesiongeneral.length}</span>
             }
            {/*<span>{intento}</span>*/}
          </Container>
        </Modal.Body>
        <Modal.Footer>
        <Button className="boton-cerrar" size="m" variant="primary" onClick={() => cerrarMesa()}>
        Finalizar Sesion
        </Button>

        </Modal.Footer>
      </Modal>
        }
      
    </>
    );
}

export default TableModal;