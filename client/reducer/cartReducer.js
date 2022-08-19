import { types } from '../types/types';
import AsyncStorage from "@react-native-async-storage/async-storage";
const initialState = {
    token:  "",
    user:  "",
};

const CartReducer = ( state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload
            }
        case types.authRegister:
            return{
                ...action.payload
            }     
        case types.authLogout:
            return {
                user : "",
                token: "",
            }
        default:
            return state
    }
}

export default CartReducer;