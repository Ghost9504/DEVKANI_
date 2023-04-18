import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Splashscreen from './Components/Solashscree';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './Components/SignIn/Signup';
const Stack = createStackNavigator();
import { RootNavigator } from './navigation';
import { AuthenticatedUserProvider } from './providers';
import { SignupScreen } from './screens/SignupScreen';
import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ForgotPasswordScreen } from './screens';
import 'expo-dev-client';



export default function App() {
  <StatusBar style="auto" />
  return (
    // <SafeAreaProvider>
    //   <Fetch />
    // </SafeAreaProvider>
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name=" " component={Splashscreen} />
        <Stack.Screen  options={{headerShown:false}} name="Signup" component={SignupScreen} />
        <Stack.Screen  options={{headerShown:false}} name="Login" component={LoginScreen} />
        <Stack.Screen  options={{headerShown:false}} name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen  options={{headerShown:false}} name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider> ,
      <AuthenticatedUserProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </AuthenticatedUserProvider>





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
