import {FORMULARIO_RESTAURANTE, ELIMINAR_RESTAURANTE} from '../../types';
import {OBTENER_RESTAURANTES} from '../../types';
import {AGREGAR_RESTAURANTE} from '../../types';
import {VALIDAR_FORMULARIO} from '../../types';
import {RESTAURANTE_ACTUAL} from '../../types';
import {RESTAURANTE_ERROR} from '../../types';

export default (state,action) =>{
    switch(action.type){
        case FORMULARIO_RESTAURANTE:
            return{
                ...state,
                formulario: true
            }
        case OBTENER_RESTAURANTES:
            console.log(action.payload)
            return{
                ...state,
                restaurantes: action.payload
            }
        case AGREGAR_RESTAURANTE:
            return{
                ...state,
                restaurantes: [...state.restaurantes, action.payload],
                formulario: false,
                errorformulario: false
            }
            case VALIDAR_FORMULARIO:
                return{
                    ...state,
                    errorformulario: true
                }
            case RESTAURANTE_ACTUAL:
                return{
                    ...state,
                    restaurante: state.restaurantes.filter(restaurante => restaurante._id === action.payload)
                }
                case ELIMINAR_RESTAURANTE:
                    return{
                        ...state,
                        restaurantes: state.restaurantes.filter(restaurante => restaurante._id !== action.payload),
                        restaurante: null

                    }
                    case RESTAURANTE_ERROR:
                        return{
                            ...state,
                            mensaje: action.payload
                        }
        default:
            return state;
    }
}