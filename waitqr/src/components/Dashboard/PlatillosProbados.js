import React from 'react';

function PlatillosProbados(){
    return(
        <div className="container-fluid text-center dashboard-componente" >
        <div className="row">
          <div className="col-md-12" >
          <p>Total de platillos probados</p>
          </div>
          </div>
          <div className="row">
          <div className="col-md-12">
                <p> imagen</p>
            </div>
          </div>
          <div className="row">
          <div className="col-md-6">
                <div className="platillosdashboard">
                   <span>Total de platillos</span> 
                </div>
            </div>
            <div className="col-md-6">
                <div className="platillosdashboard">
                   <span>Platillos probados</span> 
                </div>
            </div>
          </div>
          
        
      </div>
        
    );
}

export default PlatillosProbados;