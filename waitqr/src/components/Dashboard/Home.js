import React from 'react';

import PlatillosProbados from './Sidebar/Home/PlatillosProbados';
import Ordenesgrafica from './Sidebar/Home/Ordenesgrafica';
import StatusyMejores from './Sidebar/Home/StatusyMejores';
import Visitas from './Sidebar/Home/Visitas';
import Ayuda from './Sidebar/Home/Ayuda';
import '../Dashboard/styles/dashboard.css';


function Home() {
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

export default Home;