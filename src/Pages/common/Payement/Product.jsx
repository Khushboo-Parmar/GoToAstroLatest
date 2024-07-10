import { View, Text, Image, TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from "../../../utils/css/comoncss/style";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Product({image}){
    return(
        <>
                 <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 10, marginTop: responsiveHeight(3) }}>
        <Image source={{ uri: image }} style={{ width: responsiveWidth(25), height: responsiveHeight(15), objectFit: 'cover' }} />


        <View style={{ flex: 1, marginLeft: 10, gap: responsiveHeight(5) }}>
          <View style={{ justifyContent: 'space-between'}}>

            <View style={{ gap: responsiveHeight(1) }}>
              <Text style={[style.black, { fontSize: responsiveFontSize(2), fontWeight: 'bold' }]}>Leather Chair</Text>
            </View>

            <View style={{marginTop:responsiveHeight(1),gap:responsiveHeight(1)}}>
    <Text style={{ fontSize: responsiveFontSize(1.4), color: 'gray', fontWeight: '600' }}>SKU: 
    <Text style={{ fontSize: responsiveFontSize(1.4), color: 'gray', fontWeight: '400' }}> 0301301031000002162</Text>
    </Text> 
    <Text style={{ fontSize: responsiveFontSize(1.4), color: 'gray', fontWeight: '600' }}>Certification:
    <Text style={{ fontSize: responsiveFontSize(1.4), color: 'gray', fontWeight: '400' }}> Authorized Lab</Text>
    </Text>

    <Text style={{ fontSize: responsiveFontSize(1.4), color: 'gray', fontWeight: '600' }}>Expected Dispatch Date:
    <Text style={{ fontSize: responsiveFontSize(1.4), color: 'gray', fontWeight: '400' }}> 27/06/2024</Text>
    </Text>
    
</View>
          </View>


          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: responsiveFontSize(1.7), fontWeight: 'bold', color: 'black' }}>1 X <Icon color='black' size={12} name="inr" /> 228.00</Text>
          </View>


        </View>
      </TouchableOpacity>
      <View style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#E0E0E0', marginVertical: 10 }} />
        </>
    )
}