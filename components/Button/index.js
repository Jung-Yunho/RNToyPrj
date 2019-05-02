import React from 'react'
import {TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import PropTypes from 'prop-types'

export default function Button({iconName, onPress}) {
    return (
        <TouchableOpacity onPressOut={onPress}>
            <MaterialCommunityIcons name={iconName}size={80}/>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}