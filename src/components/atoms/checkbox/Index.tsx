import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, ActivityIndicator, ViewStyle } from 'react-native';
import { styles } from './styles';


//TODO - IMPLEMENT SWITCHING STATES AND INITIAL STATE
type Props = {
  value: boolean; 
  OnPress?: () => void; 
  loading?: boolean; 
  checkboxStyle?: ViewStyle; 
  containerStyle?: ViewStyle;
};



export function Checkbox({ value, OnPress, loading, checkboxStyle, containerStyle }: Props) {


 
    async function handlePress() {
        value = !value;
    }


    return (
        
        <TouchableOpacity 
        style={containerStyle? containerStyle : styles.container} 
        onPress={handlePress}
        activeOpacity={0.7}
        >
        <View style={checkboxStyle? checkboxStyle : styles.container}>
            {loading ? (
            <ActivityIndicator size="small" color="#007BFF" />
            ) : (
            value && <View style={styles.checkmark} />
            )}
        </View>
        </TouchableOpacity>
    );
    }