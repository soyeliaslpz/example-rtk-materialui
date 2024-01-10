import { setPokemon } from "./slice";

// Cargar datos en el state de " example " en redux
export const getPokemon = (datos) => {
  return async (dispatch, getState) => {
    dispatch(setPokemon(datos));
  };
};

// export const getCategory = (datos) => {
//   return async (dispatch, getState) => {
//     dispatch(setCategory(datos));
//   };
// };
