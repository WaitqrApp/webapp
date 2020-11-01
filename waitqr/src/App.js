import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <div className="col-md-10 vh-100" id="contenido" >
          <Dashboard/>
          </div>
          {/*<li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
          </li>*/}
        </div>
        {/* <div className = "col-md-6 side" id = "login">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
              </Switch>
            </div>
          </div>
        </div> */}
      </div>
      
    </Fragment>
    </Router>
  );
}

export default App;
