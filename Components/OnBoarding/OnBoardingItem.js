import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions,item,image } from 'react-native';
import Lottie from 'lottie-react-native';

export default OnBordingItem = ({item}) => {
    const { width } = useWindowDimensions();
    return(

        <View style={[styles.container, {width}]  }>
            {/* <Text>Screen</Text> */}
            <Image source = {item.image} style = {[styles.image, {width, resizeMode: 'contain'}]} />
            {/* <Lottie source = {require('./Mobile-Marketing.json')}  autoPlay loop /> */}
            <View style={{flex: 0.3}} >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top:34,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        flex: 0.7,
        justifyContent: 'center'
    },
    title:{
        fontSize: 28,
        fontWeight: '800',
        color: '#182748',
        textAlign: 'center',
        marginBottom: 10
    },
    description:{
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 30,
        paddingVertical: 10
    }
});