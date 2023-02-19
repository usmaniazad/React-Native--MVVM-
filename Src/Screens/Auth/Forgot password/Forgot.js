import { Dimensions, StyleSheet,TouchableOpacity,Image,TextInput, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../../Components/CustomButton';
const {height,width} = Dimensions.get('window');

const Forgot = (props) => {
  return (
    <View style={styles.container}>
    <View style={styles.subcontainer}>
    <View style={styles.header}>
    <TouchableOpacity onPress={()=>props.navigation.navigate('Signup')}>
        <Image
        style={styles.tinyLogo}
        source={require('../../../assets/images/arrow.png')}
      />
        </TouchableOpacity>
    </View>
    <View style={styles.img}>
    <Image
        style={styles.passimg}
        source={require('../../../assets/images/forgotpassword.png')}
      />
    </View>
    <View style={styles.text}>
        <Text style={{fontSize:35,fontWeight:'700',color:'#a9a9a9'}}>Forgot Password</Text>
    </View>
    <View style={styles.text1}>
        <Text style={{fontSize:16,fontWeight:'700',color:'#a9a9a9'}}>Please enter your emailassoiated with  your acount. We will send you a verification code to your email.</Text>
    </View>

    <View style={styles.phone_txtvw1}>
              <TextInput
                style={styles.input}
                placeholder="Please enter email address"
                placeholderTextColor={'#a9a9a9'}
                autoComplete="off"
                maxLength={10}
                keyboardType="default"
                // onChangeText={text => {
                //     console.log("input")
                // }}
              />
          </View>
          <View style={styles.bottom}>
          <CustomButton
                            title="SEND"
                            // ButtonPress={() => props.navigation.navigate("Login")}
                        />
          </View>
    </View>
    </View>
  )
}

export default Forgot

const styles = StyleSheet.create({
    container:{
        height:height*1,
        width:width*1,
        alignItems:'center',
        // backgroundColor:'cyan'
    },
    subcontainer:{
        height:height*1,
        width:width*0.9,
        // justifyContent:'center',
        // alignItems:'center',
        // backgroundColor:'green'
    },
    header:{
        height:height*0.2,
        width:width*0.9,
        justifyContent:'center',
        // backgroundColor:'cyan'
    },
    tinyLogo: {
        width: 25,
        height: 25,
      },
      passimg:{
        width:100,
        height:100,
        resizeMode:'contain'
      },
      img:{
        height:height*0.2,
        width:width*0.9,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'cyan'
        
      },
      text:{
        height:height*0.07,
        width:width*0.9,
        justifyContent:'center',
        alignItems:'center'
      },
      text1:{
        height:height*0.1,
        width:width*0.9,
        justifyContent:'center',
        alignItems:'center'
      },
      phone_txtvw1: {
        width: width * 0.9,
        height: height * 0.06,
        justifyContent: 'center',
        borderWidth: 1,
        marginTop:22,
        borderColor: 'gray',
        // backgroundColor:'green',
      },
      
      input: {
        height: height * 0.06,
        width: width * 0.56,
        marginLeft:12
        // backgroundColor:'cyan'
      },
      bottom:{
        height:height*0.2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
        // backgroundColor:'cyan'
      }
})