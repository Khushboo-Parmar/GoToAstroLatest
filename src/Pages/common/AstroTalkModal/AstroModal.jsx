import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from "../../../utils/css/comoncss/style";


export default function AstroModal({ navigation, toggleModal }) {
    return (
        <>
            <View style={{ borderRadius: 20, padding: responsiveWidth(10), height: '30%', backgroundColor: 'white', marginHorizontal: responsiveHeight(3) }}>

                <View style={{ gap: responsiveHeight(1) }}>
                    <Text style={{ color: '#ea5f5b', fontSize: responsiveFontSize(3), fontWeight: 'bold' }}><Icon color='#ea5f5b' size={22} name="inr"></Icon> 0</Text>
                    <Text style={[style.black, { fontSize: responsiveFontSize(2.3), fontWeight: 'bold' }]}>Low balance</Text>
                    <Text style={{ color: '#ea5f5b', fontSize: responsiveFontSize(1.3), fontWeight: '500' }}>
                        Please top up with at least  75 for 5 mins talk time!
                    </Text>

                    <View style={{ gap: responsiveHeight(1) }}>
                        <Text style={{ color: 'white', fontSize: responsiveFontSize(1.5), marginBottom: 5, fontWeight: 'bold' }}>Amount</Text>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('TopUp')
                            toggleModal()
                        }}
                            style={[style.bgcomoncolor2, {
                                width: responsiveWidth(45),
                                borderRadius: 6,
                                paddingHorizontal: responsiveWidth(2),
                                paddingVertical: responsiveHeight(1.5),
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: responsiveWidth(4),
                            }]}
                        >
                            <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: responsiveFontSize(1.5) }}>
                                Top up Wallet
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    style={[style.bgcomoncolor2, {
                        position: 'absolute',
                        top: responsiveHeight(0),
                        right: responsiveWidth(0),
                        padding: responsiveWidth(2),
                    }]}
                    onPress={toggleModal}
                >
                    <Icon color='white' size={15} name="times" />
                </TouchableOpacity>
            </View>
        </>
    )
}