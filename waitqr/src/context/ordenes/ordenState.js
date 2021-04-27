import React, {useReducer} from 'react';
import OrdenContext from './ordenContext';
import OrdenReducer from './ordenReducer';
import {ORDEN_SESIONINDIVIDUAL} from '../../types'
import {ORDEN_RESTAURANTE} from '../../types'
import {AGREGAR_ORDEN} from '../../types'
import {VALIDAR_ORDEN} from '../../types'
import {ELIMINAR_ORDEN} from '../../types'
import {ESTADO_ORDEN} from '../../types'
import {ORDEN_ACTUAL} from '../../types'
import {ACTUALIZAR_ORDEN} from '../../types'
import {LIMPIAR_ORDEN} from '../../types'
import clienteAxios from '../../config/axios'

const OrdenState = props =>{
    
    const initialState ={
        ordenrestaurante:[],
        ordensesionindividual: [],
        errororden: false,
        ordenseleccionada:null,
        orden:null

    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(OrdenReducer, initialState);

    //crear las funciones


    //obtener las menus de un restaurante

    const obtenerOrdenSesionIndividual = async sesionindividual =>{
        try {
            const resultado = await clienteAxios.get('/api/orden/sesionIndividual',{params:{sesionindividual}});
            console.log(resultado)
            dispatch({
                type: ORDEN_SESIONINDIVIDUAL,
                payload: resultado.data.ordenes
            })
        } catch (error) {
            console.log(error)
        }
    }
    const obtenerOrdenRestaurante = async restaurante =>{
        try {
            const resultado = await clienteAxios.get('/api/orden/restaurante',{params:{restaurante}});
            console.log(resultado)
            dispatch({
                type: ORDEN_RESTAURANTE,
                payload: resultado.data.ordenes
            })
        } catch (error) {
            console.log(error)
        }
    }

    //agregar una tarea al restaurante seleccionado
    const agregarOrden = async  orden =>{
       // tarea.id = uuid.v4();
        try {
            const resultado = await clienteAxios.post('/api/ordenes', orden);
            console.log(resultado)
            dispatch({
                type: AGREGAR_ORDEN,
                payload: orden
            })
        } catch (error) {
            console.log(error);
        }
    }


    //valida y muestra un error en caso de que sea necesario
    const validarOrden = () =>{
        dispatch({
            type: VALIDAR_ORDEN
        })
    }

    // Eliminar tarea por id
    const eliminarOrden = async (id, sesionindividual) =>{
        try {
            await clienteAxios.delete(`/api/ordenes/${id}`, {params: {sesionindividual}});
            dispatch({
                type: ELIMINAR_ORDEN,
                payload: id
            })
        } catch (error) {
            console.timeLog(error)
        }
    }

   

    //Edita o modifica una tarea
    const actualizarOrden = async orden =>{
        console.log(orden);
       try {
           const resultado = await clienteAxios.put(`/api/ordenes/${orden._id}`,orden);
           console.log(resultado)
        dispatch({
            type: ACTUALIZAR_ORDEN,
            payload: resultado.data.orden
        })
       } catch (error) {
           console.log(error)
       }
    }
    //Extrae una tarea para edicion
    const guardarOrdenActual = ordenId =>{
        dispatch({
            type:ORDEN_ACTUAL,
            payload: ordenId
        })
         
    }

    
    //Elimina la menuseleccionado

    const limpiarOrden = () =>{
        dispatch({
            type: LIMPIAR_ORDEN
        })
    }

    return (
        <OrdenContext.Provider
            value ={{
               // menus: state.menus,
                ordensesionindividual: state.ordensesionindividual,
                ordenrestaurante: state.ordenrestaurante,
                errororden: state.errororden,
                ordenseleccionada: state.ordenseleccionada,
                orden: state.orden,
                obtenerOrdenSesionIndividual,
                obtenerOrdenRestaurante,
                agregarOrden,
                validarOrden,
                eliminarOrden,
                guardarOrdenActual,
                actualizarOrden,
                limpiarOrden
            }}
        >
            {props.children}
        </OrdenContext.Provider>
    )
}

export default OrdenState; 