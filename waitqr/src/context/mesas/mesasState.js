import React, {useReducer} from 'react';
import MesaContext from './mesasContext';
import MesaReducer from './mesasReducer';
import {MESAS_RESTAURANTE} from '../../types'
import {AGREGAR_MESA} from '../../types'
import {VALIDAR_MESA} from '../../types'
import {ELIMINAR_MESA} from '../../types'
import {ESTADO_MESA} from '../../types'
import {MESA_ACTUAL} from '../../types'
import {ACTUALIZAR_MESA} from '../../types'
import {LIMPIAR_MESA} from '../../types'
import clienteAxios from '../../config/axios'

const MesaState = props =>{
    
    const initialState ={
        mesasrestaurante: [],
        errormesa: false,
        mesaseleccionada:null,
        mesa:null

    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(MesaReducer, initialState);

    //crear las funciones


    //obtener las mesas de un restaurante

    const obtenerMesas = async restaurante =>{
        try {
            const resultado = await clienteAxios.get('/api/mesas',{params:{restaurante}});
            console.log(resultado)
            dispatch({
                type: MESAS_RESTAURANTE,
                payload: resultado.data.mesas
            })
        } catch (error) {
            console.log(error)
        }
    }

    

    //agregar una tarea al restaurante seleccionado
    const agregarMesa = async  mesa =>{
       // tarea.id = uuid.v4();
        try {
            const resultado = await clienteAxios.post('/api/mesas', mesa);
            console.log(resultado)
            dispatch({
                type: AGREGAR_MESA,
                payload: mesa
            })
        } catch (error) {
            console.log(error);
        }
    }


    //valida y muestra un error en caso de que sea necesario
    const validarMesa = () =>{
        dispatch({
            type: VALIDAR_MESA
        })
    }

    // Eliminar tarea por id
    const eliminarMesa = async (id, restaurante) =>{
        try {
            await clienteAxios.delete(`/api/mesas/${id}`, {params: {restaurante}});
            dispatch({
                type: ELIMINAR_MESA,
                payload: id
            })
        } catch (error) {
            console.timeLog(error)
        }
    }

   

    //Edita o modifica una tarea
    const actualizarMesa = async mesa =>{
        console.log(mesa);
       try {
           const resultado = await clienteAxios.put(`/api/mesas/${mesa._id}`,mesa);
           console.log(resultado)
        dispatch({
            type: ACTUALIZAR_MESA,
            payload: resultado.data.mesa
        })
       } catch (error) {
           console.log(error)
       }
    }
    //Extrae una tarea para edicion
    const guardarMesaActual = mesaId =>{
        dispatch({
            type:MESA_ACTUAL,
            payload: mesaId
        })
         
    }

    
    //Elimina la mesaseleccionada

    const limpiarMesa = () =>{
        dispatch({
            type: LIMPIAR_MESA
        })
    }

    return (
        <MesaContext.Provider
            value ={{
               // mesas: state.mesas,
                mesasrestaurante: state.mesasrestaurante,
                errormesa: state.errormesa,
                mesaseleccionada: state.mesaseleccionada,
                mesa: state.mesa,
                obtenerMesas,
                agregarMesa,
                validarMesa,
                eliminarMesa,
                guardarMesaActual,
                actualizarMesa,
                limpiarMesa
            }}
        >
            {props.children}
        </MesaContext.Provider>
    )
}

export default MesaState; 