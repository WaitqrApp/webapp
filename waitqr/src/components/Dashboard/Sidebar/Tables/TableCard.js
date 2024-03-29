import React, { Fragment, useContext, useEffect, useState, useRef } from "react";
import {
  Button,
  Card,
} from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "../Tables/styles/tables.css";
import { QRCode } from "react-qr-svg";
import QRCodeStyling from "qr-code-styling";

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

  const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    image:
      "https://res.cloudinary.com/waitqrapp/image/upload/v1637608056/logo_waiter-Q_u7rm1d.png",
    dotsOptions: {
      color: "#013047",
      type: "rounded",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 20,
    },
  });
  const [url, setUrl] = useState(`https://clientewaitqr.netlify.app/${mesas.restaurante}/${mesas._id}`);
  const [fileExt, setFileExt] = useState("png");
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);
  useEffect(() => {
    qrCode.update({
      data: url,
    });
  }, [url]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      name: `${mesas.numero}`,
      extension: fileExt,
    });
  };

  return (
    <Fragment>
      <Card className="tarjeta-mesa mr-3 mb-2">
        <Card.Title className="mt-3 text-center font-weight-bold">
          {mesas.numero}
        </Card.Title>
        <Card.Body>
          <div className="text-center mt-4">
             <QRCode
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="Q"
              style={{ width: 100 }}
              value={`clientewaitqr.netlify.app/${mesas.restaurante}/${mesas._id}`}
            /> 
            <p>{`clientewaitqr.netlify.app/${mesas.restaurante}/${mesas._id}`}</p>
            <p></p>
            <button className="btn-secondary-qr" variant="info" onClick={onDownloadClick}>Descargar QR</button>
          </div>
          <Nav.Item className="mx-auto mt-4">
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
