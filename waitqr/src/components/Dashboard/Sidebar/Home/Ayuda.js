import React from 'react';
import './styles/home.css'
import help from '../../img/Help.png';
import { Row ,Container, Col} from 'react-bootstrap';


function Ayuda() {
    return (
        <Container className="container-fluid text-center dashboard-componente-ayuda">
            <Row className="row">
                <img className="help" src={help} />
                <Col sm={12} className="">
                    <h3> ¿Necesitas ayuda?</h3>
                </Col>
            </Row>
            <Row className="row">
                <Col sm={12} className="">
                    <div className="platillosdashboard">
                        <p>Podemos ayudarte con mas herramientas para manejar tu restaurante.</p>
                    </div>
                </Col>
            </Row>
            <Row className="row">
                <Col sm={12} className="">
                    <div className="platillosdashboard">
                        <button className="btn btn-warning">CONTACTANOS</button>
                    </div>
                </Col>
            </Row>
        </Container>

    );
}

export default Ayuda;