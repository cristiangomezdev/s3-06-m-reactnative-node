import { Provider } from 'react-redux';
import  store from './store'
import {Persistor} from './store';
import { NativeRouter } from "react-router-native";
import AppRoutes from './router/AppRoutes';
import {PersistGate} from 'redux-persist/integration/react'
import React, { useEffect, useState } from 'react';
import WelcomeScreen from './pages/WelcomeScreen';


// Keep the splash screen visible while we fetch resources


export default function App() {
  const [Load, setLoad] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 5000);
    
  }, []);
  if (Load) {
    return (<WelcomeScreen />)
  }

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

