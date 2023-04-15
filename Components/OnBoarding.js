import Onboarding from 'react-native-onboarding-swiper';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Animated, Image, Dimensions } from 'react-native';

export default function ONS() {
  <StatusBar style="auto" />
    return (

        <Onboarding
        pages={[
          {
            backgroundColor: '#F9FAFC',
            image: <Image source={require('../assets/image-removebg-preview.png')} styles={{
              width: 100,
              height: 100,
              marginBottom: 20,
              }}/>,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#F9FAFC',
            image: <Image source={require('../assets/image-removebg-preview.png')} styles={{
              width: 200,
              height: 200,
              }}/>,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#F9FAFC',
            image: <Image source={require('../assets/image-removebg-preview.png')}  styles={{
              width: 100,
              height: 100,
              marginBottom: 20,
              }} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#F9FAFC',
            image: <Image source={require('../assets/favicon.png')} styles={{
                width: 200,
                height: 200,
                }}/>,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
         
        ]}
      /> 
    );
}


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });


