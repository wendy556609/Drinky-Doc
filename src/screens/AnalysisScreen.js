import React, { useContext, useEffect,useState } from "react";
import { StyleSheet, Dimensions, View, FlatList, Text, Image, ImageBackground } from "react-native";
import { StoreContext } from "../stores/drinkStore";
import AnalysisList from "../components/AnalysisList";
import TabComponent from "../components/TabComponent";
import { VictoryPie } from "victory-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const wantedGraphicData = [{ y: 60 }, { y: 30 }, { y: 10 }]; // Data that we want to display
const defaultGraphicData = [{ y:0 }, { y: 0 }, { y:  100 }];

const AnalysisScreen = ({ navigation }) => {
  const { drinkState } = useContext(StoreContext);
  const [drinks, setDrinks] = drinkState;
  const [graphicData, setGraphicData] = useState(defaultGraphicData);
  

  useEffect(() => {
    setGraphicData(wantedGraphicData);
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: '#FAE7CB' }}>
      <Image
        style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: 1 }}
        source={require('../../assets/icon/bg-Analysis.png')} />
      <View style={{ zIndex: 2 }}>
        <View style={styles.analysisStyle} />
      </View>
      <View style={{ zIndex: 5 }}>
        <View style={{
          height: 340,
          width: null,
          alignItems: 'center',
        }}>
          <View style={{ flexDirection: 'row', width: 343, height: 36, borderColor: '#FF612B', borderWidth: 1, borderRadius: 8, marginTop: 34, alignSelf: 'center', alignItems: 'center' }}>
            <View style={{ width: 114, height: 36, backgroundColor: '#FF8155', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>總熱量</Text>
            </View>
            <View style={{ width: 114, height: 36, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#515151', fontWeight: 'bold' }}>總杯數</Text>
            </View>
            <View style={{ width: 114, height: 36, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#515151', fontWeight: 'bold' }}>總金額</Text>
            </View>
          </View>
          <View style={{ width: screenWidth, flexDirection: 'row' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              {/* <VictoryPie
                data={[
                  { x: 1, y: 0.6 },
                  { x: 2, y: 0.3 },
                  { x: 3, y: 0.1 }
                ]}
                style={{
                  labels: {
                    fontSize: 1
                  }
                }}
                colorScale={["#FF612B", "#FFB455", "#43B5FF"]}
                width={250}
                height={250}
                innerRadius={60} /> */}
                <VictoryPie
                animate={{ easing: 'exp' }}
                // delay ={1000}
                duration={60000}
                data={graphicData}
                style={{
                  labels: {
                    fontSize: 1
                  }
                }}
                colorScale={["#FF612B", "#FFB455", "#43B5FF"]}
                width={250}
                height={250}
                innerRadius={60} />
              <View style={{ position: 'absolute', alignItems: 'center' }}>
                <Text style={{ color: '#FF612B', fontSize: 30 }}>2580</Text>
                <Text style={{ color: '#FF8155', fontSize: 20 }}>cal</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: 12, height: 12, backgroundColor: '#FF612B', borderRadius: 6 }} />
                <Text style={{ marginLeft: 14, color: '#515151' }}>拿鐵</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <View style={{ width: 12, height: 12, backgroundColor: '#FFB455', borderRadius: 6 }} />
                <Text style={{ marginLeft: 14, color: '#515151' }}>奶茶</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <View style={{ width: 12, height: 12, backgroundColor: '#43B5FF', borderRadius: 6 }} />
                <Text style={{ marginLeft: 14, color: '#515151' }}>梅子綠茶</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <FlatList
        style={{ zIndex: 4 }}
        data={drinks}
        renderItem={({ item }) =>
          <AnalysisList
            drink={item}
            navigation={navigation}
          />}
        keyExtractor={item => item.day}
      />
      <View style={{ position: 'absolute', bottom: 30, height: 54, width: screenWidth, alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
        <TabComponent
          page={"Analysis"}
          navigation={navigation} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  analysisStyle: {
    position: 'absolute',
    height: 340,
    width: screenWidth,
    backgroundColor: '#FFFFFF',
    opacity: 0.6,
    borderBottomRightRadius: 21,
    borderBottomLeftRadius: 21,
    alignItems: 'center',
    shadowColor: '#00000029',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3

  },
});

export default AnalysisScreen;