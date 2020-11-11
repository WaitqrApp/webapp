import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
function History() {
    return (
        <Table striped bordered hover>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    La Noria
            </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Santo Chancho</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">La Noria Polanco</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">La Noria Puebla</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <thead>
                <tr>
                    <th># de orden</th>
                    <th>Mesa</th>
                    <th>Detalles</th>
                    <th>Cuenta</th>
                    <th>Restaurante</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Salon 1</td>
                    <td>Diablo Roll y Carajillo</td>
                    <td>$3,500.00</td>
                    <td>Santo Chancho Centro</td>
                    <td>23/06/2020</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Terraza 2</td>
                    <td>Diablo Roll y Carajillo</td>
                    <td>$3,500.00</td>
                    <td>Santo Chancho Queret</td>
                    <td>23/06/2020</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Terraza 1</td>
                    <td>@twitter</td>
                    <td>$3,500.00</td>
                    <td>La Central de Brasil</td>
                    <td>23/06/2020</td>
                </tr>
            </tbody>
            <Button variant="success">Descargar</Button>
            <Button variant="info">Filtro</Button>

        </Table>
    );
}

export default History;
