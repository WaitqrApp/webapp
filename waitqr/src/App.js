import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';


import RestauranteState from './context/restaurantes/restauranteState';
import MenuState from './context/menus/menusState';
import SeccionState from './context/secciones/seccionesState';
import PlatillosState from './context/platillos/platillosState';



import AlertaState from './context/alertas/alertaState'
import AuthState from './context/autenticacion/authState'

import tokenAuth from './config/tokenAuth';
import RutaPrivada from './rutas/RutaPrivada'

//Revisar si tenemos token
const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
}

/* Describe el contenido del canvas central */
function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <RestauranteState>
      <MenuState>
      <SeccionState>
        <PlatillosState>

    <AuthState>
      <AlertaState>
        <Router>
          <Switch>
            <Route exact path="/" component={(Login)} />
            <Route exact path="/nueva-cuenta" component={(NuevaCuenta)} />
            <RutaPrivada exact path="/dashboard" component={(Dashboard)} />
          </Switch>
        </Router>
      </AlertaState>
    </AuthState>
    </PlatillosState>
    </SeccionState>

    </MenuState>
    </RestauranteState>

  );
}

export default App;
