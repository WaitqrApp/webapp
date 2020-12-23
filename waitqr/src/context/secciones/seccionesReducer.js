import {SECCIONES_MENU} from '../../types'
import {AGREGAR_SECCION} from '../../types'
import {VALIDAR_SECCION} from '../../types'
import {ELIMINAR_SECCION} from '../../types'
import {ESTADO_SECCION} from '../../types'
import {SECCION_ACTUAL} from '../../types'
import {ACTUALIZAR_SECCION} from '../../types'
import {LIMPIAR_SECCION} from '../../types'


export default (state, action) => {
    switch(action.type){
        case SECCIONES_MENU:
            return{
                ...state,
                seccionesmenu:action.payload
            }
        case AGREGAR_SECCION:
            return{
                ...state,
                seccionesmenu: [...state.seccionesmenu, action.payload],
                errorseccion: false
            }
        case VALIDAR_SECCION:
            return{
                ...state,
                errorseccion: true
            }
        case ELIMINAR_SECCION:
            return{
                ...state,
                seccionesmenu: state.seccionesmenu.filter(seccion => seccion._id !== action.payload)
            }
        case ACTUALIZAR_SECCION:
            return{
                ...state,
                seccionesmenu: state.seccionesmenu.map(seccion => seccion._id === action.payload._id 
                    ? action.payload
                    : seccion)
            }
        case SECCION_ACTUAL:
        return{
            ...state,
            seccion: state.seccionesmenu.filter(seccion => seccion._id === action.payload)
        }
        case LIMPIAR_SECCION:
            return{
                ...state,
                seccionseleccionada:null

            }
        
            

        default: 
        return state;
    }
}