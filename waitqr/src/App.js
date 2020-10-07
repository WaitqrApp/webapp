import React, {Fragment} from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Fragment >
    <Navbar/>
    <div class="container-fluid ">
        <div className="row">
          <div className="col-md-3 side" >
          <Sidebar/>
          </div>
          <div className=" col-md-9 " >
          <Dashboard/>
          </div>
        </div>
      </div>
   
    
    </Fragment>
  );
}

export default App;
