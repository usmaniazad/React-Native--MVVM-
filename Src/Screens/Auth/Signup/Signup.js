import React,{useState} from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CustomButton from '../../../Components/CustomButton';
const { height, width } = Dimensions.get('window');

const Signup = (props) => {
    const [isSecureEntry, setIsSecureEntry] = useState(true)
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <View style={styles.heading}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../../../assets/images/arrow.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#a9a9a9' }}>Sign Up</Text>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#a9a9a9' }}>Please create a new acount</Text>
                    <View style={styles.phone_txtvw1}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email Address"
                            placeholderTextColor={'#a9a9a9'}
                            autoComplete="off"
                            maxLength={10}
                            keyboardType="default"
                        // onChangeText={text => {
                        //   setPhone(text), phoneValidate(text);
                        // }}
                        />
                    </View>
                    <View style={styles.phone_txtvw1}>
                        <TextInput
                            style={styles.input}
                            placeholder="Phone Number"
                            placeholderTextColor={'#a9a9a9'}
                            autoComplete="off"
                            maxLength={10}
                            keyboardType="default"
                        // onChangeText={text => {
                        //   setPhone(text), phoneValidate(text);
                        // }}
                        />
                    </View>
                    <View style={styles.phone_txtvw2}>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor={'#a9a9a9'}
                            autoComplete="off"
                            maxLength={10}
                            secureTextEntry={isSecureEntry}
                            keyboardType="default"
                        // onChangeText={text => {
                        //   setPhone(text), phoneValidate(text);
                        // }}
                        />
                        <View style={styles.eye}>
                            <TouchableOpacity onPress={() => {
                                setIsSecureEntry((prev) => !prev)
                            }}>
                                <Image
                                    style={{ height: 25, width: 25, resizeMode: 'contain' }}
                                    source={require('../../../assets/images/icon-visibility.png')}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.phone_txtvw2}>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor={'#a9a9a9'}
                            autoComplete="off"
                            secureTextEntry={isSecureEntry}
                            maxLength={10}
                            keyboardType="default"
                        // onChangeText={text => {
                        //   setPhone(text), phoneValidate(text);
                        // }}
                        />
                        <View style={styles.eye}>
                            <TouchableOpacity onPress={() => {
                                setIsSecureEntry((prev) => !prev)
                            }}>
                                <Image
                                    style={{ height: 25, width: 25, resizeMode: 'contain' }}
                                    source={require('../../../assets/images/icon-visibility.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <CustomButton
                        title="SIGN UP"
                        ButtonPress={() => props.navigation.navigate("Login")}
                    />
                    <View style={styles.bottom}>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: '#a9a9a9' }}>Already have an acount?</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'red' }}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        height: height * 1,
        width: width * 1,
        alignItems: 'center',
        // backgroundColor:'cyan'
    },
    subcontainer: {
        height: height * 1,
        width: width * 0.9,
        // justifyContent:'center',
        // alignItems:'center',
        // backgroundColor:'green'
    },
    heading: {
        height: height * 0.2,
        width: width * 0.9,
        justifyContent: 'center',
        // backgroundColor:'cyan'
    },
    phone_txtvw1: {
        width: width * 0.9,
        height: height * 0.06,
        justifyContent: 'center',
        borderWidth: 1,
        marginTop: 22,
        borderColor: 'gray',
        // backgroundColor:'green',
    },

    input: {
        height: height * 0.06,
        width: width * 0.56,
        marginLeft: 12
        // backgroundColor:'cyan'
    },
    text: {
        height: height * 0.1,
        width: width * 0.9,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'cyan'
    },
    tinyLogo: {
        width: 25,
        height: 25,
    },
    bottom: {
        height: height * 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor:'cyan'
    },
    eye:{
        height:height*0.06,
        width:width*0.18,
        alignItems:"center",
        justifyContent:'center',
        alignSelf:'flex-end',
        // backgroundColor:'cyan'
      },
      phone_txtvw2: {
        width: width * 0.9,
        height: height * 0.06,
        flexDirection:'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        marginTop:22,
        borderColor: 'gray',
        // backgroundColor:'green',
      },
})