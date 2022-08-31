import { types } from '../types/types';

const initialState = {
    token:  null,
    user:  null
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
                user : "",
                token: "",
            }
        default:
            return state
    }
}

export default AuthReducer;
