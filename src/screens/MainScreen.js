import React, { useContext,  useEffect, useState } from "react";
import { StyleSheet, Dimensions, View, Text, FlatList, TouchableOpacity, Image, ScrollView, ImageBackground, Animated } from "react-native";
import test from "../json/test.json";
import MainList from "../components/MainList";
import TabComponent from "../components/TabComponent";
import { StoreContext } from "../stores/drinkStore";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const MainScreen = ({ navigation }) => {
  const [cup,setCup]=useState(0);
  const { drinkState } = useContext(StoreContext);
  const [drinks, setDrinks] = drinkState;
  const lenth = new Animated.Value(0);

  useEffect(() => {
    Animated.spring(lenth,{
      toValue:223
    }).start();
  },[])
  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <Image
        style={{ position: 'absolute', height: screenHeight, width: screenWidth }}
        source={require('../../assets/icon/background.png')} />
      {/* <Image
        style={{ position: 'absolute', height: 200, width: screenWidth,resizeMode:'stretch' }}
        source={require('../../assets/icon/detail_bg.png')} /> */}
      <View>
        <ImageBackground
          style={styles.DataStyle}
          imageStyle={{
            height: 200, width: screenWidth,
            borderBottomRightRadius: 7,
            borderBottomLeftRadius: 7,
            resizeMode: 'stretch'
          }}
          source={require('../../assets/icon/detail_bg.png')}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: "#F8F8F8", marginBottom: 15 }}>今日攝取</Text>
            <ImageBackground
              style={{ height: 126, width: 140, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}
              source={require('../../assets/icon/cal.png')}>
              <Text style={styles.dataFontStyle}>500</Text>
            </ImageBackground>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: "#F8F8F8", marginBottom: 15 }}>本月杯數</Text>
            <ImageBackground
              style={{ height: 126, width: 140, alignItems: 'center', justifyContent: 'center' }}
              source={require('../../assets/icon/cup.png')}>
              <Text style={styles.dataFontStyle}>20</Text>
            </ImageBackground>
          </View>
        </ImageBackground>
        <View style={styles.calStyle}>
          <View style={{
            width: screenWidth - 16,
            height: 24, marginBottom: 5, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'
          }}>
            <Text style={{ fontSize: 14, color: "#FF612B" }}>本月累積水分</Text>
            <Text style={{ fontSize: 14, color: "#515151" }}>目標 2000 ml</Text>
          </View>
          <View>

            <View style={{ alignItems: 'center', justifyContent: 'space-between', height: 24, width: 343, borderWidth: 1, borderColor: '#FF612B', borderRadius: 11, flexDirection: 'row' }} >
              <Animated.View style={{ alignItems: 'center', justifyContent: 'center', height: 24, width: lenth, borderTopLeftRadius: 11, borderBottomLeftRadius: 11, backgroundColor: '#FF612B' }}>
                <Text style={{ color: '#fff' }}>1250</Text>
              </Animated.View>
              <View style={{ alignItems: 'center', justifyContent: 'center', height: 24, width: 120 }}>
                <Text style={{ color: '#FF612B' }}>750</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ justifyContent: 'center', height: 30, width: 40, marginTop: 20, marginBottom: 10, marginLeft: 50, }}>
        <Text style={{ color: '#F8F8F8', fontWeight: 'bold', fontSize: 20 }}>紀錄</Text>
      </View>
      <FlatList
        data={drinks}
        renderItem={({ item }) =>
          <MainList
            drink={item}
            navigation={navigation}
          />}
        keyExtractor={item => item.day}
      />
      <View  style={{position: 'absolute',bottom: 30,height:54,width:screenWidth,alignItems:'center',justifyContent:'center'}}>
      <TabComponent 
      page={"Main"}
      navigation={navigation}/>
      </View>
      {/* <TouchableOpacity
        onPress={() => { navigation.navigate('Add') }}
        style={styles.TouchStyle}>
        <Image
          style={styles.iconStyle}
          source={require('../../assets/icon/btn-FAB.png')} />
      </TouchableOpacity> */}

    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    //position:"absolute",
    height: 84,
    width: 84,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TouchStyle: {
    position: 'absolute',
    width: 84,
    height: 84,
    alignSelf: 'center',
    justifyContent: 'center',
    //right: 150,
    bottom: 30,
  },
  DataStyle: {
    //width: null,
    width: screenWidth,
    height: 200,
    //backgroundColor: '#FAE7CB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    //borderColor: "#00000029",
    borderBottomRightRadius: 21,
    borderBottomLeftRadius: 21,
    //borderWidth: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowColor: "#000",
    elevation: 3,
    //resizeMode:'stretch'
    // height: 200, width: screenWidth,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    // resizeMode:'stretch'
  },
  calStyle: {
    width: null,
    height: 64,
    marginTop: 16,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  dataFontStyle: {
    fontSize: 40,
    color: "#FF612B",
    marginLeft: -16
  }
});

export default MainScreen;