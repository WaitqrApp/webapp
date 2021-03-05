import {PLATILLOORDENADO_ORDEN} from '../../types'
import {AGREGAR_PLATILLOORDENADO} from '../../types'
import {VALIDAR_PLATILLOORDENADO} from '../../types'
import {ELIMINAR_PLATILLOORDENADO} from '../../types'
import {ESTADO_PLATILLOORDENADO} from '../../types'
import {PLATILLOORDENADO_ACTUAL} from '../../types'
import {ACTUALIZAR_PLATILLOORDENADO} from '../../types'
import {LIMPIAR_PLATILLOORDENADO} from '../../types'


export default (state, action) => {
    switch(action.type){
        case PLATILLOORDENADO_ORDEN:
            return{
                ...state,
                platilloOrdenadoOrden:action.payload
            }
        case AGREGAR_PLATILLOORDENADO:
            return{
                ...state,
                platilloOrdenadoOrden: [...state.platilloOrdenadoOrden, action.payload],
                errorplatilloordenado: false
            }
        case VALIDAR_PLATILLOORDENADO:
            return{
                ...state,
                errorplatilloordenado: true
            }
        case ELIMINAR_PLATILLOORDENADO:
            return{
                ...state,
                platilloOrdenadoOrden: state.platilloOrdenadoOrden.filter(platilloOrdenado => platilloOrdenado._id !== action.payload)
            }
        case ACTUALIZAR_PLATILLOORDENADO:
            return{
                ...state,
                platilloOrdenadoOrden: state.platilloOrdenadoOrden.map(platilloOrdenado => platilloOrdenado._id === action.payload._id 
                    ? action.payload
                    : platilloOrdenado)
            }
        case PLATILLOORDENADO_ACTUAL:
        return{
            ...state,
            orden: state.platilloOrdenadoOrden.filter(platilloOrdenado => platilloOrdenado._id === action.payload)
        }
        case LIMPIAR_PLATILLOORDENADO:
            return{
                ...state,
                platilloordenadoseleccionado:null

            }
        
            

        default: 
        return state;
    }
}