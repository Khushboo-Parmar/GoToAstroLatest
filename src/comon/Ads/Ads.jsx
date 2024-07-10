import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default function Addas({navigation}) {
    return (
        <>
            <View style={{ marginBottom: responsiveHeight(3), backgroundColor: 'white' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Filter',{ name: 'TALK TO ASTROLOGER' })}>
                    <Image style={{ borderRadius: 10, marginRight: responsiveWidth(2) }} width={responsiveWidth(90)} height={responsiveHeight(14)} source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/banner_images/1688112074.webp' }} />
                    </TouchableOpacity  >
                    <TouchableOpacity>
                    <Image style={{ borderRadius: 10, marginRight: responsiveWidth(2) }} width={responsiveWidth(90)} height={responsiveHeight(14)} source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/banner_images/1688112074.webp' }} />
                    </TouchableOpacity>
                    <Image style={{ borderRadius: 10, marginRight: responsiveWidth(2) }} width={responsiveWidth(90)} height={responsiveHeight(14)} source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/banner_images/1688112074.webp' }} />
                </ScrollView>
            </View>
        </>
    );
}
