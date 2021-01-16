import React, { Fragment, useContext, useEffect } from 'react';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Sidebar from './Sidebar/Sidebar';
import Navbar from '../Navbar';
import Home from './Home';
import Login from '../auth/Login';
import History from './Sidebar/History/History';
import Insights from './Sidebar/Insights/Insights';
import Settings from './Sidebar/Settings/Settings';
import Tables from './Sidebar/Tables/Tables';
import Orders from './Sidebar/Orders/Orders';
import Menu from './Sidebar/Menu/Menu';





/* Describe el contenido del canvas central */
function Dashboard() {

  

  
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
                <Route exact path="/Home" component={(Home)} />
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

export default Dashboard;
