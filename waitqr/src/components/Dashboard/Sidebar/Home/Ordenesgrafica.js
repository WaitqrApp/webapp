import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ordenes from '../../img/ordenes.png';

function Ordenesgrafica() {
  return (
    <div className="container-fluid text-center p-0 dashboard-componente">
      <div className="row">
        <div className="col-md-6" >
          <h1>Órdenes</h1>
        </div>
        <div className="col-md-6" >
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>En curso <span><p><span> 13 ordenes</span></p></span></h2>

        </div>
        <div className="col-md-6" id="month-button">
          <DropdownButton id="dropdown-item-button" title="Mes">
            <Dropdown.ItemText>Noviembre</Dropdown.ItemText>
            <Dropdown.Item>Enero</Dropdown.Item>
            <Dropdown.Item>Febrero</Dropdown.Item>
            <Dropdown.Item>Marzo</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div >
          </div>
        </div>

      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="platillosdashboard">
            <img className="ordenes" src={ordenes} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="platillosdashboard">
          </div>
        </div>
      </div>


    </div>

  );
}

export default Ordenesgrafica;