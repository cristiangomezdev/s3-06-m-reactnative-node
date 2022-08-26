import { types } from "../types/types";

export const add = (product) => {
  return (dispatch) => {
/*            dispatch({
        type:types.cartClear})  */
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
