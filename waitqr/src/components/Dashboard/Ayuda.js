import React from 'react';

function Ayuda(){
    return(
        <div class="container-fluid text-center">
        <div className="row">
          <div className="col-md-12" >
          <p>imagen</p>
          </div>
          </div>
          <div className="row">
          <div className="col-md-12">
                <p> ¿Necesitas ayuda?</p>
            </div>
          </div>
          <div className="row">
          <div className="col-md-12">
                <div className="platillosdashboard">
                   <span>Podemos ayudarte con mas herramientas para manejar tu restaurante.</span> 
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