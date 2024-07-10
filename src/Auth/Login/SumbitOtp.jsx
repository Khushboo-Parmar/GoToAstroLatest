import { Image, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import style from "../../utils/css/comoncss/style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { useState } from "react";
import { getData } from "../../Apis/ListsApi/ListPostApi";
import { useNavigation } from "@react-navigation/native";
import { adduser } from "../../store/Slice/UserData";
import { useDispatch } from "react-redux";

export default function SumbitOtp(props) {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [otp, setOtp] = useState('')
    const handelSumbit = async () => {
        const result = await getData('auth/login_submit', { mobile: props?.route?.params?.number, otp: otp })
        // if (result?.status === 200) {
            console.warn(result)
        if (result?.status) {

            dispatch(adduser(result?.data))
            navigation.navigate('Home');
            ToastAndroid.show('LogIned Succefully', ToastAndroid.SHORT);
        } else if (result?.status==false) {
            ToastAndroid.show('OTP is Incorrect or Expired', ToastAndroid.SHORT);
        }
    }
    return (
        <>
            <View style={[style.bgwhite, {
                paddingVertical: responsiveWidth(5),
                height: '100%',
                paddingHorizontal: responsiveWidth(5)
            }]}>


                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: responsiveHeight(3) }}>
                    <Image source={require('../../../assets/images/logo.webp')} style={{ width: responsiveWidth(30), height: responsiveHeight(5) }} />
                </View>


                <View style={{ height: '85%', justifyContent: 'center', gap: responsiveHeight(6) }}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[style.black, { fontSize: responsiveFontSize(2.7), fontWeight: 'bold', textAlign: 'center' }]}>Enter OTP</Text>
                        <Text style={{
                            textAlign: 'center', color: 'grey',
                            fontSize: responsiveFontSize(1.4), marginVertical: responsiveHeight(1)
                        }}>Hello , Enter OTP sent to your {'\n'} Mobile Number for Sign In/Sign Up to Your Account</Text>
                    </View>

                    <View>
                        <Text style={[style.comoncolor2, { fontSize: responsiveFontSize(1.4), textAlign: 'center', marginVertical: responsiveHeight(1.6) }]}>
                            OTP is sent to your phone
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: responsiveWidth(3) }}>
                            {Array(6).fill().map((_, i) => (
                                <TextInput
                                    key={i}
                                    style={[style.comoncolor2, {
                                        width: responsiveHeight(5.7),
                                        height: responsiveHeight(6.6),
                                        borderColor: '#ea871e',
                                        borderWidth: 1,
                                        borderRadius: 10,
                                        textAlign: 'center'
                                    }]}
                                    maxLength={1}
                                    keyboardType="numeric"
                                    value={otp[i]}
                                    onChangeText={(text) => {
                                        let newCode = otp?.split('');
                                        newCode[i] = text;
                                        setOtp(newCode?.join(''));
                                    }}
                                />
                            ))}
                        </View>

                        <TouchableOpacity>
                            <Text style={[style.comoncolor, { fontSize: responsiveFontSize(1.4), textAlign: 'center', marginVertical: responsiveHeight(1.6), fontWeight: 'bold' }]}>
                                Resend OTP
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: responsiveHeight(2), gap: responsiveHeight(2) }}>
                        <TouchableOpacity onPress={handelSumbit}
                            style={{
                                width: '100%',
                                borderWidth: 1,
                                borderRadius: 100,
                                paddingHorizontal: responsiveWidth(2),
                                paddingVertical: responsiveHeight(2.5),
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#ea871e',
                                marginRight: responsiveWidth(4),
                                borderColor: '#ea871e'
                            }}
                        >
                            <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: responsiveFontSize(1.6) }}>
                                Sumbit
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Login')}
                            style={{
                                width: '100%',
                                borderWidth: 1,
                                borderRadius: 100,
                                paddingHorizontal: responsiveWidth(2),
                                paddingVertical: responsiveHeight(2.5),
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: responsiveWidth(4),
                                borderColor: '#ea871e'
                            }}
                        >
                            <Text style={[style.comoncolor2, { fontWeight: 'bold', fontSize: responsiveFontSize(1.6) }]}>
                                Back
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </>
    )
}

