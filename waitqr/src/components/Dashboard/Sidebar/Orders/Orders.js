import React from 'react';
import OrderCard from './OrderCard';
import { Dropdown, DropdownButton, Col, Row } from 'react-bootstrap';
function Orders() {
    return (
        <div className="container-fluid dashboard-componente-mesas mt-4 mb-4">
            <Row>
                <Col xs lg ="2">
                    Ordenes
                </Col>
                <Col md = "auto">
                    <DropdownButton
                        menuAlign="right"
                        title="La Noria"
                        id="dropdown-menu-align-right"
                    >
                        <Dropdown.Item eventKey="1">La Noria Pedregal</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="2">Santo Chancho</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="3">Santo Chancho Haye</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Irmaos Steaks and Burgers</Dropdown.Item>
                    </DropdownButton>

                </Col>
                <Col xs lg="2">
                <DropdownButton
                    menuAlign="right"
                    title="Restaurante"
                    id="dropdown-menu-align-right"
                >
                    <Dropdown.Item eventKey="1">Restaurante</Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Irmaos Bar</Dropdown.Item>
                </DropdownButton>
                </Col>

            </Row>


            <div className="row">
                <div className="col-md-6 text-left contenido-mesas" >
                    <OrderCard></OrderCard>

                </div>
            </div>
        </div>
    );
}

export default Orders;