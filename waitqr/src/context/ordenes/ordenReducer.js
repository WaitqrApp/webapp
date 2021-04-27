import {ORDEN_SESIONINDIVIDUAL} from '../../types'
import {ORDEN_RESTAURANTE} from '../../types'
import {AGREGAR_ORDEN} from '../../types'
import {VALIDAR_ORDEN} from '../../types'
import {ELIMINAR_ORDEN} from '../../types'
import {ESTADO_ORDEN} from '../../types'
import {ORDEN_ACTUAL} from '../../types'
import {ACTUALIZAR_ORDEN} from '../../types'
import {LIMPIAR_ORDEN} from '../../types'


export default (state, action) => {
    switch(action.type){
        case ORDEN_SESIONINDIVIDUAL:
            return{
                ...state,
                ordensesionindividual:action.payload
            }
            case ORDEN_RESTAURANTE:
            return{
                ...state,
                ordenrestaurante:action.payload
            }
        case AGREGAR_ORDEN:
            return{
                ...state,
                ordensesionindividual: [...state.ordensesionindividual, action.payload],
                errororden: false
            }
        case VALIDAR_ORDEN:
            return{
                ...state,
                errororden: true
            }
        case ELIMINAR_ORDEN:
            return{
                ...state,
                ordensesionindividual: state.ordensesionindividual.filter(orden => orden._id !== action.payload)
            }
        case ACTUALIZAR_ORDEN:
            return{
                ...state,
                ordensesionindividual: state.ordensesionindividual.map(orden => orden._id === action.payload._id 
                    ? action.payload
                    : orden)
            }
        case ORDEN_ACTUAL:
        return{
            ...state,
            orden: state.ordensesionindividual.filter(orden => orden._id === action.payload)
        }
        case LIMPIAR_ORDEN:
            return{
                ...state,
                ordenseleccionada:null

            }
        
            

        default: 
        return state;
    }
}