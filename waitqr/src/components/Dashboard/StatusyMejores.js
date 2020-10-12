import React, { Fragment } from 'react';

function StatusyMejores(){
    return(
        <Fragment>
        <div class="container-fluid text-center dashboard-componente-status">
        <div className="row">
          <div className="col-md-4" >
          <p>Mesas</p>
          <p> 50</p>
          </div>
          <div className="col-md-4" >
          <p>Capacidad</p>
          <p>96%</p>

          </div>
          <div className="col-md-4" >
          <p>Status</p>
          <p>Abierto</p>

          </div>
          </div>
      </div>


        

        <div class="container-fluid text-center dashboard-componente-mejores">
        <div className="row">
                <div className="col-md-12 text-left" >
                <p>Mejores dias</p>
                
                </div>
               
                </div>
                <div className="row">
                <div className="col-md-6" >
                <p>08-09-2020</p>
                <p> 320 ordenes entregadas</p>
                </div>
                <div className="col-md-6" >
                <p>64,000 MXN</p>
                

                </div>
                </div>
                <div className="row">
                <div className="col-md-6" >
                <p>08-09-2020</p>
                <p> 320 ordenes entregadas</p>
                </div>
                <div className="col-md-6" >
                <p>64,000 MXN</p>
                

                </div>
                </div>
                <div className="row">
                <div className="col-md-6" >
                <p>08-09-2020</p>
                <p> 320 ordenes entregadas</p>
                </div>
                <div className="col-md-6" >
                <p>64,000 MXN</p>
                

                </div>
                </div>
            </div>

      </Fragment>
      
        
    );
}

export default StatusyMejores;