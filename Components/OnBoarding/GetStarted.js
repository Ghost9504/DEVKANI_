import React, { useEffect, useState } from 'react';

import { StyleSheet, Animated,useWindowDimensions, View,Text, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import Signup from '../SignIn/Signup';
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";


export default NextButton = ({percentage}) => {

    const navigation=useNavigation();
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);





    return(
        <View style={{
            flex: 4,
            width:10,
            height:60,
            borderRadius: 50,
            position: 'absolute',
            bottom: 69,
            // left: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0000',
            width: '100%',
        }} >
            <TouchableOpacity style={styles.butto} activeOpacity={0.6} onPress={()=>navigation.navigate('Signup')}>

                <Text style={{
                    color: '#fff',
                    fontSize: 15,
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>Getting started</Text>
               
            </TouchableOpacity>


  
        
        
        </View>
        





  
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000',
    },
    butto: {
        width:189,
        height:50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor:"#328B77",
        borderRadius:6,
  


    }

});