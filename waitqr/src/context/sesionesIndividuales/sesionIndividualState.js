import React, {useReducer} from 'react';
import SesionIndividualContext from './sesionIndividualContext';
import SesionIndividualReducer from './sesionIndividualReducer';
import {SESIONINDIVIDUAL_SESIONGENERAL} from '../../types'
import {AGREGAR_SESIONINDIVIDUAL} from '../../types'
import {VALIDAR_SESIONINDIVIDUAL} from '../../types'
import {ELIMINAR_SESIONINDIVIDUAL} from '../../types'
import {ESTADO_SESIONINDIVIDUAL} from '../../types'
import {SESIONINDIVIDUAL_ACTUAL} from '../../types'
import {ACTUALIZAR_SESIONINDIVIDUAL} from '../../types'
import {LIMPIAR_SESIONINDIVIDUAL} from '../../types'
import clienteAxios from '../../config/axios'

const SesionIndividualState = props =>{
    
    const initialState ={
        sesionindividualsesiongeneral: [],
        errorsesionindividual: false,
        sesionindividualseleccionada:null,
        sesionindividual:null

    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(SesionIndividualReducer, initialState);

    //crear las funciones


    //obtener las menus de un restaurante

    const obtenerSesionIndividual = async sesionGeneral =>{
        try {
            const resultado = await clienteAxios.get('/api/sesionesindividuales',{params:{sesionGeneral}});
            console.log(resultado)
            dispatch({
                type: SESIONINDIVIDUAL_SESIONGENERAL,
                payload: resultado.data.sesionesIndividuales
            })
        } catch (error) {
            console.log(error)
        }
    }

    //agregar una tarea al restaurante seleccionado
    const agregarSesionIndividual = async  sesionindividual =>{
       // tarea.id = uuid.v4();
        try {
            const resultado = await clienteAxios.post('/api/sesionesindividuales', sesionindividual);
            console.log(resultado)
            dispatch({
                type: AGREGAR_SESIONINDIVIDUAL,
                payload: sesionindividual
            })
        } catch (error) {
            console.log(error);
        }
    }


    //valida y muestra un error en caso de que sea necesario
    const validarSesionIndividual = () =>{
        dispatch({
            type: VALIDAR_SESIONINDIVIDUAL
        })
    }

    // Eliminar tarea por id
    const eliminarSesionIndividual = async (id, sesiongeneral) =>{
        try {
            await clienteAxios.delete(`/api/sesionesindividuales/${id}`, {params: {sesiongeneral}});
            dispatch({
                type: ELIMINAR_SESIONINDIVIDUAL,
                payload: id
            })
        } catch (error) {
            console.timeLog(error)
        }
    }

   

    //Edita o modifica una tarea
    const actualizarSesionIndividual = async sesionindividual =>{
        console.log(sesionindividual);
       try {
           const resultado = await clienteAxios.put(`/api/sesionesindividuales/${sesionindividual._id}`,sesionindividual);
           console.log(resultado)
        dispatch({
            type: ACTUALIZAR_SESIONINDIVIDUAL,
            payload: resultado.data.sesionindividual
        })
       } catch (error) {
           console.log(error)
       }
    }
    //Extrae una tarea para edicion
    const guardarSesionIndividualActual = sesionindividualId =>{
        dispatch({
            type:SESIONINDIVIDUAL_ACTUAL,
            payload: sesionindividualId
        })
         
    }

    
    //Elimina la menuseleccionado

    const limpiarSesionIndividual = () =>{
        dispatch({
            type: LIMPIAR_SESIONINDIVIDUAL
        })
    }

    return (
        <SesionIndividualContext.Provider
            value ={{
               // menus: state.menus,
                sesionindividualsesiongeneral: state.sesionindividualsesiongeneral,
                errorsesionindividual: state.errorsesionindividual,
                sesionindividualseleccionada: state.sesionindividualseleccionada,
                sesionindividual: state.sesionindividual,
                obtenerSesionIndividual,
                agregarSesionIndividual,
                validarSesionIndividual,
                eliminarSesionIndividual,
                guardarSesionIndividualActual,
                actualizarSesionIndividual,
                limpiarSesionIndividual
            }}
        >
            {props.children}
        </SesionIndividualContext.Provider>
    )
}

export default SesionIndividualState; 