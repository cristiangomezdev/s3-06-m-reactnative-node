import { types } from "../types/types";



  export const add = (product) => {
    return (dispatch) => {
/*       dispatch({
        type:types.cartClear}) */
      dispatch({
        type:types.cartAdd,
        payload:product})
      
      dispatch({
        type:types.cartIncrease,
        payload:product.id
      })
    }}