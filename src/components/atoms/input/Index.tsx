import React from "react"
import {TextInput, TextInputProps} from 'react-native'
import { styles } from "./styles"
import { ActivityIndicator } from "react-native"

type Props = TextInputProps

export function Input ({style, ...rest}: Props){


    return (
            <TextInput
                 style = {style ? style : styles.default}
                 {...rest}
            >
            </TextInput>
    )
}