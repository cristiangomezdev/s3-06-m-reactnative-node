import { Provider } from 'react-redux';
import  store from './store'
import {Persistor} from './store';
import { NativeRouter } from "react-router-native";
import AppRoutes from './router/AppRoutes';
import {PersistGate} from 'redux-persist/integration/react'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={Persistor}>
      <NativeRouter>
        <AppRoutes />
      </NativeRouter>
      </PersistGate>
    </Provider>
  );
}

