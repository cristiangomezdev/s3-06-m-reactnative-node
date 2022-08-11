import { Provider } from 'react-redux';
import {store} from './store'
import { NativeRouter } from "react-router-native";
import AppRoutes from './router/AppRoutes';


export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <AppRoutes />
      </NativeRouter>
    </Provider>
  );
}

