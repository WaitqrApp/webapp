import React from 'react';
import OrderCard from './OrderCard';
import { Dropdown, DropdownButton, Col, Row, Container } from 'react-bootstrap';
import './styles/orders.css'

function Orders() {
    return (
        <Container fluid dclassName="container-fluid">
            <Row>
                <Col sm={8}></Col>
                <Col xs={2} className="dropdown-seccion">
                    <Dropdown block>
                        <Dropdown.Toggle block
                            menuAlign="right"
                            title="Sección"
                            id="dropdown-menu-align-right">
                            Cocina
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Bar</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col sm={2} className="dropdown-restaurante">
                    <Dropdown block>
                        <Dropdown.Toggle block
                            menuAlign="right"
                            title="Restaurante"
                            id="dropdown-menu-align-right">
                            La Noria
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>El Restauro</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <Row className="tarjeta-orden">
                <Col sm={12} className=" text-left tarjeta-orden" >
                    <OrderCard></OrderCard>
                </Col>
            </Row>
        </Container>
    );
}

export default Orders;