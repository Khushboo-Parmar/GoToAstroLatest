import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View, Platform } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Tabs = ({ image, name , nav }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(nav?nav:'',{name:name})} style={{
      backgroundColor: '#fff4dd',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      padding: responsiveWidth(2),
      ...Platform.select({
        ios: {
          shadowColor: '#78411b',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
        },
        android: {
            shadowColor: '#ea871e',
          elevation: 5,
        },
      }),
    }}>
      <View style={{
        backgroundColor: '#78411b',
        padding: responsiveHeight(1),
        borderRadius: 10,
      }}>
        <Image style={{ width: responsiveWidth(10), height: responsiveHeight(5) }} source={{ uri: image }} />
      </View>
      <View style={{ marginLeft: responsiveWidth(5) }}>
        <Text style={{ color: '#78411b', fontWeight: 'bold' }}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Tabs;
