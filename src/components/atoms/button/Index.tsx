import React from "react"
import {TouchableHighlightProps, TouchableOpacity, View, Text } from 'react-native'
import { styles } from "./styles"
import { ActivityIndicator } from "react-native"

type Props = TouchableHighlightProps &{
    text: string,
    loading?: boolean
}

export function Button ({...rest}: Props){
    return (
            <TouchableOpacity 
                style={styles.button}
                {...rest}
                activeOpacity={0.5}
            >
                {rest.loading ? <ActivityIndicator/> : <Text style={styles.buttonText}>{rest.text}</Text>}
            </TouchableOpacity>
    )
}