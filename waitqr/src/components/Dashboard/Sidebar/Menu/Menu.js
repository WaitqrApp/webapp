import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import MenuSidebar from './MenuSidebar';
import DishMenu from './DishMenu';
import './menusidebar.css';
import DishModal from './DishModal';
const Dash = props => {

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
                        <>
                            <Button variant="primary" onClick={() => setModalShow(true)}>
                                  Editar Platillo
                            </Button>

                            <DishModal show={modalShow} onHide={() => setModalShow(false)} />
                        </>
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
const Dashboard = withRouter(Dash);
export default Dashboard