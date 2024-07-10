import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import style from '../../utils/css/comoncss/style';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProductBox({ image }) {
  return (
    <>

      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 10, marginTop: responsiveHeight(3) }}>
        <Image source={{ uri: image }} style={{ width: responsiveWidth(25), height: responsiveHeight(15), objectFit: 'cover' }} />


        <View style={{ flex: 1, marginLeft: 10, gap: responsiveHeight(5) }}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>

            <View style={{ gap: responsiveHeight(1) }}>
              <Text style={[style.black, { fontSize: responsiveFontSize(2), fontWeight: 'bold' }]}>Leather Chair</Text>
              <Text style={{ fontSize: responsiveFontSize(1.4), color: 'gray', fontWeight: '400' }}>Colour: Brown | Item #12332</Text>
            </View>

            <TouchableOpacity><Icon color='#ff5a5a' size={18} name="trash" /></TouchableOpacity>
          </View>


          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: responsiveFontSize(1.7), fontWeight: 'bold', color: 'black' }}><Icon color='black' size={12} name="inr" /> 228.00</Text>
            <View style={[style.bgcomoncolor, { backgroundColor: 'black', flexDirection: 'row', alignItems: 'center', paddingHorizontal: responsiveWidth(4), borderRadius: 100 }]}>
              <TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'white' }}>-</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 16, marginHorizontal: 10, color: 'white', fontWeight: 'bold' }}>4</Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>


        </View>
      </TouchableOpacity>

      <View style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#E0E0E0', marginVertical: 10 }} />
    </>
  )
}