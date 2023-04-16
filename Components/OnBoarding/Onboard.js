// this is Pari's code 😊😁
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, {useState, useRef} from "react";
import { View, Text, StyleSheet, FlatList, Animated} from "react-native";

import OnBoardingItem from './OnBoardingItem';
import slides from '../slides';
import Paginator from "./Paginator";

import NextButton from "./GetStarted";

export default Onboard =() =>{
    const [currentIndex, setCurrentIndex]=useState(0)
    const slidesRef=useRef(null)
    const scrollX =useRef(new Animated.Value(0)).current;
    const viewableItemsChanged=useRef(({viewableItems})=>{
        setCurrentIndex(viewableItems[0].index)
    }).current;

    const viewConfig=useRef({viewAreaCoveragePercentThreshold:50}).current;

    return(
        <View style={styles.container}>

            <View style={{flex:3}}>
            <FlatList 
            data={slides}
            renderItem={({ item}) => <OnBoardingItem item={item}/>} 

            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item)=>item.id}
            onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],
                
                {useNativeDriver:false,
                })}

                scrollEventThrottle={32}

                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}

            />
            </View>

            <Paginator data={slides} scrollX={scrollX} style={{

            }}/>
            <NextButton percentage={(currentIndex+1)*(100/slides.length)} style={{
        }}/>

          

        </View>
    )
};

const styles= StyleSheet.create({
    container: {
        flex: 1,
        top:20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});