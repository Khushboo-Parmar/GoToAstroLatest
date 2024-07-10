import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';

const AstroCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flexWrap: 'wrap', paddingVertical: responsiveHeight(1), flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('AstroDetail',{slug:data?.slug})}
        style={{
          gap: responsiveWidth(4),
          paddingVertical: responsiveHeight(3),
          paddingHorizontal: responsiveWidth(3),
          backgroundColor: 'white',
          shadowColor: '#ea871e',
          width: '95%', // Ensure two items fit in a row
          borderRadius: 8,
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 30,
          elevation: 3,
          margin: '1%',
          position: 'relative', // Ensure relative positioning for the badge
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: -responsiveHeight(1),
            right: -responsiveWidth(1),
            backgroundColor: '#ff6347',
            paddingVertical: responsiveHeight(0.5),
            paddingHorizontal: responsiveWidth(2),
            borderRadius: 5,
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.2) }}>{data?.dis_percent}% OFF</Text>
        </View>

        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <Image
            style={{ borderRadius: 14 }}
            width={responsiveWidth(12)}
            height={responsiveHeight(6)}
            source={{ uri: data?.image_name ?  data?.image_name : data?.full_path_image }}
          />
          <View style={{ gap: 5 }}>
            <Text style={{ color: '#ea871e', fontWeight: 'bold', textAlign: 'right' }}>
              <Icon color={'#ea871e'} size={12} name="star" /> {data?.dummy_rating ? data?.dummy_rating : '0'}
            </Text>
            <View
              style={{
                backgroundColor: '#ea871e',
                paddingVertical: responsiveHeight(0.3),
                paddingHorizontal: responsiveWidth(2),
                width: '100%',
                alignItems: 'center',
                borderRadius: 5,
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.5) }}>EXP {data?.total_year_experince}Y+</Text>
            </View>
          </View>
        </View>
        <View style={{ gap: responsiveWidth(2) }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>{data?.published_name}</Text>
          <Text style={{ color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.2) }}>{data?.cate_name}</Text>
          <Text style={{ color: '#ea871e', fontWeight: '300', fontSize: responsiveFontSize(1.5) }}>{data?.lang_name}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(2) }}>
            <Icon color={'black'} size={12} name="inr" /> {data?.sale_price}
            <Text style={{ color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.2) }}> /Min</Text>
          </Text>
          <Text style={{ color: 'black' }}>|</Text>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(2), textDecorationLine: 'line-through' }}>
            <Icon color={'black'} size={12} name="inr" /> {data?.price}
            <Text style={{ color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.2) }}> /Min</Text>
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ea871e',
              width: '80%',
              alignItems: 'center',
              paddingVertical: responsiveWidth(1.8),
              borderRadius: 5,
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }}>Request Call Back</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AstroCard;
