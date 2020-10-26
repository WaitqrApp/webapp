import React from 'react';

import platillos from './img/total-platillos.png';

function PlatillosProbados(){
    return(
        <div className="container-fluid text-center dashboard-componente" >
        <div className="row">
          <div className="col-md-12" >
          <h1>Total de platillos probados</h1>
          </div>
          <img class="platillos-probados" src={platillos}/>
          </div>
          <div className="row">
          <div className="col-md-12">
            </div>
          </div>
          <div className="row">
          <div className="col-md-6">
                <div className="platillosdashboard">
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

export default PlatillosProbados;