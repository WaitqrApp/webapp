import React from 'react';

import ordenes from './img/ordenes.png';

function Ordenesgrafica(){
    return(
        <div class="container-fluid text-center dashboard-componente">
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
                <h2>En curso <span><p1><span> 13 ordenes</span></p1></span></h2>
                
            </div>
            <div className="col-md-6">
            <div class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Mes
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Enero</a>
                    <a class="dropdown-item" href="#">Febrero</a>
                    <a class="dropdown-item" href="#">Marzo</a>
                    <a class="dropdown-item" href="#">Abril</a>
                    <a class="dropdown-item" href="#">Mayo</a>
                    <a class="dropdown-item" href="#">Junio</a>
                    <a class="dropdown-item" href="#">Julio</a>
                    <a class="dropdown-item" href="#">Agosto</a>
                    <a class="dropdown-item" href="#">Septiembre</a>
                    <a class="dropdown-item" href="#">Octubre</a>
                    <a class="dropdown-item" href="#">Noviembre</a>
                    <a class="dropdown-item" href="#">Diciembre</a>
                </div>
                </div>
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
                <img class="ordenes" src={ordenes}/>
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