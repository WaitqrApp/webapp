import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Sidebar from './components/Dashboard/Sidebar/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import History from './components/Dashboard/Sidebar/History/History';
import Insights from './components/Dashboard/Sidebar/Insights/Insights';
import Settings from './components/Dashboard/Sidebar/Settings/Settings';
import Tables from './components/Dashboard/Sidebar/Tables/Tables';
import Orders from './components/Dashboard/Sidebar/Orders/Orders';
import Menu from './components/Dashboard/Sidebar/Menu/Menu';

/* Describe el contenido del canvas central */
function App() {
  return (
    <Router>
      <Fragment >
        <Navbar />
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-2 side" >
              <Sidebar />
            </div>
            <div className="col-md-10 p-0 d-inline-block" id="contenido" >
              <Switch>
                <Route exact path="/" component={(Dashboard)} />
                <Route exact path="/menu" component={(Menu)} />
                <Route exact path="/orders" component={(Orders)} />
                <Route exact path="/login" component={(Login)} />
                <Route exact path="/insights" component={(Insights)} />
                <Route exact path="/history" component={(History)} />
                <Route exact path="/tables" component={(Tables)} />
                <Route exact path="/settings" component={(Settings)} />

              </Switch>
            </div>
          </div>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
