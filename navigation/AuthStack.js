import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboard from '../Components/OnBoarding/Onboard';
import SplashScreen from '../Components/Solashscree';

import { LoginScreen, SignupScreen, ForgotPasswordScreen } from '../screens';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='SplashScreen'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='SplashScreen' component={SplashScreen} />
      <Stack.Screen name='Onboard' component={Onboard} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};
