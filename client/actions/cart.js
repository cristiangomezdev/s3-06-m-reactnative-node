import { types } from "../types/types";

export const add = (product) => {
  return (dispatch) => {
       dispatch({
      type: types.cartAdd,
      payload: product,
    });   
  };
};
export const increase = (id) => {
  return (dispatch) => {
    dispatch({
      type: types.cartIncrease,
      payload: id,
    });
  };
};
export const decrease = (id) => {
  return (dispatch) => {
    dispatch({
      type: types.cartDecrease,
      payload: id,
    });
  };
};
export const eliminate = (id) => {
  return (dispatch) => {
    dispatch({
      type: types.cartDelete,
      payload: id,
    });
  };
};
export const clear = (product) => {
  return (dispatch) => {
        dispatch({
        type:types.cartClear})    
  };
};