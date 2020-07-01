import React from "react";
import { View, Text, Dimensions, Image, StyleSheet, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const DetailScreen = ({ route }) => {
  const {
    name,
    capacity,
    sweet,
    calories,
    sugar,
    sport,
    photo,
    store,
    cup,
    ice,
    money
  } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ position: 'absolute', height: screenHeight, width: screenWidth }}
        source={require('../../assets/icon/bg-detail-juice.png')} />

      <ScrollView>
        <View style={styles.shopName}>
          <Text style={{ color: '#515151', fontSize: 16, fontWeight: 'bold' }}>{name}</Text>
          <Text style={{ color: '#515151', fontSize: 12, fontWeight: 'bold' }}>{store}</Text>
        </View>
        <View style={{ alignItems: 'center', zIndex: 1 }}>
          {/* <View style={styles.photoStyle}> */}
          <View style={styles.photoBgStyle}>
            <Image
              style={styles.photoStyle}
              source={{ uri: photo }} />
          </View>

          {/* </View> */}
          <View style={styles.detailBgStyle}>
            <View style={{ marginTop: 50 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <View style={{ alignItems: 'flex-start', marginLeft: 40, marginTop: 16 }}>
                  <Text style={styles.detailFontStyle}>{"容量 : " + cup + "cup / " + capacity + "ml"}</Text>
                  <Text style={styles.detailFontStyle}>{"甜度 : " + sweet}</Text>
                  <Text style={styles.detailFontStyle}>{"冰塊 : " + ice}</Text>
                </View>
                <Text style={{ fontSize: 24, marginLeft: 65, color: '#FF612B',fontWeight:'bold' }}>{money + "元"}</Text>
              </View>
              <View style={{ marginLeft: 49, marginTop: 22, flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ alignItems: 'center' }}>
                  <View style={{
                    height: 30,
                    width: 75,
                    borderColor: '#FF612B',
                    borderWidth: 1,
                    backgroundColor: '#FFFFFF',
                    zIndex: 10,
                    borderRadius: 26,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 24
                  }}>
                    <Text style={{ color: '#6A6A6A', fontSize: 14 }}>熱量</Text>
                  </View>
                  <ImageBackground
                    style={styles.detailImg}
                    source={require('../../assets/icon/bg-circle.png')}>
                    <Text style={styles.mainDetailStyle}>{calories + "cal"}</Text>
                  </ImageBackground>

                </View>
                <View style={{ alignItems: 'center', marginLeft: 49 }}>
                  <View style={{
                    height: 30,
                    width: 75,
                    borderColor: '#FF612B',
                    borderWidth: 1,
                    backgroundColor: '#FFFFFF',
                    zIndex: 10,
                    borderRadius: 26,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 15
                  }}>
                    <Text style={{ color: '#6A6A6A', fontSize: 14 }}>運動</Text>
                  </View>
                  <ImageBackground
                    style={{
                      height: 120,
                      width: 76,
                      opacity: 1,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    source={require('../../assets/icon/sport.png')}>
                    <Text style={styles.mainDetailStyle}>{sport + "hr"}</Text>
                  </ImageBackground>

                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  shopName: {
    position: 'absolute',
    top: 295,
    alignSelf: 'center',
    height: 50,
    width: 142,
    borderColor: '#FF612B',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    zIndex: 10,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center'
  },
  photoStyle: {
    height: 298,
    width: 300,
    //backgroundColor: '#F5F5F5',
    // borderWidth:1,
    // borderColor:'#000',
    // borderRadius: 12,
    // marginTop: 28,
    // marginBottom: -20,
    zIndex: 1,
  },
  photoBgStyle: {
    height: 298,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    // borderWidth:1,
    // borderColor:'#000',
    borderRadius: 12,
    marginTop: 28,
    marginBottom: -20,
    shadowColor: '#00000029',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    zIndex: 1,
  },
  detailBgStyle: {
    height: 386,
    width: 336,
    borderColor: '#D5A5FF',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    //blurRadius:5
  },
  detailFontStyle: {
    color: '#515151',
    fontSize: 14,
    fontWeight: 'bold'
  },
  detailImg: {
    height: 100,
    width: 100,
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainDetailStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF612B'
  }
})

export default DetailScreen;
