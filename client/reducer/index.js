import { combineReducers } from "redux";

import AuthReducer from "./authReducer";
import CartReducer from "./cartReducer";


const rootReducer = combineReducers({  AuthReducer,CartReducer})

export default rootReducer