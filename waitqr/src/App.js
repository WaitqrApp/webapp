import React, {Fragment} from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AlertaState from './context/alertas/alertaState'


function App() {
  return (
    <Fragment >  
    <Navbar/>
    <div class="container-fluid ">
        <div className="row">
          <div className="col-md-3 side" >
          <Sidebar/>
          </div>
          <div className=" col-md-9 " id="contenido" >
          <Dashboard/>
          </div>
        </div>
      </div>
   
    
    </Fragment>
  );
}

export default App;
