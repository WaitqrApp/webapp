import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Modal, Card } from "react-bootstrap";
import { Nav} from "react-bootstrap";
import '../Tables/styles/tables.css';

import TableModal from './TableModal';
import mesasContext from '../../../../context/mesas/mesasContext';






function TableCard({mesas}) {

  const mesassContext = useContext(mesasContext);
  const {mesa, guardarMesaActual } = mesassContext;

    const [modalShow, setModalShow] = useState(false);

    const seleccionarMesa = mesas =>{
      console.log("voy a guardar esta mesa" + JSON.stringify(mesas._id))
      guardarMesaActual(mesas._id)
  }

  return (
    <Fragment>
    <Card className="tarjeta-mesa" style={{ width: '18rem', height: "11rem", justifyContent: 'center' }}>
                        <Card.Body>
                            <Card.Title className="text-center font-weight-bold">
                               {mesas.numero}
                            </Card.Title>

                            <Nav.Item className="mx-auto">
                  
                    <Button className="boton-editar-seccion" variant="light" onClick={() => seleccionarMesa(mesas)}>
                    <TableModal show={modalShow} onHide={() => setModalShow(false)}
                                    
                                />
                         </Button>
                    
                </Nav.Item>

                           
                        </Card.Body>
                    </Card>
    </Fragment>
  );
}

export default TableCard;