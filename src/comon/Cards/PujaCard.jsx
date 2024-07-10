import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const PujaCard = () => {
  const [like, setLike] = useState(false);
const navigation = useNavigation()
  return (
    <View style={{paddingVertical: responsiveHeight(2), flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={{
        backgroundColor: 'white',
        shadowColor: '#ea871e',
        width: '95%',
        borderRadius: 8,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 30,
        elevation: 3,
        alignItems: 'center',
        paddingBottom: responsiveHeight(2),
        position: 'relative',
        gap: responsiveHeight(1.2)
      }}>

        {/* Offer Badge */}
        <View style={{
          position: 'absolute',
          top: -responsiveHeight(1),
        //   right: responsiveWidth(1),
          backgroundColor: '#ff5733',
          padding: responsiveWidth(1),
          borderRadius: 5,
          zIndex: 999,
          left:5
        }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.2) }}>4% OFF</Text>
        </View>

        {/* Like and Video Icons */}
        <View style={{ zIndex: 999, position: 'absolute', top: responsiveHeight(2), right: responsiveWidth(2), gap: 10 }}>
          <TouchableOpacity onPress={() => setLike(!like)} style={{
            backgroundColor: like ? 'white' : '#ea871e',
            padding: responsiveWidth(2),
            borderRadius: 50,
            justifyContent: 'center',
            height: responsiveHeight(3.8)
          }}>
            <Icon name="heart" size={responsiveFontSize(1.5)} color={like ? 'red' : 'white'} />
          </TouchableOpacity>
          <TouchableOpacity style={{
            backgroundColor: '#ea871e',
            padding: responsiveWidth(2),
            borderRadius: 50,
            justifyContent: 'center',
            height: responsiveHeight(3.8)
          }}>
            <Icon name="video-camera" size={responsiveFontSize(1.5)} color="white" />
          </TouchableOpacity>
        </View>

        {/* Image and Pujan Details */}
        <Image style={{ width: '100%', height: responsiveHeight(13) }} source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/epooja/1660048923.webp' }} />
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(1.4) }}>Kua Pujan (Jal Pujan)</Text>
        <View style={{ alignItems: 'center', gap: 5 }}>
          <Text style={{ color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.3) }}>Birth Related Sanskar Puja</Text>
          <Text style={{ color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.3) }}>Hindi, English</Text>
        </View>

        {/* Pricing */}
        <View style={{ flexDirection: 'row', gap: responsiveWidth(2) }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}> <Icon name="inr" size={responsiveFontSize(1.5)} color="black" /> 2400</Text>
          <Text style={{ color: 'grey', fontWeight: 'bold', textDecorationLine: 'line-through' }}> <Icon name="inr" size={responsiveFontSize(1.5)} color="grey" /> 2500</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PujaCard;
