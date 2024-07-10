import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View, ImageBackground } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import img from '../../assets/images/logo.webp';
import img2 from '../../assets/images/he.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from "../utils/css/comoncss/style";


export default function SplashScreen({navigation}) {
    return (
        <>
                <View style={[style.bgwhite,{
                    paddingVertical: responsiveWidth(5),
                    height: '100%',
                    paddingHorizontal: responsiveWidth(5),
                    justifyContent: 'center',
                    alignContent: 'center',
                    width: '100%', height: '100%'
                }]}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: responsiveHeight(2)
                    }}>
                        <Image source={img} style={{
                            width: responsiveWidth(30),
                            height: responsiveHeight(5)
                        }} />
                    </View>

                    <View style={{
                        alignItems: 'center',
                        marginVertical: responsiveHeight(5)
                    }}>
                        <Image source={img2} style={{
                            width: responsiveWidth(85),
                            height: responsiveHeight(40)
                        }} />
                    </View>

                    <View style={{
                        alignItems: 'center',
                        marginTop: responsiveHeight(5)
                    }}>
                        <Text style={[style.black,{
                            fontSize: responsiveFontSize(3),
                            fontWeight: 'bold'
                        }]}>Welcome to GotoAstro</Text>
                        <Text style={[{
                            fontSize: responsiveFontSize(2),
                            textAlign: 'center',
                            marginTop: responsiveHeight(2),
                            fontWeight: 'thin',color:'grey'
                        }]}>Talk to India's Top Astrolgers <Text style={[style.white,{backgroundColor:'#175ee5', fontWeight: 'bold'}]}>@ Re.1 Only</Text></Text>
                    </View>

                    <View style={{ alignItems: 'center', marginVertical: responsiveHeight(5) }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 10,
                            paddingVertical: responsiveHeight(2),
                            width: '90%'
                        }}>
                            <Text style={[style.black,{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                alignItems:'center',justifyContent:'center'
                            }]}>Get Started <Icon size={14} name="arrow-circle-right"></Icon></Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </>
    );
}
