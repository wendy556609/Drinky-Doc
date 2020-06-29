import React, { useContext } from "react";
import { StyleSheet, Dimensions, View, Button, Text, FlatList, TouchableOpacity, Image, ScrollView, ImageBackground, SectionList, SafeAreaView } from "react-native";

import TabComponent from "../components/TabComponent";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ForumScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', width: 343, height: 36, borderColor: '#FF612B', borderWidth: 1, borderRadius: 8, marginTop: 34, alignSelf: 'center', alignItems: 'center' }}>
          <View style={{ width: 172, height: 36, backgroundColor: '#FF8155', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>討論區</Text>
          </View>
          <View style={{ width: 172, height: 36, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#515151', fontWeight: 'bold' }}>已收藏</Text>
          </View>
        </View>
        <View style={{ marginTop: 26 }}>
          <Text style={{ marginLeft: 40, fontSize: 16, fontWeight: 'bold' }}>熱門文章</Text>
          <View style={{ width: screenWidth, marginTop: 8, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 343, height: 66, borderColor: '#FF612B', borderWidth: 1, borderRadius: 8, alignItems: 'center', flexDirection: 'row' }}>
              <View style={{ width: 36, height: 36, borderColor: '#FF612B', borderWidth: 1, marginLeft: 18 }}></View>
              <View style={{ marginLeft: 18 }}>
                <Text style={{ fontSize: 16 }}>健康飲品推薦 #Top10</Text>
                <Text style={{ fontSize: 12 }}>#1多喝水</Text>
              </View>
            </View>
          </View>
          <View style={{ width: screenWidth, marginTop: 8, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 343, height: 66, borderColor: '#FF612B', borderWidth: 1, borderRadius: 8, alignItems: 'center', flexDirection: 'row' }}>
              <View style={{ width: 36, height: 36, borderColor: '#FF612B', borderWidth: 1, marginLeft: 18 }}></View>
              <View style={{ marginLeft: 18 }}>
                <Text style={{ fontSize: 16 }}>健康飲品推薦 #Top10</Text>
                <Text style={{ fontSize: 12 }}>#1多喝水</Text>
              </View>
            </View>
          </View>
          <View style={{ width: screenWidth, marginTop: 8, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 343, height: 66, borderColor: '#FF612B', borderWidth: 1, borderRadius: 8, alignItems: 'center', flexDirection: 'row' }}>
              <View style={{ width: 36, height: 36, borderColor: '#FF612B', borderWidth: 1, marginLeft: 18 }}></View>
              <View style={{ marginLeft: 18 }}>
                <Text style={{ fontSize: 16 }}>健康飲品推薦 #Top10</Text>
                <Text style={{ fontSize: 12 }}>#1多喝水</Text>
              </View>
            </View>
          </View>

          <View style={{ width: screenWidth, marginTop: 40, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 343, height: 480, borderColor: '#FF612B', borderWidth: 1, borderRadius: 8 }}>
              <View style={{ width: 343, height: 55, flexDirection: 'row', borderColor: '#FF612B', alignItems: 'center', marginTop: 5, borderBottomWidth: 1 }}>
                <View style={{ width: 36, height: 36, borderColor: '#FF612B', borderWidth: 1, marginLeft: 18 }}></View>
                <View style={{ marginLeft: 18 }}>
                  <Text style={{ fontSize: 16 }}>健康女神</Text>
                </View>
              </View>
              <View style={{ width: 343, height: 55, flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                <View style={{ width: 90, height: 30, borderColor: '#FFB455', backgroundColor: '#FAE7CB', borderWidth: 1, marginLeft: 18, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: '#FF612B' }}>酪梨牛奶</Text>
                </View>
              </View>
              <View style={{ width: 343, height: 300, alignItems: 'center' }}>
                <Image
                  style={{ width: 190, height: 290 }}
                  source={require('../../assets/icon/drink-photo.png')} />
              </View>
              <View style={{ width: 343, height: 48, flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{ width: 24, height: 24, marginLeft: 25 }}
                  source={require('../../assets/icon/touch/btn-save.png')} />
                <Text style={{ marginLeft: 8 }}>20w</Text>
              </View>
            </View>
          </View>
          <View style={{ width: screenWidth, marginTop: 40, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 343, height: 480, borderColor: '#FF612B', borderWidth: 1, borderRadius: 8 }}>
              <View style={{ width: 343, height: 55, flexDirection: 'row', borderColor: '#FF612B', alignItems: 'center', marginTop: 5, borderBottomWidth: 1 }}>
                <View style={{ width: 36, height: 36, borderColor: '#FF612B', borderWidth: 1, marginLeft: 18 }}></View>
                <View style={{ marginLeft: 18 }}>
                  <Text style={{ fontSize: 16 }}>健康女神</Text>
                </View>
              </View>
              <View style={{ width: 343, height: 55, flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                <View style={{ width: 90, height: 30, borderColor: '#FFB455', backgroundColor: '#FAE7CB', borderWidth: 1, marginLeft: 18, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: '#FF612B' }}>酪梨牛奶</Text>
                </View>
              </View>
              <View style={{ width: 343, height: 300, alignItems: 'center' }}>
                <Image
                  style={{ width: 190, height: 290 }}
                  source={require('../../assets/icon/drink-photo.png')} />
              </View>
              <View style={{ width: 343, height: 48, flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{ width: 24, height: 24, marginLeft: 25 }}
                  source={require('../../assets/icon/touch/btn-save.png')} />
                <Text style={{ marginLeft: 8 }}>20w</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ position: 'absolute', bottom: 30, height: 54, width: screenWidth, alignItems: 'center', justifyContent: 'center' }}>
        <TabComponent
          page={"Forum"}
          navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ForumScreen;