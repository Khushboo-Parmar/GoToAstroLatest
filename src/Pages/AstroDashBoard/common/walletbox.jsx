import { Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/FontAwesome';
import style from "../../../utils/css/comoncss/style";
export default function WalletBox(){
    return(
        <>
        <View style={{ borderColor: '#ea871e', borderWidth: 1, borderRadius: 10, paddingHorizontal: responsiveWidth(5), paddingVertical: responsiveHeight(2), gap: responsiveHeight(2) }}>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ gap: responsiveHeight(1) }}>
                <Text style={[style.comoncolor2, { fontWeight: '400' }]}>
                Payment Id
                </Text>
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: responsiveFontSize(1.9) }}>
                #pay_LygVbk6nY7ijAl
                </Text>
            </View>
            <View style={{ gap: responsiveHeight(1) }}>
                <Text style={[style.comoncolor2, { fontWeight: '400', textAlign: 'right' }]}>
                    Date
                </Text>
                <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.5) }}>
                    18/12/2022
                </Text>
            </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ gap: responsiveHeight(1) }}>
                <Text style={[style.comoncolor2, { fontWeight: '400' }]}>
                Pay With
                </Text>
                <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.5) }}>
                upi
                </Text>
            </View>
            <View style={{ gap: responsiveHeight(1) }}>
                <Text style={[style.comoncolor2, { fontWeight: '400', textAlign: 'right' }]}>
                Amount
                </Text>
                <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.5) }}>
                <Icon color='black' size={12} name="inr" /> 50.00
                </Text>
            </View>
        </View>

        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
                style={{
                    backgroundColor: '#ea871e',
                    width: '50%',
                    alignItems: 'center',
                    paddingVertical: responsiveWidth(2),
                    borderRadius: 100,
                }}
            >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }}>Deposit</Text>
            </TouchableOpacity>


        </View>

    </View>
        </>
    )
}