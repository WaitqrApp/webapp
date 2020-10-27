import React from 'react';

import ordenes from './img/ordenes.png';

function Ordenesgrafica(){
    return(
        <div className="container-fluid text-center dashboard-componente">
        <div className="row">
          <div className="col-md-6" >
          <h1>Órdenes</h1>
          </div>
          <div className="col-md-6" >
          <h1>24,000/mes</h1>
          </div>
          </div>
          <div className="row">
          <div className="col-md-6">
                <h2>En curso <span><p><span> 13 ordenes</span></p></span></h2>
                
            </div>
            <div className="col-md-6">
            <select name="cars" id="cars">
    <option value="">Mes</option>
    <option value="Enero">Enero</option>
    <option value="Febrero">Febrero</option>
    <option value="Marzo">Marzo</option>
  </select>
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
                <img className="ordenes" src={ordenes}/>
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