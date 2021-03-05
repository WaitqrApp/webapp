import React, {useContext,useEffect, } from 'react';

import PlatillosProbados from './Sidebar/Home/PlatillosProbados';
import Ordenesgrafica from './Sidebar/Home/Ordenesgrafica';
import StatusyMejores from './Sidebar/Home/StatusyMejores';
import Visitas from './Sidebar/Home/Visitas';
import Ayuda from './Sidebar/Home/Ayuda';

import AuthContext from '../../context/autenticacion/authContext'
import { Row ,Container, Col} from 'react-bootstrap';


function Home() {

  //Extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const {usuario, usuarioAutenticado} = authContext;

  useEffect(() =>{
    usuarioAutenticado();
  }, [])


  return ( 



    <Container fluid className="container-fluid mt-4 mb-3">
      {usuario ? <h1>Hola, {usuario.nombre}</h1> : null}
      <Row className="row mt-4 ">
        <Col sm={4}>
          <PlatillosProbados />
        </Col>
        <Col sm={4}>
          <Ordenesgrafica />
        </Col>
        <Col sm={4}>
          <StatusyMejores />
        </Col>
      </Row>
      <Row className="row">
        <Col sm={8}>
          <Visitas />
        </Col>
        <Col sm={4} >
          <Ayuda />
        </Col>
      </Row>
    </Container>

  );
}

export default Home;