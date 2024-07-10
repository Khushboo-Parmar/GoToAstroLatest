import { Image, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import style from "../../utils/css/comoncss/style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { useState } from "react";
import { getData } from "../../Apis/ListsApi/ListPostApi";

export default function SentOtp({ navigation }) {
    const [number, setNumber] = useState('')
    const handelSumbit = async () => {
        const result = await getData('auth/send_otp', { mobile: number })
        console.warn(result)

        // if (result?.status === 200) {
        if (result?.status) {
            navigation.navigate('SumbitOtp', { number: number });
            ToastAndroid.show(`${result?.messages}`, ToastAndroid.SHORT);
        } else if (result?.status === 401) {
            ToastAndroid.show(`${result?.messages?.mobile}`, ToastAndroid.SHORT);
        }
    }
    return (
        <>
            <View style={[style.bgwhite, {
                paddingVertical: responsiveWidth(5),
                height: '100%',
                paddingHorizontal: responsiveWidth(5)
            }]}>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: responsiveHeight(3) }}>
                    <Image source={require('../../../assets/images/logo.webp')} style={{ width: responsiveWidth(30), height: responsiveHeight(5) }} />
                </View>


                <View style={{ height: '85%', justifyContent: 'center', gap: responsiveHeight(6) }}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[style.black, { fontSize: responsiveFontSize(2.7), fontWeight: 'bold', textAlign: 'center' }]}>Sign In / Sign Up</Text>
                        <Text style={{
                            textAlign: 'center', color: 'grey',
                            fontSize: responsiveFontSize(1.3), marginVertical: responsiveHeight(1)
                        }}>Hello , Enter Your Details to Get Sign In/Sign {'\n'} Up to Your Account</Text>
                    </View>

                    <View>
                        <TextInput
                            style={[style.comoncolor2, { borderColor: '#ea871e', borderWidth: 1, borderRadius: 30, paddingHorizontal: responsiveWidth(5), paddingVertical: responsiveHeight(1.8) }]}
                            placeholder="Phone Number"
                            placeholderTextColor={'grey'}
                            onChangeText={setNumber}
                            keyboardType="numeric"
                        />

                        <Text style={[{ fontSize: responsiveFontSize(1.4), color: 'grey', textAlign: 'center', marginVertical: responsiveHeight(1.6) }]}>
                            By proceeding, I Agree to <Text style={[style.comoncolor2, { fontWeight: 'bold' }]}>Terms and conditions</Text> & <Text style={[style.comoncolor2, { fontWeight: 'bold' }]}>Privacy Policy</Text>
                        </Text>
                    </View>

                    <View style={{ marginTop: responsiveHeight(2) }}>
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
                                Log in to your account
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </>
    )
}



