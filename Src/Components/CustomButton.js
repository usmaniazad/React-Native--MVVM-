import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
// import { ImagePath } from '../../utils/ImagePath'
// import { FONTS } from '../../utils/FontFamily';
const { height, width } = Dimensions.get("window");

const CustomButton = (props) => {
    const { title, btnMainView, ButtonPress, disabled } = props;
    return (
        <TouchableOpacity
        style={styles.button}
            onPress={ButtonPress}
            disabled={disabled}
        >
                <Text style={{fontSize: height / 55, color: "#FFFFFF" }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        height:height*0.06,
        width:width*0.9,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'red'
    }
})