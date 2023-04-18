import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB5Li9631-52GoZVWgbzcj0w3_pmiytr9k",
  authDomain: "devkanidb.firebaseapp.com",
  projectId: "devkanidb",
  storageBucket: "devkanidb.appspot.com",
  messagingSenderId: "1072977766495",
  appId: "1:1072977766495:web:eeb721fce60482893f53ea"
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };




