
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from "../../../utils/css/comoncss/style";

export default function HoroSing({ image, text, image2,navigation }) {
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('CompatibilityDetail')} style={{
            gap: responsiveHeight(1),
            alignItems: 'center',
            backgroundColor: 'white',
            shadowColor: '#ea871e',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 5,
            borderRadius: 12,
            paddingVertical: responsiveHeight(2),
            marginHorizontal: responsiveWidth(2),
            width:responsiveWidth(40),marginBottom:responsiveHeight(2)
        }}>
            <Image style={{
                width: responsiveWidth(15),
                height: responsiveHeight(8),
                borderRadius: responsiveWidth(7.5),  // Add border radius to make the image circular
            }} source={{ uri: image }} />
            
            <View style={{ gap: responsiveHeight(0.8) }}>
                <Text style={[style.comoncolor2, {
                    fontWeight: 'bold',
                    fontSize: responsiveFontSize(1.3),
                    textAlign: 'center'
                }]}>{text}</Text>
            </View>

            <Image style={{
                width: responsiveWidth(15),
                height: responsiveHeight(8),
                borderRadius: responsiveWidth(7.5),  // Add border radius to make the image circular
            }} source={{ uri: image2 }} />
        </TouchableOpacity>
    );
}
