import React, { useState, useEffect, useContext } from "react";
import AddDish from './AddDish';
import Dish from './Dish';
import seccionesContext from '../../../../context/secciones/seccionesContext';
import platillosContext from '../../../../context/platillos/platillosContext';
import { Row, Col, Card, CardDeck, Form, Container } from "react-bootstrap";
import './menusidebar.css'
function DishMenu() {
    //Extraer si una seccion esta activa
    const seccionessContext = useContext(seccionesContext);
    const { seccion } = seccionessContext;

    //obtener la funcion del context de platillo
    const platillossContext = useContext(platillosContext);
    const { platilloseleccionado, platillosseccion, obtenerPlatillos } = platillossContext;

    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    //obtener platillos cuando carga el componente
    useEffect(() => {

        if (seccion) {
            console.log(seccion[0]._id)
            obtenerPlatillos(seccion[0]._id)
        }
    }, [seccion]); //para que corra solo una vez
    return (
        <> 
         <div className="container-fluid"  >
        <Row className="contenedorPlatillos">
      
            {console.log("entre a los platillos")}
            {platillosseccion.map(platillo => (
                    <Dish platillo={platillo}/>
            ))}
            
            </Row>
            </div>
            <AddDish className="boton-platillo-main" show={modalShow2} onHide={() => setModalShow2(false)} />
        </>
    );
}
export default DishMenu;

