import { setProducts, setCategory } from "./slice";

// Cargar datos en el state de " example " en redux
export const getProducts = (datos) => {
  return async (dispatch) => {
    dispatch(setProducts(datos));
  };
};

export const getCategory = (datos) => {
  return async (dispatch) => {
    dispatch(setCategory(datos));
  };
};
