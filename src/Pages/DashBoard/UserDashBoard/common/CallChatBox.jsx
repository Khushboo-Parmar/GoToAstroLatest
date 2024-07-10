import { Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import style from "../../../../utils/css/comoncss/style";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CallChatBox() {
    return (
        <>
            <View style={{ borderColor: '#ea871e', borderWidth: 1, borderRadius: 10, paddingHorizontal: responsiveWidth(5), paddingVertical: responsiveHeight(2), gap: responsiveHeight(2) }}>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ gap: responsiveHeight(1) }}>
                        <Text style={[style.comoncolor2, { fontWeight: 'bold' }]}>
                            - Financial
                        </Text>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: responsiveFontSize(1.9) }}>
                            Astro Baleshwar
                        </Text>
                    </View>
                    <View style={{ gap: responsiveHeight(1) }}>
                        <Text style={[style.comoncolor2, { fontWeight: '400', fontSize: responsiveFontSize(1.5) }]}>
                            Duration
                        </Text>
                        <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.5) }}>
                            00:02:48
                        </Text>
                    </View>
                </View>




                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ gap: responsiveHeight(1) }}>
                        <Text style={[style.comoncolor2, { fontWeight: '400' }]}>
                            Type
                        </Text>
                        <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.5) }}>
                            Call
                        </Text>
                    </View>
                    <View style={{ gap: responsiveHeight(1) }}>
                        <Text style={[style.comoncolor2, { fontWeight: '400', textAlign: 'right' }]}>
                            Amount
                        </Text>
                        <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.5) }}>
                            <Icon color='black' size={12} name="inr" /> 300.00
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,alignItems:'center'}}>
                    <View style={{ gap: responsiveHeight(1) }}>
                    <Text style={[style.comoncolor2, { fontWeight: '400',fontSize:responsiveFontSize(1.6)}]}>
                            Order Stauts
                        </Text>
                    <TouchableOpacity
                        style={{
                            borderWidth:1,
                            borderColor: '#ea871e',
                            width: '100%',
                            alignItems: 'center',
                            paddingVertical: responsiveWidth(2),
                            borderRadius: 5,paddingHorizontal:responsiveWidth(8)
                        }}
                    >
                        <Text style={[style.comoncolor2,{  fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }]}>Canceled</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{ gap: responsiveHeight(1) }}>
                        <Text style={[style.comoncolor2, {textAlign:'right', fontWeight: '400', fontSize: responsiveFontSize(1.5) }]}>
                            Date
                        </Text>
                        <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.3) }}>
                        23-06-2023 05:10:23 PM	
                        </Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: '#ea871e',
                            width: '30%',
                            alignItems: 'center',
                            paddingVertical: responsiveWidth(2),
                            borderRadius: 5,
                        }}
                    >
                        <Text style={[style.comoncolor2, { fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }]}>Rating</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: '#ea871e',
                            width: '30%',
                            alignItems: 'center',
                            paddingVertical: responsiveWidth(2),
                            borderRadius: 5,
                        }}
                    >
                        <Text style={[style.comoncolor2, { fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }]}>Chat History</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#ea871e',
                            width: '30%',
                            alignItems: 'center',
                            paddingVertical: responsiveWidth(2),
                            borderRadius: 5,
                        }}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }}>Remedies</Text>
                    </TouchableOpacity>


                </View>

            </View>
        </>
    )
}