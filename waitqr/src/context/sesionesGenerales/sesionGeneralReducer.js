import {SESIONGENERAL_MESA} from '../../types'
import {AGREGAR_SESIONGENERAL} from '../../types'
import {VALIDAR_SESIONGENERAL} from '../../types'
import {ELIMINAR_SESIONGENERAL} from '../../types'
import {ESTADO_SESIONGENERAL} from '../../types'
import {SESIONGENERAL_ACTUAL} from '../../types'
import {ACTUALIZAR_SESIONGENERAL} from '../../types'
import {LIMPIAR_SESIONGENERAL} from '../../types'


export default (state, action) => {
    switch(action.type){
        case SESIONGENERAL_MESA:
            return{
                ...state,
                sesiongeneralmesa:action.payload
            }
        case AGREGAR_SESIONGENERAL:
            return{
                ...state,
                sesiongeneralmesa: [...state.sesiongeneralmesa, action.payload],
                errorsesiongeneral: false
            }
        case VALIDAR_SESIONGENERAL:
            return{
                ...state,
                errorsesiongeneral: true
            }
        case ELIMINAR_SESIONGENERAL:
            return{
                ...state,
                sesiongeneralmesa: state.sesiongeneralmesa.filter(sesiongeneral => sesiongeneral._id !== action.payload)
            }
        case ACTUALIZAR_SESIONGENERAL:
            return{
                ...state,
                sesiongeneralmesa: state.sesiongeneralmesa.map(sesiongeneral => sesiongeneral._id === action.payload._id 
                    ? action.payload
                    : sesiongeneral)
            }
        case SESIONGENERAL_ACTUAL:
        return{
            ...state,
            sesiongeneral: state.sesiongeneralmesa.filter(sesiongeneral => sesiongeneral._id === action.payload)
        }
        case LIMPIAR_SESIONGENERAL:
            return{
                ...state,
                sesiongeneralseleccionada:null

            }
        
            

        default: 
        return state;
    }
}