import React, {useReducer} from 'react';
import MenuContext from './menusContext';
import MenuReducer from './menusReducer';
import {MENUS_RESTAURANTE} from '../../types'
import {AGREGAR_MENU} from '../../types'
import {VALIDAR_MENU} from '../../types'
import {ELIMINAR_MENU} from '../../types'
import {ESTADO_MENU} from '../../types'
import {MENU_ACTUAL} from '../../types'
import {ACTUALIZAR_MENU} from '../../types'
import {LIMPIAR_MENU} from '../../types'
import clienteAxios from '../../config/axios'

const MenuState = props =>{
    
    const initialState ={
        menusrestaurante: [],
        errormenu: false,
        menuseleccionado:null,
        menuactual:null

    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(MenuReducer, initialState);

    //crear las funciones


    //obtener las menus de un restaurante

    const obtenerMenus = async restaurante =>{
        try {
            const resultado = await clienteAxios.get('/api/menus',{params:{restaurante}});
            console.log(resultado)
            dispatch({
                type: MENUS_RESTAURANTE,
                payload: resultado.data.menus
            })
        } catch (error) {
            console.log(error)
        }
    }

    //agregar una tarea al restaurante seleccionado
    const agregarMenu = async  menu =>{
       // tarea.id = uuid.v4();
        try {
            const resultado = await clienteAxios.post('/api/menus', menu);
            console.log(resultado)
            dispatch({
                type: AGREGAR_MENU,
                payload: menu
            })
        } catch (error) {
            console.log(error);
        }
    }


    //valida y muestra un error en caso de que sea necesario
    const validarMenu = () =>{
        dispatch({
            type: VALIDAR_MENU
        })
    }

    // Eliminar tarea por id
    const eliminarMenu = async (id, restaurante) =>{
        try {
            await clienteAxios.delete(`/api/menus/${id}`, {params: {restaurante}});
            dispatch({
                type: ELIMINAR_MENU,
                payload: id
            })
        } catch (error) {
            console.timeLog(error)
        }
    }

   

    //Edita o modifica una tarea
    const actualizarMenu = async menu =>{
        console.log(menu);
       try {
           const resultado = await clienteAxios.put(`/api/menus/${menu._id}`,menu);
           console.log(resultado)
        dispatch({
            type: ACTUALIZAR_MENU,
            payload: resultado.data.menu
        })
       } catch (error) {
           console.log(error)
       }
    }
    //Extrae una tarea para edicion
    const guardarMenuActual = menuId =>{
        try {
            console.log(menuId)
        dispatch({
            type:MENU_ACTUAL,
            payload: menuId 
        })
        } catch (error) {
            console.log(error)
        }
        
         
    }

    
    //Elimina la menuseleccionado

    const limpiarMenu = () =>{
        dispatch({
            type: LIMPIAR_MENU
        })
    }

    return (
        <MenuContext.Provider
            value ={{
               // menus: state.menus,
                menusrestaurante: state.menusrestaurante,
                errormenu: state.errormenu,
                menuseleccionado: state.menuseleccionado,
                menuactual: state.menuactual,
                obtenerMenus,
                agregarMenu,
                validarMenu,
                eliminarMenu,
                guardarMenuActual,
                actualizarMenu,
                limpiarMenu
            }}
        >
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuState; 