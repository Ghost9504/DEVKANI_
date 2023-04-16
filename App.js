import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Splashscreen from './Components/Solashscree';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './Components/SignIn/Signup';
const Stack = createStackNavigator();

export default function App() {
  <StatusBar style="auto" />
  return (
    // <SafeAreaProvider>
    //   <Splashscreen></Splashscreen>
    // </SafeAreaProvider>

<SafeAreaProvider>
<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name=" " component={Splashscreen} />
      <Stack.Screen  name="Signup" component={Signup} />
    </Stack.Navigator>
  </NavigationContainer>
</SafeAreaProvider>


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
