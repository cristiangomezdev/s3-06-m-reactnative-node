import { types } from '../types/types';
import products from '../data/productos'
const initialState = { 
    cart: ""
};

const cartReducer = (state = initialState, action) => {
    let newCart= null;
    switch (action.type) {
        case types.cartAdd:
            if(state.cart !== ""){
                const { id } = action.payload;
                const find = state.cart.find((item) => item.id === id);
                if(find){
                        let itemCart = state.cart.map((item) =>
                        item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                          }
                        : item
                        )
                    newCart = itemCart;
                return {
                    ...state,
                    cart: newCart}
                }
                let itemCart = {...action.payload,quantity:1};
                newCart = [...state.cart,itemCart];
    
            return {
                ...state,
                cart: newCart}
            }else{
                let itemCart = {...action.payload,quantity:1};
                newCart = [...state.cart,itemCart];
    
            return {
                ...state,
                cart: newCart}
            }
           

        case types.cartIncrease:{

            const id = action.payload;
            newCart = state.cart.map(item => {
                
                if(id === item.id)
                    return {...item,quantity: item.quantity+1};
                return item;
            })
            
            return {
                ...state,
                cart:newCart
            }
        }  
        case types.cartDecrease:{
            const id = action.payload;
            newCart = state.cart.map(item => {
                if(id === item.id)
                    return {...item,quantity: item.quantity-1};
                return item;
            })
            return {
                ...state,
                cart:newCart
            }
        }  
        case types.cartDelete:
            newCart = state.cart.filter(item => {
                return item.id !== action.payload
            });  
            return {
                ...state,
                cart: newCart
            }
        case types.cartClear:
            return {
                cart : ""
            }
        default:
            return state;
    }
};

 export function getTotal(state) {

  if(state.cart !== ""){
    return state.cart.reduce((acc,item)=> {
        return Math.round(acc = acc + item.price*item.quantity)
      },0)
}else{
   /*  console.log('emptyCartReducer') */
}
  } 
  export function getProducts(state) {
    if(state){
        return state
    }else{
        return null
    }
    
  } 

export default cartReducer;

