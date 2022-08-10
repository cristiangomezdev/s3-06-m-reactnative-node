import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import {store} from './store'
import Profile from './pages/Profile';
export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style='auto' />
      <Profile/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
