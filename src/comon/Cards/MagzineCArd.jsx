import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';

const MagzineCard = ({ toggleModal, data,setSelected }) => {
  return (
    <TouchableOpacity onPress={()=>{
      setSelected(data)
      toggleModal()
    }} style={{ width: '48%', marginBottom: responsiveHeight(2), position: 'relative' }}>
      <Image
        style={{ width: '100%', height: responsiveHeight(30), resizeMode: 'contain' }}
        source={{ uri: data?.full_path_image }}
      />
      <View style={{
        position: 'absolute',
        bottom: 10,
        left: '45%',
        transform: [{ translateX: -24 }], // Adjust based on icon size
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: responsiveHeight(5), // Adjust based on icon size and spacing
        gap: 10
      }}>
        <TouchableOpacity onPress={()=>{
          setSelected(data)
          toggleModal()
        }} style={{
          backgroundColor: 'white',
          padding: responsiveWidth(2),
          borderRadius: 50, alignItems: 'center',
          justifyContent: 'center', height: responsiveHeight(3.8), width: responsiveHeight(4),
          height: responsiveHeight(4),
        }}>
          <Icon name="shopping-cart" size={responsiveFontSize(1.5)} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: 'white',
          padding: responsiveWidth(2),
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center', height: responsiveHeight(3.8), width: responsiveHeight(4),
          height: responsiveHeight(4),
        }}>
          <Icon name="heart" size={responsiveFontSize(1.5)} color={'black'} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default MagzineCard;
