import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PlatillosProbados from './Dashboard/PlatillosProbados';
import Ordenesgrafica from './Dashboard/Ordenesgrafica';
import StatusyMejores from './Dashboard/StatusyMejores';
import Visitas from './Dashboard/Visitas';
import Ayuda from './Dashboard/Ayuda';
import Login from "./Login";
import EditPlatillo from './Dashboard/MenuDashboard/EditarPlatillo';


function Dashboard(){
    return(
        <div className="container-fluid mt-4 mb-3">
            <h1>Hola Jane Doe!</h1>
        <div className="row mt-4 ">
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
          {/* <div className="col-md-4">
            <EditPlatillo></EditPlatillo>
          </div> */}
        </div>
      </div>
        
    );
}

export default Dashboard;