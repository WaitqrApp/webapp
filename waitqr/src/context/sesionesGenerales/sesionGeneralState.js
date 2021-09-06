import React, {useReducer} from 'react';
import SesionGeneralContext from './sesionGeneralContext';
import SesionGeneralReducer from './sesionGeneralReducer';
import {SESIONGENERAL_MESA} from '../../types'
import {AGREGAR_SESIONGENERAL} from '../../types'
import {VALIDAR_SESIONGENERAL} from '../../types'
import {ELIMINAR_SESIONGENERAL} from '../../types'
import {ESTADO_SESIONGENERAL} from '../../types'
import {SESIONGENERAL_ACTUAL} from '../../types'
import {ACTUALIZAR_SESIONGENERAL} from '../../types'
import {LIMPIAR_SESIONGENERAL} from '../../types'
import clienteAxios from '../../config/axios'

const SesionGeneralState = props =>{
    
    const initialState ={
        sesiongeneralmesa: [],
        errorsesiongeneral: false,
        sesiongeneralseleccionada:null,
        sesiongeneral:null

    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(SesionGeneralReducer, initialState);

    //crear las funciones

 
    //obtener las menus de un restaurante

    const obtenerSesionGeneral = async mesa =>{
        try {
            const resultado = await clienteAxios.get('/api/sesionesgenerales',{params:{mesa}});
            console.log(resultado)
            dispatch({
                type: SESIONGENERAL_MESA,
                payload: resultado.data.sesionesGenerales
            })
        } catch (error) {
            console.log(error)
        }
    }

    //agregar una tarea al restaurante seleccionado
    const agregarSesionGeneral = async  sesiongeneral =>{
       // tarea.id = uuid.v4();
        try {
            const resultado = await clienteAxios.post('/api/sesionesgenerales', sesiongeneral);
            console.log(resultado)
            dispatch({
                type: AGREGAR_SESIONGENERAL,
                payload: sesiongeneral
            })
        } catch (error) {
            console.log(error);
        }
    }


    //valida y muestra un error en caso de que sea necesario
    const validarSesionGeneral = () =>{
        dispatch({
            type: VALIDAR_SESIONGENERAL
        })
    }

    // Eliminar tarea por id
    const eliminarSesionGeneral = async (id, mesa) =>{
        try {
            await clienteAxios.delete(`/api/sesionesgenerales/${id}`, {params: {mesa}});
            dispatch({
                type: ELIMINAR_SESIONGENERAL,
                payload: id
            })
        } catch (error) {
            console.timeLog(error)
        }
    }

   

    //Edita o modifica una tarea
    const actualizarSesionGeneral = async sesiongeneral =>{
        console.log(sesiongeneral);
       try {
           const resultado = await clienteAxios.put(`/api/sesionesgenerales/${sesiongeneral._id}`,sesiongeneral);
           console.log(resultado)
        dispatch({
            type: ACTUALIZAR_SESIONGENERAL,
            payload: resultado.data.sesiongeneral
        })
       } catch (error) {
           console.log(error)
       }
    }
    //Extrae una tarea para edicion
    const guardarSesionGeneralActual = sesiongeneralId =>{
        dispatch({
            type:SESIONGENERAL_ACTUAL,
            payload: sesiongeneralId
        })
         
    }

    
    //Elimina la menuseleccionado

    const limpiarSesionGeneral = () =>{
        dispatch({
            type: LIMPIAR_SESIONGENERAL
        })
    }

    return (
        <SesionGeneralContext.Provider
            value ={{
               // menus: state.menus,
                sesiongeneralmesa: state.sesiongeneralmesa,
                errorsesiongeneral: state.errorsesiongeneral,
                sesiongeneralseleccionada: state.sesiongeneralseleccionada,
                sesiongeneral: state.sesiongeneral,
                obtenerSesionGeneral,
                agregarSesionGeneral,
                validarSesionGeneral,
                eliminarSesionGeneral,
                guardarSesionGeneralActual,
                actualizarSesionGeneral,
                limpiarSesionGeneral
            }}
        >
            {props.children}
        </SesionGeneralContext.Provider>
    )
}

export default SesionGeneralState; 