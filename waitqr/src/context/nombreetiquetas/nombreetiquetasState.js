import React, {useReducer} from 'react';
import NombreEtiquetaContext from './nombreetiquetasContext';
import NombreEtiquetaReducer from './nombreetiquetasReducer';
import {NOMBREETIQUETAS_PLATILLO} from '../../types'
import {AGREGAR_NOMBREETIQUETA} from '../../types'
import {VALIDAR_NOMBREETIQUETA} from '../../types'
import {ELIMINAR_NOMBREETIQUETA} from '../../types'
import {ESTADO_NOMBREETIQUETA} from '../../types'
import {NOMBREETIQUETA_ACTUAL} from '../../types'
import {ACTUALIZAR_NOMBREETIQUETA} from '../../types'
import {LIMPIAR_NOMBREETIQUETA} from '../../types'
import clienteAxios from '../../config/axios'

const NombreEtiquetaState = props =>{
    
    const initialState ={
        nombreetiquetasplatillo: [],
        errornombreetiqueta: false,
        nombreetiquetaseleccionada:null,
        nombreetiquetaactual: null

    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(NombreEtiquetaReducer, initialState);

    //crear las funciones


    //obtener las secciones de un menu
 
    const obtenerNombreEtiquetas = async platillo =>{
        try {
            const resultado = await clienteAxios.get('/api/nombreetiquetas',{params:{platillo}});
            console.log(resultado)
            dispatch({
                type: NOMBREETIQUETAS_PLATILLO,
                payload: resultado.data.nombreetiquetas
            })
        } catch (error) {
            console.log(error)
        }
    }

    //agregar una seccion al menu seleccionado
    const agregarNombreEtiqueta = async  nombreetiqueta =>{
       // tarea.id = uuid.v4();
        try {
            const resultado = await clienteAxios.post('/api/nombreetiquetas', nombreetiqueta);
            console.log(resultado)
            dispatch({
                type: AGREGAR_NOMBREETIQUETA,
                payload: nombreetiqueta
            })
        } catch (error) {
            console.log(error);
        }
    }


    //valida y muestra un error en caso de que sea necesario
    const validarNombreEtiqueta = () =>{
        dispatch({
            type: VALIDAR_NOMBREETIQUETA
        })
    }

    // Eliminar tarea por id
    const eliminarNombreEtiqueta = async (id, nombreetiqueta) =>{
        try {
            await clienteAxios.delete(`/api/nombreetiquetas/${id}`, {params: {nombreetiqueta}});
            dispatch({
                type: ELIMINAR_NOMBREETIQUETA,
                payload: id
            })
        } catch (error) {
            console.timeLog(error)
        }
    }

   

    //Edita o modifica una tarea
    const actualizarNombreEtiqueta = async nombreetiqueta =>{
        console.log(nombreetiqueta);
       try {
           const resultado = await clienteAxios.put(`/api/nombreetiquetas/${nombreetiqueta._id}`,nombreetiqueta);
           console.log(resultado)
        dispatch({
            type: ACTUALIZAR_NOMBREETIQUETA,
            payload: resultado.data.nombreetiqueta
        })
       } catch (error) {
           console.log(error)
       }
    }
    
    const guardarNombreEtiquetaActual= nombreetiquetaId =>{
        try {
            console.log("llego esta nombreetiqueta", nombreetiquetaId)
            dispatch({
                type:NOMBREETIQUETA_ACTUAL,
                payload: nombreetiquetaId
            })
            
        } catch (error) {
            console.log(error)
        }
        
    }
    
    
    //Elimina la menuseleccionado

    const limpiarNombreEtiqueta = () =>{
        dispatch({
            type: LIMPIAR_NOMBREETIQUETA
        })
    }

    return (
        <NombreEtiquetaContext.Provider
            value ={{
                nombreetiquetasplatillo: state.nombreetiquetasplatillo,
                errorplatillo: state.errorplatillo,
                nombreetiquetaseleccionada: state.nombreetiquetaseleccionada,
                nombreetiquetaactual: state.nombreetiquetaactual,
                obtenerNombreEtiquetas,
                agregarNombreEtiqueta,
                validarNombreEtiqueta,
                eliminarNombreEtiqueta,
                guardarNombreEtiquetaActual,
                actualizarNombreEtiqueta,
                limpiarNombreEtiqueta
            }}
        >
            {props.children}
        </NombreEtiquetaContext.Provider>
    )
}

export default NombreEtiquetaState;