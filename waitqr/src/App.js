import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';




import AlertaState from './context/alertas/alertaState'
import AuthState from './context/autenticacion/authState'



/* Describe el contenido del canvas central */
function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <AuthState>
    <AlertaState>
    <Router>
     <Switch>
     <Route exact path="/" component={(Login)} />
     <Route exact path="/nueva-cuenta" component={(NuevaCuenta)} />
     <Route exact path="/dashboard" component={(Dashboard)} />
     </Switch>
    </Router>
    </AlertaState>
    </AuthState>

  );
}

export default App;
