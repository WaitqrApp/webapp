import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Card, CardDeck, Form, Container, Button } from "react-bootstrap";
import DishModal from "./DishModal";
import "./menusidebar.css";

import seccionesContext from "../../../../context/secciones/seccionesContext";


import platillosContext from "../../../../context/platillos/platillosContext";

function Dish(platillo) {
  //CONTEXT
  const platillosContextLocal = useContext(platillosContext);
  const {
    platilloseleccionado,
    errorplatillo,
    agregarPlatillo,
    validarPlatillo,
    obtenerPlatillos,
    actualizarPlatillo,
    limpiarPlatillo,
    eliminarPlatillo,
  } = platillosContextLocal;

  const seccionessContext = useContext(seccionesContext);
  const { seccionactual } = seccionessContext;

  const [modalShow, setModalShow] = useState(false);

  const platilloAuxInicial = platillo.platillo;

  const [platilloAux, guardarPlatilloAux] = useState(platilloAuxInicial);

  const onClickEliminarPlatillo = (e) => {
    eliminarPlatillo(platillo.platillo._id, platillo.platillo.seccion);
    obtenerPlatillos(seccionactual._id)
  };

  const onGuardarPlatillo = (e) => {
    console.log(platilloAux)
    actualizarPlatillo(platilloAux);
    setModalShow(false);
  };

  const handleChange = (e) => {
    guardarPlatilloAux({
      ...platilloAux,
      [e.target.name]: e.target.value,
    });
  };

  var favorito;
  if (platillo.platillo.favorito == true) {
    favorito = "star";
  } else {
    favorito = "star_outline";
  }

  const agregarFavorito = platillo => {
    obtenerPlatillos(platillo.seccion)
    console.log("este es el platillo que recibo", platillo)
    platillo.favorito = !platillo.favorito;
    actualizarPlatillo(platillo);
  };

  return (
    <CardDeck className="platillo-card overflow-y-scroll">
      <Card className="mb-4 mt-2">
        <Card.Img
          className="imagen-platillo"
          variant="top"
          src={platillo.platillo.imagenPlatillo}
        ></Card.Img>
        {/*  <Card.Img variant="top" src={platillo.platillo.imagenPlatillo}></Card.Img>  */}
        <Card.Body>
          <Card.Title className="font-weight-bold">
            <Row>
              <Col>
                {/* {platillo.imagenPlatillo} */}
                {platillo.platillo.nombre}
              </Col>
            </Row>
            <Row>
              <Col m={8}>
                <Form.Check
                  className="platillo-disponible mt-2"
                  type="switch"
                  onClick={() =>
                    guardarPlatilloAux((platilloAux) => {
                      const nuevoPlatillo = {
                        ...platilloAux,
                        disponible: !platilloAux.disponible,
                      };
                      /* console.log(nuevoPlatillo); */
                      actualizarPlatillo(nuevoPlatillo);
                      return nuevoPlatillo;
                    })
                  }
                  checked={platilloAux.disponible}
                ></Form.Check>
              </Col>
              <Col m={4}>
                <span
                  class="material-icons favorito"
                  onClick={() => agregarFavorito(platillo.platillo)}
                >
                  {favorito}
                </span>
              </Col>
            </Row>
          </Card.Title>
          <Card.Text className="descripcion-platillo">
            {platillo.platillo.descripcion}
          </Card.Text>
          <Card.Text className="descripcion-platillo">
            <span>
              <span>$</span>
              {platillo.platillo.precio}
            </span>
          </Card.Text>
          <Row>
          
            <DishModal
              className="boton-editar"
              setModalShow={setModalShow}
              modalShow={modalShow}
              platillo={platillo.platillo}
            />
          </Row>
          <Row></Row>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}

export default Dish;
