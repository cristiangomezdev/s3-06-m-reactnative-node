import { Provider } from 'react-redux';
import {store} from './store'
import { NativeRouter } from "react-router-native";
import { Main } from "./main";


export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </Provider>
  );
}
