import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import MenuSidebar from './MenuSidebar';
import DishMenu from './DishMenu';
import './menusidebar.css';

const Dash = props => {


    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <MenuSidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <h1>El Santo Chancho</h1>
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
const Dashboard = withRouter(Dash);
export default Dashboard