import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import './menusidebar.css'

const Side = props => {


    return (
        <>

            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Nav.Link href="/home">Entradas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Pastas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Postres</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Cena
                </Nav.Link>
                </Nav.Item>
            </Nav>

        </>
    );
};
const MenuSidebar = withRouter(Side);
export default MenuSidebar