import { StyleSheet } from "react-native";
import { themes } from "../../../global/themes";

export const styles = StyleSheet.create({
    
    button:{
        width:'auto',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: themes.colors.boxFill,
        borderRadius: 40
    },
    buttonText:{
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        padding: 10
    }
})