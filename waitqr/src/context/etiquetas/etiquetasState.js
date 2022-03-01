import React, {useReducer} from 'react';
import EtiquetaContext from './etiquetasContext';
import EtiquetaReducer from './etiquetasReducer';
import {ETIQUETAS_NOMBREETIQUETA} from '../../types'
import {AGREGAR_ETIQUETA} from '../../types'
import {VALIDAR_ETIQUETA} from '../../types'
import {ELIMINAR_ETIQUETA} from '../../types'
import {ESTADO_ETIQUETA} from '../../types'
import {ETIQUETA_ACTUAL} from '../../types'
import {ACTUALIZAR_ETIQUETA} from '../../types'
import {LIMPIAR_ETIQUETA} from '../../types'
import clienteAxios from '../../config/axios'

const EtiquetaState = props =>{
    
    const initialState ={
        etiquetasnombreetiqueta: [],
        erroretiqueta: false,
        etiquetaseleccionada:null,
        etiquetactual: null

    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(EtiquetaReducer, initialState);

    //crear las funciones


    //obtener las secciones de un menu
 
    const obtenerEtiquetas = async nombreetiqueta =>{
        try {
            const resultado = await clienteAxios.get('/api/etiquetas',{params:{nombreetiqueta}});
            console.log(resultado)
            dispatch({
                type: ETIQUETAS_NOMBREETIQUETA,
                payload: resultado.data.etiquetas
            })
        } catch (error) {
            console.log(error)
        }
    }

    //agregar una seccion al menu seleccionado
    const agregarEtiqueta = async  etiqueta =>{
       // tarea.id = uuid.v4();
        try {
            const resultado = await clienteAxios.post('/api/etiquetas', etiqueta);
            console.log(resultado)
            dispatch({
                type: AGREGAR_ETIQUETA,
                payload: etiqueta
            })
        } catch (error) {
            console.log(error);
        }
    }


    //valida y muestra un error en caso de que sea necesario
    const validarEtiqueta = () =>{
        dispatch({
            type: VALIDAR_ETIQUETA
        })
    }

    // Eliminar tarea por id
    const eliminarEtiqueta = async (id, etiqueta) =>{
        try {
            await clienteAxios.delete(`/api/etiquetas/${id}`, {params: {etiqueta}});
            dispatch({
                type: ELIMINAR_ETIQUETA,
                payload: id
            })
        } catch (error) {
            console.timeLog(error)
        }
    }

   

    //Edita o modifica una tarea
    const actualizarEtiqueta = async etiqueta =>{
        console.log(etiqueta);
       try {
           const resultado = await clienteAxios.put(`/api/etiquetas/${etiqueta._id}`,etiqueta);
           console.log(resultado)
        dispatch({
            type: ACTUALIZAR_ETIQUETA,
            payload: resultado.data.etiqueta
        })
       } catch (error) {
           console.log(error)
       }
    }
    
    const guardarEtiquetaActual= etiquetaId =>{
        try {
            console.log("llego esta etiqueta", etiquetaId)
            dispatch({
                type:ETIQUETA_ACTUAL,
                payload: etiquetaId
            })
            
        } catch (error) {
            console.log(error)
        }
        
    }
    
    
    //Elimina la menuseleccionado

    const limpiarEtiqueta = () =>{
        dispatch({
            type: LIMPIAR_ETIQUETA
        })
    }

    return (
        <EtiquetaContext.Provider
            value ={{
                etiquetasnombreetiqueta: state.etiquetasnombreetiqueta,
                errornombreetiqueta: state.errornombreetiqueta,
                etiquetaseleccionada: state.etiquetaseleccionada,
                etiquetaactual: state.etiquetaactual,
                obtenerEtiquetas,
                agregarEtiqueta,
                validarEtiqueta,
                eliminarEtiqueta,
                guardarEtiquetaActual,
                actualizarEtiqueta,
                limpiarEtiqueta
            }}
        >
            {props.children}
        </EtiquetaContext.Provider>
    )
}

export default EtiquetaState;