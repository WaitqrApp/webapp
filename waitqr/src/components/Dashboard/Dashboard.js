import React from 'react';

import PlatillosProbados from './CenterCanvas/PlatillosProbados';
import Ordenesgrafica from './CenterCanvas/Ordenesgrafica';
import StatusyMejores from './CenterCanvas/StatusyMejores';
import Visitas from './CenterCanvas/Visitas';
import Ayuda from './CenterCanvas/Ayuda';
import '../Dashboard/styles/dashboard.css';


function Dashboard() {
  return (

    <div className="container-fluid mt-4 mb-3">
      <h1>Hola, Jane Doe!</h1>
      <div className="row mt-4 ">
        <div className="col-md-4" >
          <PlatillosProbados />
        </div>
        <div className=" col-md-4 " >
          <Ordenesgrafica />
        </div>
        <div className=" col-md-4 " >
          <StatusyMejores />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8" >
          <Visitas />
        </div>
        <div className=" col-md-4 " >
          <Ayuda />
        </div>
      </div>
    </div>

  );
}

export default Dashboard;