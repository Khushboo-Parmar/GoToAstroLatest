import { Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import style from "../../../../utils/css/comoncss/style";
export default function MembersBox({item}){
    return(
        <>
         <View style={{ borderColor: '#ea871e', borderWidth: 1, borderRadius: 10, paddingHorizontal: responsiveWidth(5), paddingVertical: responsiveHeight(2), gap: responsiveHeight(2) }}>


<View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'center' }}>
    <View style={{ gap: responsiveHeight(1) }}>
        <Text style={[style.comoncolor2, { fontWeight: 'bold' }]}>
        {item?.fname} {item?.lname}
        </Text>
    </View>
    
    <View style={{ gap: responsiveHeight(1) }}>
      
    <TouchableOpacity
        style={{
            backgroundColor: '#ea871e',
            alignItems: 'center',
            paddingVertical: responsiveWidth(2),
            borderRadius: 5,paddingHorizontal:responsiveWidth(8)
        }}
    >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }}>SELF</Text>
    </TouchableOpacity>
    </View>
</View>
<View style={{  borderWidth: 0.6, borderStyle: 'dashed', borderColor: 'grey' }} />


<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ gap: responsiveHeight(1) }}>
        <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.4),width:'100%' }}>
        Single
        </Text>
        <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.4),width:'100%' }}>
        Male
        </Text>
        <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.4),width:'100%' }}>
        23/03/1992, 11:45:00 AM
        </Text>
        <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.4),width:'100%' }}>
        Ujjain, Madhya Pradesh, India
        </Text>
    </View>
</View>
<View style={{  borderWidth: 0.6, borderStyle: 'dashed', borderColor: 'grey' }} />

<View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
    <TouchableOpacity
        style={{
            borderWidth:1,
            borderColor: '#ea871e',
            width: '30%',
            alignItems: 'center',
            paddingVertical: responsiveWidth(2),
            borderRadius: 5,
        }}
    >
        <Text style={[style.comoncolor2,{ fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }]}>Edit</Text>
    </TouchableOpacity>


</View>

</View>
        </>
    )
}