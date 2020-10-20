import React from 'react';

function Ayuda(){
    return(
        <div className="container-fluid text-center dashboard-componente mt-4">
        <div className="row">
          <div className="col-md-12" >
          <p>imagen</p>
          </div>
          </div>
          <div className="row">
          <div className="col-md-12">
                <h1> ¿Necesitas ayuda?</h1>
            </div>
          </div>
          <div className="row">
          <div className="col-md-12">
                <div className="platillosdashboard">
                   <p>Podemos ayudarte con mas herramientas para manejar tu restaurante.</p> 
                </div>
            </div>
      </div>
      <div className="row">
          <div className="col-md-12">
                <div className="platillosdashboard">
                   <button className="btn btn-warning">CONTACTANOS</button>
                </div>
            </div>
      </div>


      </div>
        
    );
}

export default Ayuda;