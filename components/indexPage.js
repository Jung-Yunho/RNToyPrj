import React from 'react'
import Button from './Button'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
export default class IndexPage extends React.Component{
    render()
    {
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.title}>
                    <Text style={styles.text}>원하는 기능을 선택해주세요</Text>
                </View>
                <View style={styles.menu}>
                    <Button iconName="weather-cloudy" onPress={() => alert(`여기까지는 일단 성공 !?`)}/>
                    <Button iconName="timer" onPress={() => alert(`여기까지는 일단 성공 !?`)}/>
                    <Button iconName="note-text" onPress={()=> alert(`여기까지는 일단 성공 !?`)}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#979797",
    },

    title:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text:{
        color: 'white',
        fontSize: 30,
        fontWeight: "400"
    },

    menu: {
        flex:1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',

    },
})