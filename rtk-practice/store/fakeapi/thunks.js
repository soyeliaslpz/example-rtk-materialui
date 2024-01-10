import { setProducts } from "./slice";

// Cargar datos en el state de " example " en redux
export const getProducts = (datos) => {
  return async (dispatch) => {
    dispatch(setProducts(datos));
  };
};
