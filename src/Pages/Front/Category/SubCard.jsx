import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default function SubCard({ navigation, nav ,item,slug}) {
  return (
    <View style={{ width: '50%', padding: responsiveWidth(2) }}>
      <TouchableOpacity
        onPress={() => navigation.navigate(nav ? nav : 'SubCategory',{slug:`${slug}/${item?.slug}`})}
        style={{
          backgroundColor: 'white',
          shadowColor: '#ea871e',
          borderRadius: 20,
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 30,
          elevation: 3,
          alignItems: 'center',
          paddingVertical: responsiveHeight(2),
        }}
      >
        <Image
          style={{ width: '100%', height: responsiveHeight(13) }}
          source={{ uri: item?.image_full_path }}
        />
        <Text style={{paddingHorizontal:responsiveWidth(5),marginVertical:responsiveHeight(1),  textAlign:'center', fontWeight: 'bold', fontSize: responsiveFontSize(1.4), color: 'black' }}>
          {item?.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
