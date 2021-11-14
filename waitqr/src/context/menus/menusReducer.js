import { MENUS_RESTAURANTE } from "../../types";
import { AGREGAR_MENU } from "../../types";
import { VALIDAR_MENU } from "../../types";
import { ELIMINAR_MENU } from "../../types";
import { ESTADO_MENU } from "../../types";
import { MENU_ACTUAL } from "../../types";
import { MENU_ACTIVO } from "../../types";
import { ACTUALIZAR_MENU } from "../../types";
import { LIMPIAR_MENU } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case MENUS_RESTAURANTE:
      return {
        ...state,
        menusrestaurante: action.payload,
      };
    case AGREGAR_MENU:
      return {
        ...state,
        menusrestaurante: [...state.menusrestaurante, action.payload],
        errormenu: false,
      };
    case VALIDAR_MENU:
      return {
        ...state,
        errormenu: true,
      };
    case ELIMINAR_MENU:
      return {
        ...state,
        menusrestaurante: state.menusrestaurante.filter(
          (menu) => menu._id !== action.payload
        ),
      };
    case ACTUALIZAR_MENU:
      return {
        ...state,
        menusrestaurante: state.menusrestaurante.map((menu) =>
          menu._id === action.payload._id ? action.payload : menu
        ),
      };
    case MENU_ACTUAL:
      return {
        ...state,
        menu: state.menusrestaurante.filter(
          (menu) => menu._id === action.payload
        ),
      };
    case MENU_ACTIVO:
      return {
        ...state,
        menu: state.menusrestaurante.filter(
          (menu) => menu._id === action.payload
        ),
      };
    case LIMPIAR_MENU:
      return {
        ...state,
        menuseleccionado: null,
      };

    default:
      return state;
  }
};
