import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import DishMenu from "./components/Dashboard/Sidebar/Menu/DishMenu";
import Orders from "./components/Dashboard/Sidebar/Orders/Orders";
import Ordenes from "./components/Dashboard/Sidebar/Orders/Ordenes";

import Tables from "./components/Dashboard/Sidebar/Tables/Tables";
import NoMatch from "./components/Dashboard/NoMatch";

import RestauranteState from "./context/restaurantes/restauranteState";
import MenuState from "./context/menus/menusState";
import MesaState from "./context/mesas/mesasState";

import SeccionState from "./context/secciones/seccionesState";
import PlatillosState from "./context/platillos/platillosState";
import SesionGeneralState from "./context/sesionesGenerales/sesionGeneralState";
import SesionIndividualState from "./context/sesionesIndividuales/sesionIndividualState";
import OrdenState from "./context/ordenes/ordenState";
import PlatilloOrdenadoState from "./context/platillosOrdenados/platilloOrdenadoState";

import NombreEtiquetaState from "./context/nombreetiquetas/nombreetiquetasState";
import EtiquetaState from "./context/etiquetas/etiquetasState";

import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/autenticacion/authState";

import tokenAuth from "./config/tokenAuth";
import RutaPrivada from "./rutas/RutaPrivada";

//Revisar si tenemos token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

/* Describe el contenido del canvas central */
function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <RestauranteState>
      <MenuState>
        <MesaState>
          <SeccionState>
            <PlatillosState>
              <NombreEtiquetaState>
                <EtiquetaState>
                  <SesionGeneralState>
                    <SesionIndividualState>
                      <OrdenState>
                        <PlatilloOrdenadoState>
                          <AuthState>
                            <AlertaState>
                              <Router>
                                <Switch>
                                  <Route exact path="/" component={Login} />
                                  <Route
                                    exact
                                    path="/nueva-cuenta"
                                    component={NuevaCuenta}
                                  />
                                  <RutaPrivada
                                    exact
                                    path="/dashboard"
                                    component={Dashboard}
                                  />
                                  <RutaPrivada exact path="/menu">
                                    {" "}
                                    <Dashboard>
                                      <DishMenu />
                                    </Dashboard>
                                  </RutaPrivada>
                                  <RutaPrivada exact path="/orders">
                                    <Dashboard>
                                      <Orders />
                                    </Dashboard>
                                  </RutaPrivada>
                                  <RutaPrivada exact path="/ordenes">
                                    <Dashboard>
                                      <Ordenes />
                                    </Dashboard>
                                  </RutaPrivada>
                                  <RutaPrivada exact path="/tables">
                                    <Dashboard>
                                      <Tables />
                                    </Dashboard>
                                  </RutaPrivada>
                                  <Route path="*">
                                    <NoMatch></NoMatch>
                                  </Route>
                                </Switch>
                              </Router>
                            </AlertaState>
                          </AuthState>
                        </PlatilloOrdenadoState>
                      </OrdenState>
                    </SesionIndividualState>
                  </SesionGeneralState>
                </EtiquetaState>
              </NombreEtiquetaState>
            </PlatillosState>
          </SeccionState>
        </MesaState>
      </MenuState>
    </RestauranteState>
  );
}

export default App;
