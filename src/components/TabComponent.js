import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';

function MainTouch(page) {
    if (page == "Main") {
        return (
            <Image
                style={{ width: 44, height: 44 }}
                source={require('../../assets/icon/touch/btn-home.png')} />
        )
    }
    else {
        return (
            <Image
                style={{ width: 44, height: 44 }}
                source={require('../../assets/icon/untouch/btn-home-untouch.png')} />
        )
    }
}
function AnalysisTouch(page) {
    if (page == "Analysis") {
        return (
            <Image
                style={{ width: 44, height: 44 }}
                source={require('../../assets/icon/touch/btn-analysis.png')} />
        )
    }
    else {
        return (
            <Image
                style={{ width: 44, height: 44 }}
                source={require('../../assets/icon/untouch/btn-analysis-untouch.png')} />
        )
    }
}
function ForumTouch(page) {
    if (page == "Forum") {
        return (
            <Image
                style={{ width: 44, height: 44 }}
                source={require('../../assets/icon/touch/btn-forum.png')} />
        )
    }
    else {
        return (
            <Image
                style={{ width: 44, height: 44 }}
                source={require('../../assets/icon/untouch/btn-forum-untouch.png')} />
        )
    }
}
function AccountTouch(page) {
    if (page == "Account") {
        return (
            <Image
                style={{ width: 44, height: 44 }}
                source={require('../../assets/icon/touch/btn-account.png')} />
        )
    }
    else {
        return (
            <Image
                style={{ width: 44, height: 44 }}
                source={require('../../assets/icon/untouch/btn-account-untouch.png')} />
        )
    }
}
export default function TabComponent({ page, navigation }) {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                height: 53,
                width: 253,
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Main')}>
                    {MainTouch(page)}
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('Analysis')}>
                    {AnalysisTouch(page)}
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('Add')}>
                    <Image
                        style={{ width: 32, height: 32 }}
                        source={require('../../assets/icon/Plus.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('Forum')}>
                    {ForumTouch(page)}
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('Account')}>
                    {AccountTouch(page)}
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        height: 53,
        width: 293,
        borderColor: '#FF612B',
        borderWidth: 1,
        borderRadius: 27,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
