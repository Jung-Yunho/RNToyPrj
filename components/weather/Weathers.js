import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native'
import {LinearGradient} from 'expo'
import {Ionicons} from '@expo/vector-icons'
import PropTypes from 'prop-types'

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: 'Raining',
        subtitle: '비가 내리고 있어요',
        icon: 'ios-rainy'
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: 'Sunny',
        subtitle: '날씨가 맑으니 산책이라도 다녀오세요',
        icon: 'ios-sunny'
    },
    ThunderStorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: 'ThunderStorm',
        subtitle: '천둥 번개가 치고 있어요',
        icon: 'ios-thunderstorm'
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: 'Clouds',
        subtitle: '구름 낀 날씨에요',
        icon: 'ios-cloudy'
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: 'Snow',
        subtitle: '눈이 오고 있어요',
        icon: 'ios-snow'
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: 'Drizzle',
        subtitle: '비가 보슬보슬 내리고 있어요',
        icon: 'ios-rainy'
    },
    Haze: {
        colors: ["#D7D2CC", "#304352"],
        title: 'Haze',
        subtitle: '안개가 끼었네요',
        icon: 'ios-cloudy'
    },
}

function Weathers({weatherName, temp, city})
{
    console.log(weatherName)
    return (
        <LinearGradient style={styles.container} colors={weatherCases[weatherName].colors}>
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}>{temp}˚</Text>
                <Text style={styles.temp}>{city}</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weathers.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
}

export default Weathers

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    temp: {
        fontSize: 48,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 24,
        fontWeight: "500"

    },
    subtitle: {
        fontSize: 24,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 24
    },
})