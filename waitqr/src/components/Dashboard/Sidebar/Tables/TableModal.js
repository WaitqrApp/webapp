import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Modal, Card } from "react-bootstrap";
import '../Tables/styles/tables.css';
import sesionGeneralContext from '../../../../context/sesionesGenerales/sesionGeneralContext';
import sesionIndividualContext from '../../../../context/sesionesIndividuales/sesionIndividualContext';
import mesasContext from '../../../../context/mesas/mesasContext';


function TableModal({mesas}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const mesassContext = useContext(mesasContext);
    const {mesa, mesaobtenida, obtenerUnaMesa } = mesassContext;
    const sesionGeneralsContext = useContext(sesionGeneralContext);
    const {sesiongeneralmesa, obtenerSesionGeneral, eliminarSesionGeneral } = sesionGeneralsContext;

    const sesionIndividualsContext = useContext(sesionIndividualContext);
    const {sesionindividualsesiongeneral, obtenerSesionIndividual } = sesionIndividualsContext;

 useEffect(() => {

  if(!sesiongeneralmesa.length){
    console.log("cai en undefined")
  }
  else{
   
    llamadaSesionIndividual();
  }
  },[sesiongeneralmesa]); //para que corra solo una vez

  const llamadaSesionIndividual = e=>{
  obtenerSesionIndividual(sesiongeneralmesa[0]._id)
  }

    const verDetalle = e => {
        obtenerSesionGeneral(mesas._id)     
        setShow(true)
    }

    const cerrarMesa = e => {
      eliminarSesionGeneral(
        sesiongeneralmesa[0]._id,
        sesiongeneralmesa[0].mesa 
      );
      setShow(false)
    }
   
    return(
        <>
      <Button className="boton-detalle-mesa" size="m" variant="primary" onClick={() => verDetalle()}>
        Ver Detalle
        </Button>
        {
          sesiongeneralmesa[0]? 
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Detalle de la mesa {mesas.numero}</Modal.Title>
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
      :
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Detalle de la mesa {mesas.numero}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            
            <p>no hay personas en la mesa</p>
           
          </Container>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
}
      
    </>
    );
}

export default TableModal;