import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Dimensions, View, Text, FlatList, TouchableOpacity, Image, ScrollView, ImageBackground, SectionList, SafeAreaView } from "react-native";
import { Input } from "react-native-elements";
import { StoreContext } from "../stores/drinkStore";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function LoginWarn(isLogin) {
    if (isLogin) {
        return (
            <Text style={{ color: '#E60000' }}>please input your account or password!</Text>
        )
    }
    else {
        return null
    }
}

const Login = ({ navigation }) => {
    const { accountState } = useContext(StoreContext);
    const [account, setAccount]  = accountState;
    const [password, setPassword] = useState("");
    const [isLogin, setLogin] = useState(false);
    const [loginFail, setLoginFail] = useState(false);

    useEffect(() => {
        if (account !== "" && password !== "") {
            setLogin(true);
        }
    }, [account, password]);
    return (
        <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View>
                    <Image
                        style={{ width: 82, height: 86, marginTop: 80 }}
                        source={require('../../assets/icon/logo.png')} />
                    <Text style={{ color: '#FF612B', fontSize: 20, fontWeight: 'bold', marginTop: 12 }}>Drinky Doc</Text>
                </View>
                <View style={{ marginTop: 45, alignItems: 'center' }}>
                    <View style={{ width: 270, alignItems: 'flex-end' }}>
                        <Input
                            leftIcon={() => <Image style={{ width: 48, height: 48, marginLeft: -25 }} source={require('../../assets/icon/touch/btn-account.png')} />}
                            leftIconContainerStyle={{
                                width: 24, height: 24
                            }}
                            placeholder="Account"
                            containerStyle={{
                                height: 54,
                                width: null,
                                backgroundColor: '#FFFFFF',
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
                            onChangeText={(account) => { setAccount(account) }}
                        // value={me.email}
                        // onChangeText={(email) => setMe({ ...me, email })}
                        />
                        {/* <View style={{marginTop:10}}> */}
                        <Input
                            leftIcon={() => <Image style={{ width: 30, height: 30, marginLeft: -25 }} source={require('../../assets/icon/password.png')} />}
                            leftIconContainerStyle={{
                                width: 24, height: 24
                            }}
                            secureTextEntry={true}
                            placeholder="Password"
                            containerStyle={{
                                marginTop: 10,
                                height: 54,
                                width: null,
                                backgroundColor: '#FFFFFF',
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
                            onChangeText={(password) => { setPassword(password) }}
                        // value={me.email}
                        // onChangeText={(email) => setMe({ ...me, email })}
                        />
                        {/* </View> */}
                        <Text style={{ fontSize: 14, color: '#939393', textDecorationLine: 'underline', marginTop: 8 }}>forgot password</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => { if (isLogin) { navigation.navigate('Main'); setLoginFail(false) }else{setLoginFail(true)} }}>
                        <View style={{ backgroundColor: '#FF8155', width: 102, height: 34, borderRadius: 22, alignItems: 'center', marginTop: 33 }}>
                            <Text style={{ fontSize: 20, color: '#F8F8F8' }}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    {LoginWarn(loginFail)}
                    <View style={{ alignItems: 'center', marginTop: 40 }}>
                        <Text style={{ fontSize: 16, color: '#515151', textDecorationLine: 'underline' }}>Sign Up</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default Login;