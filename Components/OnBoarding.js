import Onboarding from 'react-native-onboarding-swiper';
import { StyleSheet, Text, View, SafeAreaView, Animated, Image, Dimensions } from 'react-native';

export default function App() {
    return (
        <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/image-removebg-preview.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/image-removebg-preview.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/image-removebg-preview.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
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


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


