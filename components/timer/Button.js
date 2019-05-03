import React from 'react'
import {TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import { FontAwesome } from "@expo/vector-icons"

export default function Button({iconName, onPress}) {
    return (
        <TouchableOpacity onPressOut={onPress}>
            <FontAwesome name={iconName} size={70} color="white"/>
        </TouchableOpacity>
    )
}


Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}