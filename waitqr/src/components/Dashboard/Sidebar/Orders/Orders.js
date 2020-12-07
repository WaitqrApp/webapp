import React from 'react';
import OrderCard from './OrderCard';
import { Dropdown, DropdownButton, Col, Row } from 'react-bootstrap';
import './styles/orders.css'

function Orders() {
    return (
        <div className="container-fluid dashboard-componente-mesas mt-4 mb-4">
            <Row>
                <Col md = "auto">
                    <DropdownButton
                        className = "dropdown-restaurante"
                        menuAlign="right"
                        title="La Noria"
                        id="dropdown-menu-align-right">
                        <Dropdown.Item eventKey="1">La Noria</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="2">El Restauro</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col xs lg="2">
                <DropdownButton
                    className="dropdown-seccion"
                    menuAlign="right"
                    title="Restaurante"
                    id="dropdown-menu-align-right"
                    >
                    <Dropdown.Item eventKey="1">Cocina</Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Bar</Dropdown.Item>
                </DropdownButton>
                </Col>
            </Row>
            <div className="row">
                <div className="col-md-6 text-left tarjeta-orden" >
                    <OrderCard></OrderCard>
                </div>
            </div>
        </div>
    );
}

export default Orders;