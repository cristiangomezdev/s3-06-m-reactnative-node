import { types } from '../types/types';

const initialState = { 
    cart: []
};

const cartReducer = (state = initialState, action) => {
    let newCart= null;
    switch (action.type) {
        case types.cartAdd:
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

                /* let itemCart = {...action.payload,quantity:2}; */
                newCart = itemCart;
                console.log(state)
            return {
                ...state,
                cart: newCart}
            }
            let itemCart = {...action.payload,quantity:1};
            newCart = [...state.cart,itemCart];
            console.log(state)
        return {
            ...state,
            cart: newCart}

        case types.cartIncrease:{
            const {id} = action.payload;
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
            const {id,number} = action.payload;
            newCart = state.cart.map(item => {
                if(id === item.id)
                    return {...item,quantity: item.quantity-number};
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
                cart : []
            }
        default:
            return state;
    }
};
export default cartReducer;