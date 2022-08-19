/* //STORE 14:06 min repaso martes
import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
//redux thuink sirve para trabajar con lñas llamadas asincronas 
import thunk from "redux-thunk";
import { rootReducer } from "../reducer";


export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))   */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore,applyMiddleware } from '@reduxjs/toolkit'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from 'redux-persist';
import rootReducer from '../reducer';
const persistConfig={
  key:'root',
  storage:AsyncStorage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)
const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
const Persistor = persistStore(store)

export {Persistor}
export default store;
/* export const store = configureStore({
  reducer: {
    auth: AuthReducer
  } */
