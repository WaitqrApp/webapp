import React, {useReducer} from 'react';
import PlatilloContext from './platillosContext';
import PlatilloReducer from './platillosReducer';
import {PLATILLOS_SECCION} from '../../types'
import {AGREGAR_PLATILLO} from '../../types'
import {VALIDAR_PLATILLO} from '../../types'
import {ELIMINAR_PLATILLO} from '../../types'
import {ESTADO_PLATILLO} from '../../types'
import {PLATILLO_ACTUAL} from '../../types'
import {ACTUALIZAR_PLATILLO} from '../../types'
import {LIMPIAR_PLATILLO} from '../../types'
import clienteAxios from '../../config/axios'

const PlatilloState = props =>{
    
    const initialState ={
        platillosseccion: [],
        errorseccion: false,
        platilloseleccionado:null,
        platillo: null

    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(PlatilloReducer, initialState);

    //crear las funciones


    //obtener las platillos de un seccion

    const obtenerPlatillos = async seccion =>{
        try {
            const resultado = await clienteAxios.get('/api/platillos',{params:{seccion}});
            console.log(resultado)
            dispatch({
                type: PLATILLOS_SECCION,
                payload: resultado.data.platillos
            })
        } catch (error) {
            console.log(error)
        }
    }

    //agregar una platillo al seccion seleccionado
    const agregarPlatillo = async  platillo =>{
       // tarea.id = uuid.v4();
        try {
            const resultado = await clienteAxios.post('/api/platillos', platillo);
            console.log(resultado)
            dispatch({
                type: AGREGAR_PLATILLO,
                payload: platillo
            })
        } catch (error) {
            console.log(error);
        }
    }


    //valida y muestra un error en caso de que sea necesario
    const validarPlatillo = () =>{
        dispatch({
            type: VALIDAR_PLATILLO
        })
    }

    // Eliminar tarea por id
    const eliminarPlatillo = async (id, platillo) =>{
        try {
            await clienteAxios.delete(`/api/platillos/${id}`, {params: {platillo}});
            dispatch({
                type: ELIMINAR_PLATILLO,
                payload: id
            })
        } catch (error) {
            console.timeLog(error)
        }
    }

   

    //Edita o modifica una tarea
    const actualizarPlatillo = async platillo =>{
        console.log("PLATILLO",platillo);
       try {
           const resultado = await clienteAxios.put(`/api/platillos/${platillo._id}`,platillo);
           console.log(resultado)
        dispatch({
            type: ACTUALIZAR_PLATILLO,
            payload: resultado.data.platillo
        })
       } catch (error) {
           console.log(error)
       }
    }
    
    const guardarPlatilloActual= platilloId =>{
        dispatch({
            type:PLATILLO_ACTUAL,
            payload: platilloId
        })
    } 
    
    
    //Elimina la seccionseleccionado

    const limpiarPlatillo = () =>{
        dispatch({
            type: LIMPIAR_PLATILLO
        })
    }

    return (
        <PlatilloContext.Provider
            value ={{
                platillosseccion: state.platillosseccion,
                errorplatillo: state.errorplatillo,
                platilloseleccionado: state.platilloseleccionado,
                platillo: state.platillo,
                obtenerPlatillos,
                agregarPlatillo,
                validarPlatillo,
                eliminarPlatillo,
                guardarPlatilloActual,
                actualizarPlatillo,
                limpiarPlatillo
            }}
        >
            {props.children}
        </PlatilloContext.Provider>
    )
}

export default PlatilloState;