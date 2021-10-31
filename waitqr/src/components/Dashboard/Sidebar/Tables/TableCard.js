import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
  Card,
} from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "../Tables/styles/tables.css";

import TableModal from "./TableModal";
import mesasContext from "../../../../context/mesas/mesasContext";

function TableCard({ mesas }) {
  const mesassContext = useContext(mesasContext);
  const { mesa, guardarMesaActual } = mesassContext;

  const [modalShow, setModalShow] = useState(false);

  const seleccionarMesa = (mesas) => {
    console.log("voy a guardar esta mesa" + JSON.stringify(mesas._id));
    guardarMesaActual(mesas._id);
  };

  return (
    <Fragment>
      <Card className="tarjeta-mesa mr-3">
        <Card.Title className="mt-3 text-center font-weight-bold">
          {mesas.numero}
        </Card.Title>
        <Card.Body>
          <Nav.Item className="mx-auto">
            <TableModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              mesas={mesas}
            />
          </Nav.Item>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default TableCard;
