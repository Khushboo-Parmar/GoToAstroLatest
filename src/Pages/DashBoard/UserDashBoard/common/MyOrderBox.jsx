import { Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import style from "../../../../utils/css/comoncss/style";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

export default function MyOrderBox() {
    const navigation = useNavigation()
    return (
        <>
            <View style={{ borderColor: '#ea871e', borderWidth: 1, borderRadius: 10, paddingHorizontal: responsiveWidth(5), paddingVertical: responsiveHeight(2), gap: responsiveHeight(2) }}>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ gap: responsiveHeight(1) }}>
                        <Text style={[style.comoncolor2, { fontWeight: '400' }]}>
                            Order Id
                        </Text>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: responsiveFontSize(1.9) }}>
                            #GA202308070055427
                        </Text>
                    </View>
                    <View style={{ gap: responsiveHeight(1) }}>
                        <Text style={[style.comoncolor2, { fontWeight: '400', textAlign: 'right' }]}>
                            Date
                        </Text>
                        <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.5) }}>
                            Aug 25,2023
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ gap: responsiveHeight(1) }}>
                        <Text style={[style.comoncolor2, { fontWeight: '400' }]}>
                            Pay With
                        </Text>
                        <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.5) }}>
                            WALLET
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


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ gap: responsiveHeight(1) }}>
                        <Text style={[style.comoncolor2, { fontWeight: '400' }]}>
                            Quantity
                        </Text>
                        <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.5) }}>
                            1
                        </Text>
                    </View>
                    <View style={{ gap: responsiveHeight(1) }}>
                        <Text style={[style.comoncolor2, { fontWeight: '400', textAlign: 'right' }]}>
                            Order Stauts
                        </Text>
                        <TouchableOpacity
                        style={{
                            borderWidth:1,
                            borderColor: '#ea871e',
                            width: '100%',
                            alignItems: 'center',
                            paddingVertical: responsiveWidth(2),
                            borderRadius: 5,
                        }}
                    >
                        <Text style={[style.comoncolor2,{  fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }]}>Canceled</Text>
                    </TouchableOpacity>
                    </View>
                </View>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={()=>navigation.navigate('MyOrderDetail')}
                        style={{
                            backgroundColor: '#ea871e',
                            width: '100%',
                            alignItems: 'center',
                            paddingVertical: responsiveWidth(2),
                            borderRadius: 5,
                        }}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }}>View Details</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </>
    )
}