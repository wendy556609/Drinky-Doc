import React, { useContext, useState, useEffect, useRef } from "react";
import { StyleSheet, Dimensions, View, Text, FlatList, TouchableOpacity, Image, ScrollView, ImageBackground, SectionList, SafeAreaView } from "react-native";
import { Input } from "react-native-elements";
import { StoreContext } from "../stores/drinkStore";
import LottieView from "lottie-react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const LoadingScreen = ({ navigation }) => {
    const animation = useRef(null);
    const onPress = () => {
        animation.current.play();
    };
    useEffect(() => {

    });
    return (
        <View>
            <TouchableOpacity
            onPress={()=>{onPress();}}>
            <View style={{width:24,height:24,backgroundColor:"#000"}}>

            </View>
            </TouchableOpacity>
            <LottieView
                ref={animation}
                style={styles.bellanimate}
                source={require("../json/load.json")}
                loop={false} />
        </View>
    );
};

const styles = StyleSheet.create({
    bellanimate: {
        width: 140,
        height:140

    },
});

export default LoadingScreen;