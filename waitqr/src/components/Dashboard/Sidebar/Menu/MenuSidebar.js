import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import './menusidebar.css'

const Side = props => {


    return (
        <>
            <Nav className="col-md-12 d-none d-md-block sidebar-menu"
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item className="mx-auto">
                    <Nav.Link className="sidebar-title" href="">Categorías</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-auto">
                    <Nav.Link className="sidebar-text-active" href="" active>Entradas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="sidebar-text" eventKey="">Pastas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="sidebar-text" eventKey="">Postres</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="sidebar-text" eventKey="">
                        Cena
                </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-auto">
                    <Nav.Link className="sidebar-sub-title" href="">+ Nueva Categoría</Nav.Link>
                </Nav.Item>
            </Nav>

        </>
    );
};
const MenuSidebar = withRouter(Side);
export default MenuSidebar