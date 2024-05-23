import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { enableScreens } from 'react-native-screens';
import CryptoHeader from './src/components/CryptoHeader';
import AddCrypto from './src/components/AddCrypto';

enableScreens();

const Stack = createNativeStackNavigator();

const options = {
  title: '',
  headerBackTitle: 'Back to list',
  headerBackTitleVisible: true,
  headerStyle: {
    backgroundColor: 'white', 
  },
  headerTintColor: '#385775',

};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              header: () => <CryptoHeader  />,
            }}
          />
            <Stack.Screen
            name="AddCrypto"
            component={AddCrypto}
            options={options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
