import { Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import style from "../../../../utils/css/comoncss/style";
import { getData } from "../../../../Apis/ListsApi/ListPostApi";

export default function SaveAdress({ item, setShow, show, setId ,see,fetchData}) {
    const Delete = async (id) =>{
        try {
            const maincover = await getData('customer/address/delete_address', {id:id}, see[0]?.token);
            ToastAndroid.show('Address Deleted Succefully', ToastAndroid.SHORT);
            fetchData();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <View style={{ borderColor: '#ea871e', borderWidth: 1, borderRadius: 10, paddingHorizontal: responsiveWidth(5), paddingVertical: responsiveHeight(2), gap: responsiveHeight(2) }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ gap: responsiveHeight(1) }}>
                    <Text style={[style.comoncolor2, { fontWeight: 'bold' }]}>
                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </Text>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: responsiveFontSize(1.9) }}>
                        {item.cname}
                    </Text>
                </View>
                <View style={{ gap: responsiveHeight(1) }}>
                    <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.5) }}>
                        +{item.contact_no}
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ gap: responsiveHeight(1) }}>
                    <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.4), width: '100%' }}>
                        {item.address_details}
                    </Text>
                </View>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => {
                    setShow(!show);
                    setId(item.id);
                }}
                    style={{
                        borderWidth: 1,
                        borderColor: '#ea871e',
                        width: '30%',
                        alignItems: 'center',
                        paddingVertical: responsiveWidth(2),
                        borderRadius: 5,
                    }}>
                    <Text style={[style.comoncolor2, { fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }]}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Delete(item?.id)}
                    style={{
                        borderWidth: 1,
                        borderColor: '#ea871e',
                        width: '30%',
                        alignItems: 'center',
                        paddingVertical: responsiveWidth(2),
                        borderRadius: 5,
                    }}>
                    <Text style={[style.comoncolor2, { fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }]}>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#ea871e',
                        width: '30%',
                        alignItems: 'center',
                        paddingVertical: responsiveWidth(2),
                        borderRadius: 5,
                    }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }}>Default</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
