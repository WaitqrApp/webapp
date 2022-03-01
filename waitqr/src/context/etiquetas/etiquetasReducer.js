import {ETIQUETAS_NOMBREETIQUETA} from '../../types'
import {AGREGAR_ETIQUETA} from '../../types'
import {VALIDAR_ETIQUETA} from '../../types'
import {ELIMINAR_ETIQUETA} from '../../types'
import {ESTADO_ETIQUETA} from '../../types'
import {ETIQUETA_ACTUAL} from '../../types'
import {ACTUALIZAR_ETIQUETA} from '../../types'
import {LIMPIAR_ETIQUETA} from '../../types'


export default (state, action) => {
    switch(action.type){
        case ETIQUETAS_NOMBREETIQUETA:
            return{
                ...state,
                etiquetasnombreetiqueta:action.payload
            }
        case AGREGAR_ETIQUETA:
            return{
                ...state,
                etiquetasnombreetiqueta: [...state.etiquetasnombreetiqueta, action.payload],
                erroretiqueta: false
            }
        case VALIDAR_ETIQUETA:
            return{
                ...state,
                erroretiqueta: true
            }
        case ELIMINAR_ETIQUETA:
            return{
                ...state,
                etiquetasnombreetiqueta: state.etiquetasnombreetiqueta.filter(etiqueta => etiqueta._id !== action.payload)
            }
        case ACTUALIZAR_ETIQUETA:
            return{
                ...state, 
                etiquetasnombreetiqueta: state.etiquetasnombreetiqueta.map(etiqueta => etiqueta._id === action.payload._id 
                    ? action.payload
                    : etiqueta)
            }
        case ETIQUETA_ACTUAL:
        return{
            ...state,
            etiquetaactual:  action.payload
        }
        case LIMPIAR_ETIQUETA:
            return{
                ...state,
                etiquetaseleccionada:null

            }
        
            

        default: 
        return state;
    }
}