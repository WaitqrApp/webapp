import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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

/* Describe el contenido del canvas central               {usuario ? <h1>Hola, {usuario.nombre}</h1> : null}
*/
function Dashboard() {

  return (
    <>
    <Navbar />

    <Router>
        
        <Container fluid className="p-0">
        
          <Row >
            <Col md={2} className="side" >
              <Sidebar />
            </Col>
            <Col md={10} className="p-0 d-inline-block" id="contenido" >
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
            </Col>
          </Row>
        </Container>
    </Router>
</>
  );
}

export default Dashboard;
