import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import './history.css';

function History() {
    return (
        <>
        <Button className="boton-descargar" >Descargar</Button>
        <Button className="boton-filtrar" >Filtro</Button>
        <Dropdown>
            <Dropdown.Toggle className = "dropdown-restaurantes"
                        menuAlign="right"
                        title="La Noria"
                        id="dropdown-menu-align-right">
                    La Noria
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">El Restauro</Dropdown.Item>
            </Dropdown.Menu> 
        </Dropdown>
        <Table striped bordered hover>
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
            

        </Table>

        </>
        
    );
}

export default History;

