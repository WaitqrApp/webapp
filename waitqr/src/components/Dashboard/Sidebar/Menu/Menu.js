import React, { useState } from "react";
import { Container, Row, Col, Card, Form, ButtonGroup, DropdownButton, SplitButton, Dropdown } from "react-bootstrap";
import { withRouter } from "react-router";
import MenuSidebar from './MenuSidebar';
import DishMenu from './DishMenu';
import './menusidebar.css';
import DishModal from './DishModal';

function Menu() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                    <DropdownButton size="lg" title="El Santo Chancho">
                        <Dropdown.Item eventKey="1">La Numero 20</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="2">El Santo Chancho Pedregal</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="3">La Casa del Pastor</Dropdown.Item>
                    </DropdownButton>
                    </Col>
                    <Col>
                    <DropdownButton size="lg" title="Menu Estandar">
                        <Dropdown.Item eventKey="1">Menu Estandar</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="2">Menu Navideño </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="3">Menu Mexicano</Dropdown.Item>
                    </DropdownButton>
                    </Col>
                </Row>
                    
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <MenuSidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <DishMenu />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Menu;
