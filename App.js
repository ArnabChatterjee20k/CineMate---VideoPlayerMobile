import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './src/TabNav';
import { store } from './src/features/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNav/>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}
