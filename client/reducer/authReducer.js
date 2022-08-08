import { types } from '../types/types';

const initialState = {
    user: JSON.parse(localStorage.getItem('userNoClassroom')) || "",
};
console.log(initialState.student, "state reducer--->")

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload
            }
        case types.authLogout:
            return {
                user : "",
                student : "",
                subjects : "",
                teachers : ""
            }
        default:
            return state
    }
}

export default AuthReducer;


