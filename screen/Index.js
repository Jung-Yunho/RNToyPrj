import React, {Component} from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default class Index extends Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <View style={styles.upper}>
                    <Text style={styles.upperText}>What do you want ?</Text>
                </View>

                <View style={styles.lower}>
                    <View>
                        <TouchableOpacity onPress={() => this.goWeather()}>
                            <MaterialCommunityIcons name="weather-cloudy" size={120}/>
                            <Text style={[styles.lowerText, styles.weatherText]}>Weather</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => this.goTimer()}>
                            <MaterialCommunityIcons name="timer" size={120}/>
                            <Text style={[styles.lowerText, styles.timerText]}>Timer</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => this.goToDoList()}>
                            <MaterialCommunityIcons name="note-text" size={120}/>
                            <Text style={styles.lowerText}>To Do List</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    goWeather()
    {
        this.props.navigation.navigate('Weather')
    }

    goTimer()
    {
        this.props.navigation.navigate('Timer')
    }

    goToDoList()
    {
        this.props.navigation.navigate('ToDoList')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    upper: {
        flex: 1,
        marginTop: 50,
    },
    upperText: {
        fontSize: 40,
        fontWeight: "400",
    },

    lower: {
        flex: 5,
        justifyContent: 'space-between',
        marginBottom: 70,
    },
    lowerText: {
        fontSize: 30
    },

    weatherText: {
        paddingLeft: 10
    },

    timerText: {
        paddingLeft: 25
    },
})