import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View, Dimensions, Text, ScrollView, Image, FlatList, TouchableOpacity } from "react-native";
import { Input, ButtonGroup, SearchBar } from "react-native-elements";
import { StoreContext } from "../stores/drinkStore";
import test from "../json/test.json"
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['drink.shopName', 'subject'];

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const sweetBtn = ['無糖', '微糖', '半糖', '少糖', '全糖'];
const iceBtn = ['去冰', '微冰', '半冰', '少冰', '全冰'];
const addBtn = ['珍珠', '椰果', '布丁', '仙草'];
const add2Btn = ['粉條', '紅豆', '芋圓', '愛玉'];

const input = React.createRef(null);

var drinklayout;
var shoplayout;
var myScrollView;

const AddScreen = () => {
    const [cupCount, setCupCount] = useState(0);
    const [touch, setTouch] = useState(false);
    const [drinkTouch, setDrinkTouch] = useState(false);
    const [sweetindex, setSweet] = useState(0);
    const [iceindex, setIce] = useState(0);
    const [addindex, setAdd] = useState(0);
    const [add2index, setAdd2] = useState(null);

    const { drinkTempState } = useContext(StoreContext);
    const [drinkTemp, setDrinkTemp] = drinkTempState;
    const [search, setSearch] = useState('');
    const [drinkSearch, setDrinkSearch] = useState('');
    const [shopFilter, setShopFilter] = useState(test);
    const [drinkFilter, setDrinkFilter] = useState(test);
    const [shopData, setShopData] = useState(test.drink);
    const [drinkData, setDrinkData] = useState(
        {
            id: "",
            name: "",
            photo: null,
            money: 0,
            capacity: "",
            calories: ""
        });

    // let filteredShops = test.drink.filter(createFilter(search, KEYS_TO_FILTERS))
    const clickToDrinkScroll = () => {
        // 其中this.layouot.y就是距离现在的高度位置 
        myScrollView.scrollTo({ x: 0, y: drinklayout.y, animated: true });
    };
    const clickToShopScroll = () => {
        // 其中this.layouot.y就是距离现在的高度位置 
        myScrollView.scrollTo({ x: 0, y: shoplayout.y, animated: true });
    };

    const shopName = (touch, store) => {
        // if(store===null)store=test;
        if (touch) {

            return (
                <View>

                    <View style={{ width: screenWidth, height: screenHeight, position: 'absolute', zIndex: 0, backgroundColor: '#8E5A18', opacity: 0.22 }}></View>
                    <View style={{ width: screenWidth, height: screenHeight, position: 'absolute', marginTop: 90, zIndex: 10, backgroundColor: '#FFFFFF', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'row' }}>
                        {store.map((shop) => {
                            return (
                                <View style={{ flex: 1 }} key={shop.id}>
                                    <TouchableOpacity onPress={() => { setSearch(shop.shopName); setShopData(shop); }}>
                                        <View style={{ width: 115, height: 115, borderColor: '#FFB455', borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginLeft: 35, marginTop: 24 }}>
                                            <Image
                                                style={{ width: 113, height: 113, borderRadius: 8 }}
                                                source={{ uri: shop.photo }}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                        )}
                    </View>
                </View>
            )
        }
        else {
            return null
        }
    }

    const drinkName = (touch, drink) => {
        // if(store===null)store=test;
        if (touch) {

            return (
                <View>

                    <View style={{ width: screenWidth, height: screenHeight, position: 'absolute', zIndex: 0, backgroundColor: '#8E5A18', opacity: 0.22 }}></View>
                    <View style={{ width: screenWidth, height: screenHeight, position: 'absolute', marginTop: 90, zIndex: 20, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingTop: 25 }}>
                        <ScrollView>
                            {drink.map((drink) => {
                                return (
                                    <View style={{ flex: 1 }} key={drink.id}>
                                        <TouchableOpacity onPress={() => { setDrinkSearch(drink.name); setDrinkData(drink); console.log(drinkData) }}>
                                            <View style={{ width: screenWidth - 10, height: 44, borderColor: '#FFB455', borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'space-between', marginBottom: 25, flexDirection: 'row' }}>
                                                <Text style={{ marginLeft: 40, fontSize: 16 }}>{drink.name}</Text>
                                                <Text style={{ marginRight: 35, fontWeight: 'bold', color: '#FFB455', fontSize: 16 }}>{"$" + drink.money}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                            )}
                        </ScrollView>
                    </View>
                </View>
            )
        }
        else {
            return null
        }
    }

    const storeShopSearch = () => {
        var searchWord = search;
        let updatedList;
        if (searchWord) {
            searchWord = searchWord.trim().toLowerCase();
            updatedList = test.drink.filter((item) => {
                if (item.shopName.toLowerCase().indexOf(searchWord) !== -1) {
                    return item
                }
            });

        }
        else {
            updatedList = test.drink;
        }
        setShopFilter(updatedList);

        //   let filteredShops
    }

    const storeDrinkSearch = () => {
        var searchWord = drinkSearch;
        let updatedList;
        if (searchWord) {
            searchWord = searchWord.trim().toLowerCase();
            updatedList = shopData.menu.filter((item) => {
                if (item.name.toLowerCase().indexOf(searchWord) !== -1) {
                    return item
                }
            });
        }
        else {
            updatedList = shopData.menu;
        }
        setDrinkFilter(updatedList);
    }

    useEffect(() => {
        storeShopSearch();
        storeDrinkSearch();
    }, [search, drinkSearch]);
    return (
        <View style={{ flex: 1 }} >
            <Image
                style={{ position: 'absolute', height: screenHeight, width: screenWidth, resizeMode: 'stretch' }}
                resizeMode='stretch'
                source={require('../../assets/icon/bg.png')} />
            {shopName(touch, shopFilter)}
            {drinkName(drinkTouch, drinkFilter)}
            {/* {shopName(touch, filteredShops)} */}
            <ScrollView style={{ zIndex: 2 }}
                ref={(view) => { myScrollView = view; }}>

                <View style={{
                    width: 343, height: null, alignSelf: 'center', justifyContent: 'center'
                }}>
                    <View style={{ paddingTop: 24 }}
                        onLayout={event => { shoplayout = event.nativeEvent.layout }}>
                        <Input
                            value={search}
                            leftIcon={() => <Image style={{ width: 24, height: 24, marginLeft: -25 }} source={require('../../assets/icon/icon-room.png')} />}
                            leftIconContainerStyle={{
                                width: 24, height: 24
                            }}
                            placeholder="店家名稱"
                            containerStyle={{
                                height: 54,
                                width: null,
                                backgroundColor: '#FAE7CB',
                                borderColor: "#FFB385",
                                borderRadius: 2,
                                borderWidth: 1
                            }}
                            inputContainerStyle={{
                                height: 54,
                                width: null,
                                borderColor: "transparent",
                                alignSelf: 'center'
                            }}
                            inputStyle={{
                                color: '#515151',
                                fontSize: 16
                            }}
                            placeholderTextColor="#9D9D9D"
                            onChangeText={(store) => {
                                setSearch(store);
                                // setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], store } } });
                            }}
                            ref={input}
                            onTouchStart={() => { setTouch(true); clickToShopScroll(); }}
                            onSubmitEditing={() => { setTouch(false); setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], store: search } } }); }}
                        // value={me.email}
                        // onChangeText={(email) => setMe({ ...me, email })}
                        />
                    </View>
                    <View style={{ paddingTop: 14 }}
                        onLayout={event => { drinklayout = event.nativeEvent.layout }}>
                        <Input
                            value={drinkSearch}
                            leftIcon={() => <Image style={{ width: 24, height: 24, marginLeft: -25 }} source={require('../../assets/icon/icon-create.png')} />}
                            leftIconContainerStyle={{
                                width: 24, height: 24
                            }}
                            placeholder="飲品名稱"
                            containerStyle={{
                                height: 54,
                                width: null,
                                backgroundColor: '#FAE7CB',
                                borderColor: "#FFB385",
                                borderRadius: 2,
                                borderWidth: 1
                            }}
                            inputContainerStyle={{
                                height: 54,
                                width: null,
                                borderColor: "transparent",
                                alignSelf: 'center'
                            }}
                            inputStyle={{
                                color: '#515151',
                                fontSize: 16
                            }}
                            placeholderTextColor="#9D9D9D"
                            onChangeText={(name) => {
                                setDrinkSearch(name);
                                // setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], name } } })
                            }}
                            onTouchStart={() => { setDrinkTouch(true); clickToDrinkScroll(); }}
                            onSubmitEditing={() => { setDrinkTouch(false); setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], name:drinkSearch } } })}}
                        // value={me.email}
                        // onChangeText={(email) => setMe({ ...me, email })}
                        />
                    </View>
                    <View style={{ paddingTop: 14 }}>
                        <View style={{
                            flexDirection: 'row', height: 54,
                            width: 343,
                            alignItems: 'center', backgroundColor: '#FAE7CB',
                            borderColor: "#FFB385",
                            borderRadius: 2,
                            borderWidth: 1,
                        }}>
                            <Input
                                // value={String(drinkData.money)}
                                leftIcon={() => <Image style={{ width: 24, height: 24, marginLeft: -25 }} source={require('../../assets/icon/money.png')} />}
                                leftIconContainerStyle={{
                                    width: 24, height: 24
                                }}
                                placeholder="金額"
                                containerStyle={{
                                    height: 54,
                                    width: 304,
                                }}
                                inputContainerStyle={{
                                    height: 54,
                                    width: null,
                                    borderColor: "transparent",
                                    alignSelf: 'center'
                                }}
                                inputStyle={{
                                    color: '#515151',
                                    fontSize: 16
                                }}
                                placeholderTextColor="#9D9D9D"
                                onChangeText={(money) => {
                                    setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], money:parseInt(money,10) } } })
                                    console.log(parseInt(money,10));
                                }}
                                // onSubmitEditing={() => { setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], money:drinkData.money } } })}}
                            // value={me.email}
                            // onChangeText={(email) => setMe({ ...me, email })}
                            />
                            <Text style={{ fontSize: 14, color: '#FF8155' }}>NT$</Text>
                        </View>
                    </View>
                    <View style={{ paddingTop: 14 }}>
                        <View style={{
                            paddingTop: 8,
                            flexDirection: 'row',
                            backgroundColor: '#FAE7CB',
                            borderColor: "#FFB385",
                            borderRadius: 2,
                            borderWidth: 1,
                            height: 54,
                            width: 343,
                            justifyContent: 'space-between',
                            alignItems: 'center',

                        }}>
                            <View style={{
                                height: 54, width: 204, flexDirection: 'row', alignItems: 'center'
                            }}>
                                <Input
                                    leftIcon={() => <Image style={{ width: 16, height: 18, marginLeft: -25 }} source={require('../../assets/icon/icon-cup.png')} />}
                                    leftIconContainerStyle={{
                                        width: 24, height: 24
                                    }}
                                    placeholder="杯數"
                                    containerStyle={{
                                        height: 54,
                                        width: 118,
                                    }}
                                    inputContainerStyle={{
                                        height: 54,
                                        width: null,
                                        borderColor: "transparent",
                                        alignSelf: 'center',
                                    }}
                                    inputStyle={{
                                        color: '#515151',
                                        fontSize: 16
                                    }}
                                    placeholderTextColor="#9D9D9D"
                                    onChangeText={(cup) => {
                                        setCupCount(parseInt(cup));
                                        setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], cup } } })
                                    }}
                                // value={me.email}
                                // onChangeText={(email=> setMe({ ...me, email })}
                                />
                                <Text style={{ fontSize: 14, color: '#FF8155' }}>cup</Text>
                            </View>
                            <View style={{
                                height: 54,
                                width: 140, flexDirection: 'row', alignItems: 'center'
                            }}>
                                <Input
                                    value={drinkData.capacity}
                                    placeholder="容量"
                                    containerStyle={{
                                        height: 54,
                                        width: 108
                                    }}
                                    inputContainerStyle={{
                                        height: 54,
                                        width: null,
                                        borderColor: "transparent",
                                        marginLeft: 40
                                    }}
                                    inputStyle={{
                                        color: '#515151',
                                        fontSize: 16
                                    }}
                                    placeholderTextColor="#9D9D9D"
                                    onChangeText={(capacity) => setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], capacity } } })}
                                    
                                    onSubmitEditing={() => { setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], capacity:drinkData.capacity } } })}}
                                // value={me.email}
                                // onChangeText={(email) => setMe({ ...me, email })}
                                />
                                <Text style={{ fontSize: 14, color: '#FF8155' }}>ml</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingTop: 14 }}>
                        <View style={{
                            height: 170,
                            width: 343,
                            backgroundColor: '#FAE7CB',
                            borderColor: "#FFB385",
                            borderRadius: 2,
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{ flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 20, height: 19, marginLeft: 11, marginRight: 10 }}
                                    source={require('../../assets/icon/Icon-suger.png')} />
                                <Text style={{ marginBottom: 12, marginTop: 11, color: "#FF8155" }}>甜度</Text>
                            </View>

                            {/* <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="無糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="微糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="半糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="少糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="全糖" /> */}
                            <ButtonGroup
                                buttons={sweetBtn}
                                onPress={(sweetindex, sweet) => {
                                    setSweet(sweetindex);
                                    sweet = sweetBtn[sweetindex];
                                    setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], sweet, sweetindex } } });

                                }}
                                selectedIndex={sweetindex}
                                containerStyle={{
                                    height: 30,
                                    width: 330,
                                    borderWidth: 0,
                                    marginBottom: 5,
                                    backgroundColor: '#FAE7CB',
                                }}
                                buttonStyle={{
                                    height: 30,
                                    width: 64,
                                    backgroundColor: "#FFFFFF",
                                    borderColor: "#FFB385",
                                    borderRadius: 2,
                                    borderWidth: 1,
                                }}
                                selectedButtonStyle={{
                                    backgroundColor: "#FFB385",
                                    borderColor: "#FF612B"
                                }}
                                textStyle={styles.buttonFontStyle}
                                innerBorderStyle={{ width: 0 }}
                            />
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{ marginLeft: 40, marginBottom: 12, marginTop: 11, alignSelf: 'flex-start', color: "#FF8155" }}>冰塊</Text>
                                {/* <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="無糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="微糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="半糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="少糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="全糖" /> */}
                                <ButtonGroup
                                    buttons={iceBtn}
                                    onPress={(iceindex, ice) => { setIce(iceindex); ice = iceBtn[iceindex]; setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], ice } } }); }}
                                    selectedIndex={iceindex}
                                    containerStyle={{
                                        height: 30,
                                        width: 330,
                                        borderWidth: 0,
                                        marginBottom: 5,
                                        backgroundColor: '#FAE7CB',
                                    }}
                                    buttonStyle={{
                                        height: 30,
                                        width: 64,
                                        backgroundColor: "#FFFFFF",
                                        borderColor: "#FFB385",
                                        borderRadius: 2,
                                        borderWidth: 1,
                                    }}
                                    selectedButtonStyle={{
                                        backgroundColor: "#FFB385",
                                        borderColor: "#FF612B"
                                    }}
                                    textStyle={styles.buttonFontStyle}
                                    innerBorderStyle={{ width: 0 }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingTop: 14 }}>
                        <View style={{
                            height: 130,
                            width: 343,
                            backgroundColor: '#FAE7CB',
                            borderColor: "#FFB385",
                            borderRadius: 2,
                            borderWidth: 1,
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>

                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}>
                                <Text style={{ marginLeft: 30, marginBottom: 12, marginTop: 11, alignSelf: 'flex-start', color: "#FF8155" }}>加料</Text>
                                {/* <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="無糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="微糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="半糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="少糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="全糖" /> */}
                                <ButtonGroup
                                    buttons={addBtn}
                                    onPress={(addindex, add) => { setAdd(addindex); add = addBtn[addindex]; }}
                                    selectedIndex={addindex}

                                    containerStyle={{

                                        height: 30,
                                        width: 300,
                                        borderWidth: 0,
                                        marginBottom: 5,
                                        backgroundColor: '#FAE7CB',

                                    }}
                                    buttonStyle={{
                                        height: 30,
                                        width: 64,

                                        backgroundColor: "#FFFFFF",
                                        borderColor: "#FFB385",
                                        borderRadius: 2,
                                        borderWidth: 1
                                    }}
                                    selectedButtonStyle={{
                                        backgroundColor: "#FFB385",
                                        borderColor: "#FF612B"
                                    }}
                                    textStyle={styles.buttonFontStyle}
                                    innerBorderStyle={{ width: 0 }}
                                />
                                <ButtonGroup
                                    buttons={add2Btn}
                                    onPress={(add2index, add2) => { setAdd2(add2index); add2 = add2Btn[add2index]; }}
                                    selectedIndex={add2index}
                                    containerStyle={{
                                        flexDirection: 'row',
                                        height: 30,
                                        width: 300,
                                        borderWidth: 0,
                                        marginBottom: 5,
                                        backgroundColor: '#FAE7CB'
                                    }}
                                    buttonStyle={{
                                        height: 30,
                                        width: 64,

                                        backgroundColor: "#FFFFFF",
                                        borderColor: "#FFB385",
                                        borderRadius: 2,
                                        borderWidth: 1
                                    }}
                                    selectedButtonStyle={{
                                        backgroundColor: "#FFB385",
                                        borderColor: "#FF612B"
                                    }}
                                    textStyle={styles.buttonFontStyle}
                                    innerBorderStyle={{ width: 0 }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingTop: 14 }}>
                        <Input
                            leftIcon={() => <Image style={{ width: 48, height: 48, marginLeft: -25 }} source={require('../../assets/icon/btn-today.png')} />}
                            leftIconContainerStyle={{
                                width: 24, height: 24
                            }}
                            placeholder="日期"
                            containerStyle={{
                                height: 54,
                                width: null,
                                backgroundColor: '#FAE7CB',
                                borderColor: "#FFB385",
                                borderRadius: 2,
                                borderWidth: 1
                            }}
                            inputContainerStyle={{
                                height: 54,
                                width: null,
                                borderColor: "transparent",
                                alignSelf: 'center'
                            }}
                            inputStyle={{
                                color: '#515151',
                                fontSize: 16
                            }}
                            placeholderTextColor="#9D9D9D"
                            onChangeText={(day) => setDrinkTemp({ ...drinkTemp, day })}
                        // value={me.email}
                        // onChangeText={(email) => setMe({ ...me, email })}
                        />
                    </View>
                    <View style={{ paddingTop: 14, paddingBottom: 76 }}>
                        <View style={{
                            width: 343,
                            height: 54,
                            backgroundColor: '#FFFFFF',
                            borderColor: "#FF8155",
                            borderRadius: 2,
                            borderWidth: 1,
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderStyle: 'dashed',
                        }}>
                            <Image
                                style={{ width: 24, height: 24 }}
                                source={require('../../assets/icon/add_photo.png')} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        //flexDirection:'row',
        height: 30,
        width: 64,
        backgroundColor: "#FFFFFF",
        borderColor: "#FFB385",
        borderRadius: 2,
        borderWidth: 0.5,
        //padding:3
    },
    clickButtonStyle: {
        //flexDirection:'row',
        height: 30,
        width: 64,
        backgroundColor: "#FF612B",
        borderColor: "#FFB385",
        borderRadius: 2,
        borderWidth: 0.5,
        //padding:3
    },
    buttonFontStyle: {
        color: '#9D9D9D',
        fontSize: 12
    }
});

export default AddScreen;