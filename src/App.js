// App.js
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/Login';
import Home from './screens/Home';
import NewRegistration from './screens/NewRegistration';
import ForgotPassword from './screens/ForgotPassword';

const Stack = createStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#FFFFFF', // Set the background color to white
    },
};

const App = () => {
  return (
      <NavigationContainer theme={MyTheme}>
          <Stack.Navigator>
              <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="NewRegistration" component={NewRegistration} options={{headerShown: false}}/>
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
              <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
