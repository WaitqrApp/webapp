import React, { useState, useEffect, useContext } from "react";
import AddDish from "./AddDish";
import Dish from "./Dish";
import seccionesContext from "../../../../context/secciones/seccionesContext";
import platillosContext from "../../../../context/platillos/platillosContext";
import { Row, Col, Card, CardDeck, Form, Container } from "react-bootstrap";
import "./menusidebar.css";
function DishMenu() {
  //Extraer si una seccion esta activa
  const seccionessContext = useContext(seccionesContext);
  const { seccionactual } = seccionessContext;

  //obtener la funcion del context de platillo
  const platillossContext = useContext(platillosContext);
  const { platilloseleccionado, platillosseccion, obtenerPlatillos } =
    platillossContext;

  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  //obtener platillos cuando carga el componente
  useEffect(() => {
    console.log("aqui andoi 1")
    
    if (seccionactual) {
      console.log("aqui ando 2")
      console.log(seccionactual._id);
      obtenerPlatillos(seccionactual._id); 
    }
  }, [seccionactual]); //para que corra solo una vez


  
  var quehay = localStorage.getItem("menuwebapp")
  //console.log(JSON.stringify(quehay))

  return (
    <>
      <div className="container-fluid">
        <Row className="contenedorPlatillos">
          {
            platillosseccion.length == 0 ? 
            <p> </p>
            :
            platillosseccion.map((platillo) => (
              <Dish platillo={platillo} />
            ))
          }
        </Row>
      </div>
      <AddDish
        className="boton-platillo-main"
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />
    </>
  );
}
export default DishMenu;
