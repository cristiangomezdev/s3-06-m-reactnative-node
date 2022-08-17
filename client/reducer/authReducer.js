import { types } from '../types/types';

const initialState = {
};

const AuthReducer = (state = initialState, action) => {
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
                user : null,
            }
        default:
            return state
    }
}

export default AuthReducer;

