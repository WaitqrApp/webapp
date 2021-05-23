import React, {useReducer} from 'react';
import PlatilloOrdenadoContext from './platilloOrdenadoContext';
import PlatilloOrdenadoReducer from './platilloOrdenadoReducer';
import {PLATILLOORDENADO_ORDEN} from '../../types'
import {AGREGAR_PLATILLOORDENADO} from '../../types'
import {VALIDAR_PLATILLOORDENADO} from '../../types'
import {ELIMINAR_PLATILLOORDENADO} from '../../types'
import {ESTADO_PLATILLOORDENADO} from '../../types'
import {PLATILLOORDENADO_ACTUAL} from '../../types'
import {ACTUALIZAR_PLATILLOORDENADO} from '../../types'
import {LIMPIAR_PLATILLOORDENADO} from '../../types'
import clienteAxios from '../../config/axios'

const PlatilloOrdenadoState = props =>{
    
    const initialState ={
        platilloOrdenadoOrden: [],
        errorplatilloordenado: false,
        platilloordenadoseleccionado:null,
        platilloordenado:null

    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(PlatilloOrdenadoReducer, initialState);

    //crear las funciones


    //obtener las menus de un restaurante

    const obtenerPlatilloOrdenado = async orden =>{
        try {
            const resultado = await clienteAxios.get('/api/platilloOrdenado',{params:{orden}});
            console.log(resultado)
            dispatch({
                type: PLATILLOORDENADO_ORDEN,
                payload: resultado.data.platillosOrdenados
            })
        } catch (error) {
            console.log(error)
        }
    }

    //agregar una tarea al restaurante seleccionado
    const agregarPlatilloOrdenado = async  platilloordenado =>{
       // tarea.id = uuid.v4();
        try {
            const resultado = await clienteAxios.post('/api/platillosordenados', platilloordenado);
            console.log(resultado)
            dispatch({
                type: AGREGAR_PLATILLOORDENADO,
                payload: platilloordenado
            })
        } catch (error) {
            console.log(error);
        }
    }


    //valida y muestra un error en caso de que sea necesario
    const validarPlatilloOrdenado = () =>{
        dispatch({
            type: VALIDAR_PLATILLOORDENADO
        })
    }

    // Eliminar tarea por id
    const eliminarPlatilloOrdenado = async (id, orden) =>{
        try {
            await clienteAxios.delete(`/api/platillosordenados/${id}`, {params: {orden}});
            dispatch({
                type: ELIMINAR_PLATILLOORDENADO,
                payload: id
            })
        } catch (error) {
            console.timeLog(error)
        }
    }

   

    //Edita o modifica una tarea
    const actualizarPlatilloOrdenado = async platilloordenado =>{
        console.log(platilloordenado);
       try {
           const resultado = await clienteAxios.put(`/api/platillosordenados/${platilloordenado._id}`,platilloordenado);
           console.log(resultado)
        dispatch({
            type: ACTUALIZAR_PLATILLOORDENADO,
            payload: resultado.data.platilloordenado
        })
       } catch (error) {
           console.log(error)
       }
    }
    //Extrae una tarea para edicion
    const guardarPlatilloOrdenadoActual = platilloordenadoId =>{
        dispatch({
            type: PLATILLOORDENADO_ACTUAL,
            payload: platilloordenadoId
        })
         
    }

    
    //Elimina la menuseleccionado

    const limpiarPlatilloOrdenado = () =>{
        dispatch({
            type: LIMPIAR_PLATILLOORDENADO
        })
    }

    return (
        <PlatilloOrdenadoContext.Provider
            value ={{
               // menus: state.menus,
                platilloOrdenadoOrden: state.platilloOrdenadoOrden,
                errorplatilloordenado: state.errorplatilloordenado,
                platilloordenadoseleccionado: state.platilloordenadoseleccionado,
                platilloordenado: state.platilloordenado,
                obtenerPlatilloOrdenado,
                agregarPlatilloOrdenado,
                validarPlatilloOrdenado,
                eliminarPlatilloOrdenado,
                guardarPlatilloOrdenadoActual,
                actualizarPlatilloOrdenado,
                limpiarPlatilloOrdenado
            }}
        >
            {props.children}
        </PlatilloOrdenadoContext.Provider>
    )
}

export default PlatilloOrdenadoState; 