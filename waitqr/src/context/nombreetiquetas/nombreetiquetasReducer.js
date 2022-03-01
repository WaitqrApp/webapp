import {NOMBREETIQUETAS_PLATILLO} from '../../types'
import {AGREGAR_NOMBREETIQUETA} from '../../types'
import {VALIDAR_NOMBREETIQUETA} from '../../types'
import {ELIMINAR_NOMBREETIQUETA} from '../../types'
import {ESTADO_NOMBREETIQUETA} from '../../types'
import {NOMBREETIQUETA_ACTUAL} from '../../types'
import {ACTUALIZAR_NOMBREETIQUETA} from '../../types'
import {LIMPIAR_NOMBREETIQUETA} from '../../types'


export default (state, action) => {
    switch(action.type){
        case NOMBREETIQUETAS_PLATILLO:
            return{
                ...state,
                nombreetiquetasplatillo:action.payload
            }
        case AGREGAR_NOMBREETIQUETA:
            return{
                ...state,
                nombreetiquetasplatillo: [...state. nombreetiquetasplatillo, action.payload],
                errornombreetiqueta: false
            }
        case VALIDAR_NOMBREETIQUETA:
            return{
                ...state,
                errornombreetiqueta: true
            }
        case ELIMINAR_NOMBREETIQUETA:
            return{
                ...state,
                nombreetiquetasplatillo: state. nombreetiquetasplatillo.filter(nombreetiqueta => nombreetiqueta._id !== action.payload)
            }
        case ACTUALIZAR_NOMBREETIQUETA:
            return{
                ...state, 
                nombreetiquetasplatillo: state.nombreetiquetasplatillo.map(nombreetiqueta => nombreetiqueta._id === action.payload._id 
                    ? action.payload
                    : nombreetiqueta)
            }
        case NOMBREETIQUETA_ACTUAL:
        return{
            ...state,
            nombreetiquetaactual:  action.payload
        }
        case LIMPIAR_NOMBREETIQUETA:
            return{
                ...state,
                nombreetiquetaseleccionada:null

            }
        
            

        default: 
        return state;
    }
}