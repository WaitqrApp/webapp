import React, {Fragment, useContext, useEffect, useState} from 'react';

import sesionGeneralContext from '../../../../context/sesionesGenerales/sesionGeneralContext';
import sesionIndividualContext from '../../../../context/sesionesIndividuales/sesionIndividualContext';
import ordenContext from '../../../../context/ordenes/ordenContext';
import platilloOrdenadoContext from '../../../../context/platillosOrdenados/platilloOrdenadoContext';

function Insidethetable ({mesaid}){

 //Extraer si una seccion esta activa
 const sesionGeneralsContext = useContext(sesionGeneralContext);
 const {sesiongeneralmesa, obtenerSesionGeneral } = sesionGeneralsContext;

 //Extraer si una seccion esta activa
 const sesionIndividualsContext = useContext(sesionIndividualContext);
 const {sesionindividualsesiongeneral, obtenerSesionIndividual } = sesionIndividualsContext;

 const [auxiliarSesionGeneral, guardarAuxiliarSesionGeneral] = useState("")

useEffect(() => {

obtenerSesionGeneral(mesaid)
 
},[mesaid]); //para que corra solo una vez
console.log("insidetable", sesiongeneralmesa)

    return(
        <Fragment>
         {sesiongeneralmesa.map(sesiongeneral => (
        <span>{sesiongeneral._id}</span>
         ))}
        </Fragment>
    );
}

export default Insidethetable;