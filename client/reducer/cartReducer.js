import { types } from '../types/types';

const initialState = { 
    cart: [],

};

const cartReducer = (state = initialState, action) => {
    let newCart= null;
    switch (action.type) {
        case types.cartAdd:
            let itemCart = {...action.payload,quantity:1};
            newCart = [...state.cart,itemCart];

            return {
                ...state,
                cart: newCart,
            };
        case types.cartIncrease:{
            const {idItem,number} = action.payload;
            newCart = state.cart.map(item => {
                if(idItem === item._id)
                    return {...item,quantity: item.quantity+number};
                return item;
            })
            return {
                ...state,
                cart:newCart
            }
        }  
        case types.cartDelete:
            newCart = state.cart.filter(item => {
                return item._id !== action.payload._id
            });  
            return {
                ...state,
                cart: newCart
            }
        case types.cartReload:
            let cart = action.payload;
            return {
                ...state,
                cart
            }
        case types.cartClear:
            return {
                ...state,
                cart : []
            }
        default:
            return state;
    }
};
export default cartReducer;