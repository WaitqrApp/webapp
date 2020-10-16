import React from 'react';

function Ordenesgrafica(){
    return(
        <div class="container-fluid text-center dashboard-componente">
        <div className="row">
          <div className="col-md-6" >
          <p>Total de platillos probados</p>
          </div>
          <div className="col-md-6" >
          <p>24,000/mes</p>
          </div>
          </div>
          <div className="row">
          <div className="col-md-6">
                <p>En curso <span> 13 ordenes</span></p>
            </div>
            <div className="col-md-6">
            <div class="btn-group">
                <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Mes
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Enero</a>
                    <a class="dropdown-item" href="#">Febrero</a>
                    <a class="dropdown-item" href="#">Marzo</a>
                </div>
                </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-12">
                <div >
                   <p> imagen</p>
                </div>
            </div>
            
          </div>
          <div className="row">
          <div className="col-md-6">
                <div className="platillosdashboard">
                   <span>Entregados</span> 
                </div>
            </div>
            <div className="col-md-6">
                <div className="platillosdashboard">
                   <span>En proceso</span> 
                </div>
            </div>
          </div>
          
        
      </div>
        
    );
}

export default Ordenesgrafica;