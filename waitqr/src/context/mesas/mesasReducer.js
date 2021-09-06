import {MESAS_RESTAURANTE} from '../../types'
import {AGREGAR_MESA} from '../../types'
import {VALIDAR_MESA} from '../../types'
import {ELIMINAR_MESA} from '../../types'
import {ESTADO_MESA} from '../../types'
import {MESA_ACTUAL} from '../../types'
import {ACTUALIZAR_MESA} from '../../types'
import {LIMPIAR_MESA} from '../../types'
import {OBTENER_UNA_MESA} from '../../types'


export default (state, action) => {
    switch(action.type){
        case MESAS_RESTAURANTE:
            return{
                ...state,
                mesasrestaurante:action.payload
            }
        case OBTENER_UNA_MESA:
            return{
                ...state,
                mesaobtenida: action.payload
            }
        case AGREGAR_MESA:
            return{
                ...state,
                mesasrestaurante: [...state.mesasrestaurante, action.payload],
                errormesa: false
            }
        case VALIDAR_MESA:
            return{
                ...state,
                errormesa: true
            }
        case ELIMINAR_MESA:
            return{
                ...state,
                mesasrestaurante: state.mesasrestaurante.filter(mesa => mesa._id !== action.payload)
            }
        case ACTUALIZAR_MESA:
            return{
                ...state,
                mesasrestaurante: state.mesasrestaurante.map(mesa => mesa._id === action.payload._id 
                    ? action.payload
                    : mesa)
            }
        case MESA_ACTUAL:
            return{
                ...state,
                mesa:  action.payload 
            }
        case LIMPIAR_MESA:
            return{
                ...state,
                mesaseleccionada:null

            }
        
            

        default: 
        return state;
    }
}