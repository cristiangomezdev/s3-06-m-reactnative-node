
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
