import React, {useState} from "react";
import { Nav, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import './menusidebar.css';
import AddCategory from './AddCategory';

function MenuSidebar(){
    const [modalShow, setModalShow] = useState(false);


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
                    <Nav.Link className="boton-categoria" href="">
                    <Button variant="primary" size="lg" block onClick={() => setModalShow(true)}>
                                Agregar Categoría
                            </Button>
                        <AddCategory show={modalShow} onHide={() => setModalShow(false)} />

                        </Nav.Link>
                </Nav.Item>
            </Nav>

        </>
    );
};
export default MenuSidebar