import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import ProductBox from './ProductBox';
import style from '../../utils/css/comoncss/style';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Cart({ navigation }) {
  return (
    <>
      <ScrollView style={[style.bgwhite, {
        paddingVertical: responsiveWidth(5),
        height: '100%',
        paddingHorizontal: responsiveWidth(5)
      }]}>

        <View style={{ justifyContent: 'space-between' }}>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon color='black' size={17} name="chevron-left" />
          </TouchableOpacity>


          <View style={{ gap: responsiveHeight(1), paddingVertical: responsiveHeight(2), justifyContent: 'space-between', width: '100%', marginTop: responsiveHeight(2), borderBottomWidth: 2, borderBottomColor: '#ea871e' }}>
            <Text style={[style.black, { fontSize: 24, fontWeight: 'bold' }]}>Shopping Cart</Text>
            <Text style={[style.comoncolor2, { fontSize: responsiveFontSize(1.7), fontWeight: 'bold' }]}>2 items</Text>
          </View>



          {/* Cart Box  */}

          <View>
            <ProductBox image={'https://d2vvtb6c5o2opz.cloudfront.net/estore_products/1649493239.webp'} />
            <ProductBox image={'https://d2vvtb6c5o2opz.cloudfront.net/estore_products/1657712108.webp'} />

          </View>






          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginVertical: responsiveHeight(2) }}>
            <Text style={{ fontSize: responsiveFontSize(1.8), color: 'black', fontWeight: 'bold' }}>Total</Text>
            <Text style={[style.black, { fontSize: responsiveFontSize(2.9), fontWeight: 'bold' }]}><Icon color='black' size={20} name="inr" /> 1040.00</Text>
          </View>


          <TouchableOpacity style={{ marginVertical: responsiveHeight(5), backgroundColor: '#000', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ color: '#FFF', fontSize: responsiveFontSize(1.6), fontWeight: 'bold' }}>CONTINUE TO PAYMENT </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </>
  )
}