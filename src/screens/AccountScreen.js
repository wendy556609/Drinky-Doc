import React, { useContext } from "react";
import { StyleSheet, Dimensions, View, Button, Text, FlatList, TouchableOpacity, Image, ScrollView, ImageBackground, SectionList, SafeAreaView } from "react-native";

import TabComponent from "../components/TabComponent";

import { StoreContext } from "../stores/drinkStore";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const AccountScreen = ({ navigation }) => {
    const { accountState } = useContext(StoreContext);
    const [account, setAccount]  = accountState;
    return (
        <View style={{ flex: 1, backgroundColor: "#FAE7CB" }}>
            <Image
                style={{ position: 'absolute', height: screenHeight, width: screenWidth }}
                source={require('../../assets/icon/bg-account.png')} />
            <View>
                <View style={{ marginTop: 30, alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: '#FF8155' }}>{account}</Text>
                    <View style={{ height: 126, width: 126, borderRadius: 65, borderWidth: 6, borderColor: '#FF612B', alignItems: 'center', justifyContent: 'center', marginTop: 12 }}>
                        <Image
                            style={{ height: 120, width: 120 }}
                            source={require('../../assets/icon/photo.png')} />
                    </View>
                </View>
                <View style={{ marginTop: 30, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: 250, marginLeft: 55 }}>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity>
                            <View style={{ width: 102, height: 75, borderRadius: 8 }}>
                                <ImageBackground style={{ width: 102, height: 75, alignItems: 'center' }}
                                    source={require('../../assets/icon/set.png')}>
                                    <Text style={{ fontSize: 16, marginTop: 8, color: '#515151' }}>設定</Text>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ width: 102, height: 75, borderRadius: 8, marginTop: 20 }}>
                                <ImageBackground style={{ width: 102, height: 75, alignItems: 'center' }}
                                    source={require('../../assets/icon/save.png')}>
                                    <Text style={{ fontSize: 16, marginTop: 8, color: '#515151' }}>收藏</Text>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ width: 102, height: 75, borderRadius: 8, marginTop: 20 }}>
                                <ImageBackground style={{ width: 102, height: 75, alignItems: 'center' }}
                                    source={require('../../assets/icon/phone.png')}>
                                    <Text style={{ fontSize: 16, marginTop: 8, color: '#515151' }}>聯絡我們</Text>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity>
                            <View style={{ width: 102, height: 75, borderRadius: 8 }}>
                                <ImageBackground style={{ width: 102, height: 75, alignItems: 'center' }}
                                    source={require('../../assets/icon/account.png')}>
                                    <Text style={{ fontSize: 16, marginTop: 8, color: '#515151' }}>帳戶</Text>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ width: 102, height: 75, borderRadius: 8, marginTop: 20 }}>
                                <ImageBackground style={{ width: 102, height: 75, alignItems: 'center' }}
                                    source={require('../../assets/icon/achieve.png')}>
                                    <Text style={{ fontSize: 16, marginTop: 8, color: '#515151' }}>成就</Text>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ width: 102, height: 75, borderRadius: 8, marginTop: 20 }}>
                                <ImageBackground style={{ width: 102, height: 75, alignItems: 'center' }}
                                    source={require('../../assets/icon/about.png')}>
                                    <Text style={{ fontSize: 16, marginTop: 8, color: '#515151' }}>關於我們</Text>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ position: 'absolute', bottom: 30, height: 54, width: screenWidth, alignItems: 'center', justifyContent: 'center' }}>
                <TabComponent
                    page={"Account"}
                    navigation={navigation} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default AccountScreen;