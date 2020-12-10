import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
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
                    <Col xs={2} id="sidebar-wrapper">
                        <MenuSidebar/>
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <DishMenu />
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        <DishMenu />
                    </Col>

                </Row>

            </Container>
        </>
    );
};

export default Menu;