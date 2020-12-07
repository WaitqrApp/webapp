import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Tables/styles/tables.css';
import TableCard from './TableCard';
import { Dropdown, DropdownButton, Col, Row } from 'react-bootstrap';

function Tables() {
    return (
        <div className="container-fluid dashboard-componente-mesas mt-4 mb-4">
            <div className="row">
            <Col md = "auto">
                    <DropdownButton
                        className = "dropdown-restaurante-mesas"
                        menuAlign="right"
                        title="La Noria"
                        id="dropdown-menu-align-right">
                        <Dropdown.Item eventKey="1">La Noria</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="2">El Restauro</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <div className="col-md-6 text-left contenido-mesas" >
                    <TableCard></TableCard>
                </div>
            </div>
        </div>
    );
}

export default Tables;