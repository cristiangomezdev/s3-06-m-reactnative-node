import { types } from '../types/types';

const initialState = {
    token:  "",
    user:  ""
};

const AuthReducer = ( state = initialState, action) => {
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
                token: null,
            }
        default:
            return state
    }
}

export default AuthReducer;

