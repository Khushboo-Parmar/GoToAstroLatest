import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default function CategryCard({ navigation, nav, item, slug, image }) {
  return (
    <View style={{ width: '50%', padding: responsiveWidth(2) }}>
      <TouchableOpacity
        onPress={() => navigation.navigate(nav ? nav : 'SubCategory', { slug: slug ? `${item?.slug}/${slug}` : item?.slug })}
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
          style={{ width: responsiveWidth(25), height: responsiveHeight(13) }}
          source={{ uri: item?.image_full_path ? item?.image_full_path : image }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: responsiveFontSize(1.6), color: 'black' }}>
          {item?.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
