import React, {useReducer} from 'react';
import SeccionContext from './seccionesContext';
import SeccionReducer from './seccionesReducer';
import {SECCIONES_MENU} from '../../types'
import {AGREGAR_SECCION} from '../../types'
import {VALIDAR_SECCION} from '../../types'
import {ELIMINAR_SECCION} from '../../types'
import {ESTADO_SECCION} from '../../types'
import {SECCION_ACTUAL} from '../../types'
import {ACTUALIZAR_SECCION} from '../../types'
import {LIMPIAR_SECCION} from '../../types'
import clienteAxios from '../../config/axios'

const SeccionState = props =>{
    
    const initialState ={
        seccionesmenu: [],
        errormenu: false,
        seccionseleccionada:null,
        seccion: null

    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(SeccionReducer, initialState);

    //crear las funciones


    //obtener las secciones de un menu
 
    const obtenerSecciones = async menu =>{
        try {
            const resultado = await clienteAxios.get('/api/secciones',{params:{menu}});
            console.log(resultado)
            dispatch({
                type: SECCIONES_MENU,
                payload: resultado.data.secciones
            })
        } catch (error) {
            console.log(error)
        }
    }

    //agregar una seccion al menu seleccionado
    const agregarSeccion = async  seccion =>{
       // tarea.id = uuid.v4();
        try {
            const resultado = await clienteAxios.post('/api/secciones', seccion);
            console.log(resultado)
            dispatch({
                type: AGREGAR_SECCION,
                payload: seccion
            })
        } catch (error) {
            console.log(error);
        }
    }


    //valida y muestra un error en caso de que sea necesario
    const validarSeccion = () =>{
        dispatch({
            type: VALIDAR_SECCION
        })
    }

    // Eliminar tarea por id
    const eliminarSeccion = async (id, seccion) =>{
        try {
            await clienteAxios.delete(`/api/secciones/${id}`, {params: {seccion}});
            dispatch({
                type: ELIMINAR_SECCION,
                payload: id
            })
        } catch (error) {
            console.timeLog(error)
        }
    }

   

    //Edita o modifica una tarea
    const actualizarSeccion = async seccion =>{
        console.log(seccion);
       try {
           const resultado = await clienteAxios.put(`/api/secciones/${seccion._id}`,seccion);
           console.log(resultado)
        dispatch({
            type: ACTUALIZAR_SECCION,
            payload: resultado.data.seccion
        })
       } catch (error) {
           console.log(error)
       }
    }
    
    const guardarSeccionActual= seccionId =>{
        dispatch({
            type:SECCION_ACTUAL,
            payload: seccionId
        })
    }
    
    
    //Elimina la menuseleccionado

    const limpiarSeccion = () =>{
        dispatch({
            type: LIMPIAR_SECCION
        })
    }

    return (
        <SeccionContext.Provider
            value ={{
                seccionesmenu: state.seccionesmenu,
                errormenu: state.errormenu,
                seccionseleccionada: state.seccionseleccionada,
                seccion: state.seccion,
                obtenerSecciones,
                agregarSeccion,
                validarSeccion,
                eliminarSeccion,
                guardarSeccionActual,
                actualizarSeccion,
                limpiarSeccion
            }}
        >
            {props.children}
        </SeccionContext.Provider>
    )
}

export default SeccionState;