import { api } from "../helpers/api";
import { createOrder } from "../helpers/FunctionVarious";
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

export const buy = ({user},cart,card,total) => {
  return () => {

    if(!user || !cart || !card){
      return Alert.alert("something gone wrong");
    }

    const cartProducts = cart.cart.map((item)=>{
      return{
        _id:item._id,
        amount:item.quantity
      } 
    })
    
    const formdata = {
      shippingAddress : card.address,
      paymentMethod : card.code,
      products : cartProducts,
      totalPrice : total
    }

    return api.postOneOrder(formdata,user._id).then((response)=>{

    if (response.status === 400) {
       return {
         status: "error",
         message: "error, user does not exist"
       };
    }

    if (response.status === 500) {
       return {
          status: "error - not expected"
       };
    }

    return {
      status: "success",
      message: "buy success"
    };
  }).catch((error)=>{
    console.log(error)
  })

  }
};