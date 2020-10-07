import React from 'react';

import PlatillosProbados from './Dashboard/PlatillosProbados';
import Ordenesgrafica from './Dashboard/Ordenesgrafica';
import StatusyMejores from './Dashboard/StatusyMejores';
import Visitas from './Dashboard/Visitas';
import Ayuda from './Dashboard/Ayuda';




function Dashboard(){
    return(
        <div class="container-fluid ">
        <div className="row mt-4">
          <div className="col-md-4" >
            <PlatillosProbados/>
          </div>
          <div className=" col-md-4 " >
            <Ordenesgrafica/>
          </div>
          <div className=" col-md-4 " >
          <StatusyMejores/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8" >
            <Visitas/>
          </div>
          <div className=" col-md-4 " >
           <Ayuda/>
          </div>
          
        </div>
      </div>
        
    );
}

export default Dashboard;