import {SESIONINDIVIDUAL_SESIONGENERAL} from '../../types'
import {AGREGAR_SESIONINDIVIDUAL} from '../../types'
import {VALIDAR_SESIONINDIVIDUAL} from '../../types'
import {ELIMINAR_SESIONINDIVIDUAL} from '../../types'
import {ESTADO_SESIONINDIVIDUAL} from '../../types'
import {SESIONINDIVIDUAL_ACTUAL} from '../../types'
import {ACTUALIZAR_SESIONINDIVIDUAL} from '../../types'
import {LIMPIAR_SESIONINDIVIDUAL} from '../../types'


export default (state, action) => {
    switch(action.type){
        case SESIONINDIVIDUAL_SESIONGENERAL:
            return{
                ...state,
                sesionindividualsesiongeneral:action.payload
            }
        case AGREGAR_SESIONINDIVIDUAL:
            return{
                ...state,
                sesionindividualsesiongeneral: [...state.sesionindividualsesiongeneral, action.payload],
                errorsesionindividual: false
            }
        case VALIDAR_SESIONINDIVIDUAL:
            return{
                ...state,
                errorsesionindividual: true
            }
        case ELIMINAR_SESIONINDIVIDUAL:
            return{
                ...state,
                sesionindividualsesiongeneral: state.sesionindividualsesiongeneral.filter(sesionindividual => sesionindividual._id !== action.payload)
            }
        case ACTUALIZAR_SESIONINDIVIDUAL:
            return{
                ...state,
                sesionindividualsesiongeneral: state.sesionindividualsesiongeneral.map(sesionindividual => sesionindividual._id === action.payload._id 
                    ? action.payload
                    : sesionindividual)
            }
        case SESIONINDIVIDUAL_ACTUAL:
        return{
            ...state,
            sesionindividual: state.sesionindividualsesiongeneral.filter(sesionindividual => sesionindividual._id === action.payload)
        }
        case LIMPIAR_SESIONINDIVIDUAL:
            return{
                ...state,
                sesionindividualseleccionada:null

            }
        
            

        default: 
        return state;
    }
}