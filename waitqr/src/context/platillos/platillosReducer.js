import {PLATILLOS_SECCION} from '../../types'
import {AGREGAR_PLATILLO} from '../../types'
import {VALIDAR_PLATILLO} from '../../types'
import {ELIMINAR_PLATILLO} from '../../types'
import {ESTADO_PLATILLO} from '../../types'
import {PLATILLO_ACTUAL} from '../../types'
import {ACTUALIZAR_PLATILLO} from '../../types'
import {LIMPIAR_PLATILLO} from '../../types'


export default (state, action) => {
    switch(action.type){
        case PLATILLOS_SECCION:
            return{
                ...state,
                platillosseccion:action.payload
            }
        case AGREGAR_PLATILLO:
            return{
                ...state,
                platillosseccion: [...state.platillosseccion, action.payload],
                errorplatillo: false
            }
        case VALIDAR_PLATILLO:
            return{
                ...state,
                errorplatillo: true
            }
        case ELIMINAR_PLATILLO:
            return{
                ...state,
                platillosseccion: state.platillosseccion.filter(platillo => platillo._id !== action.payload)
            }
        case ACTUALIZAR_PLATILLO:
            return{
                ...state,
                platillosseccion: state.platillosseccion.map(platillo => platillo._id === action.payload._id 
                    ? action.payload
                    : platillo)
            }
        case PLATILLO_ACTUAL:
        return{
            ...state,
            platillo: state.platillosseccion.filter(platillo => platillo._id === action.payload)
        }
        case LIMPIAR_PLATILLO:
            return{
                ...state,
                platilloseleccionado:null

            }
        
            

        default: 
        return state;
    }
}