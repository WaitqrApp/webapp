import React, { Fragment } from 'react';

function StatusyMejores(){
    return(
        <Fragment>
        <div className="container-fluid text-center dashboard-componente-status">
        <div className="row">
          <div className="col-md-4" id="restaurante-ahora" >
            <h1>Mesas</h1>
            <p> 50</p>
          </div>
          <div className="col-md-4" id="restaurante-ahora" >
            <h1>Capacidad</h1>
            <p>96%</p>
          </div>
          <div className="col-md-4" id="restaurante-ahora">
            <h1>Status</h1>
            <p>Abierto</p>
          </div>
        </div>
      </div>


        

        <div className="container-fluid text-center dashboard-componente-mejores">
        <div className="row">
                <div className="col-md-12 text-left" >
                  <h1>Mejores dias</h1>
                </div>
               
                </div>
                  <div className="row">
                    <div className="col-md-6" >
                      <h2>08-09-2020</h2>
                      <p> 320 ordenes entregadas</p>
                    </div>
                  <div className="col-md-6" >
                  <h2>64,000 MXN</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6" >
                    <h2>08-09-2020</h2>
                    <p> 320 ordenes entregadas</p>
                  </div>
                <div className="col-md-6" >
                  <h2>64,000 MXN</h2>
                

                </div>
                </div>
                <div className="row">
                <div className="col-md-6" >
                <h2>08-09-2020</h2>
                <p> 320 ordenes entregadas</p>
                </div>
                <div className="col-md-6" >
                <h2>64,000 MXN</h2>
                

                </div>
                </div>
            </div>

      </Fragment>
      
        
    );
}

export default StatusyMejores;