import React, {useContext,useEffect} from 'react';

import PlatillosProbados from './Sidebar/Home/PlatillosProbados';
import Ordenesgrafica from './Sidebar/Home/Ordenesgrafica';
import StatusyMejores from './Sidebar/Home/StatusyMejores';
import Visitas from './Sidebar/Home/Visitas';
import Ayuda from './Sidebar/Home/Ayuda';
import '../Dashboard/styles/dashboard.css';

import AuthContext from '../../context/autenticacion/authContext'


function Home() {

  //Extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const {usuario, usuarioAutenticado} = authContext;

  useEffect(() =>{
    usuarioAutenticado();
  }, [])


  return ( 



    <div className="container-fluid mt-4 mb-3">
      {usuario ? <h1>Hola, {usuario.nombre}</h1> : null}
      <div className="row mt-4 ">
        <div className="col-md-4" >
          <PlatillosProbados />
        </div>
        <div className=" col-md-4 " >
          <Ordenesgrafica />
        </div>
        <div className=" col-md-4 " >
          <StatusyMejores />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8" >
          <Visitas />
        </div>
        <div className=" col-md-4 " >
          <Ayuda />
        </div>
      </div>
    </div>

  );
}

export default Home;