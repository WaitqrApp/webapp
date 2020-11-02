import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollLock from 'react-scroll-lock-component';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Fragment >  
      <Navbar/>
      

      <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-2 side" >
            <Sidebar/>
            
            </div>
            <div className="col-md-10 p-0 d-inline-block" id="contenido" >
            <Switch>
                <Route exact path="/" component={(Dashboard)}/>
                <Route exact path="/Login" component={ (Login)}/>
            </Switch>

            </div>
        </div>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
