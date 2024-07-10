import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Tabs from './Tabs';



const CustomDrawerContent = (props) => {
    
    return (
        <>
            <ScrollView style={{height:'100%', padding: responsiveWidth(4), backgroundColor: 'white', overflow: 'hidden' }}>
            <View style={{ paddingVertical: responsiveHeight(3), alignItems: 'center' }}>
                    <Image source={require('../../../assets/images/logo.webp')} style={{ width: responsiveWidth(40), height: responsiveHeight(7) }} />
                </View>

<View style={{marginVertical:responsiveHeight(3),gap:responsiveHeight(3),justifyContent:'center',paddingBottom:responsiveHeight(18)}}>
<Tabs nav={'Home'} image={'https://static.vecteezy.com/system/resources/thumbnails/029/145/582/small_2x/astrology-wheel-with-zodiac-signs-vintage-frame-divine-magic-hand-drawn-antique-illustration-png.png'} name={'Home'} />
<Tabs nav={'Filter'} image={'https://static.vecteezy.com/system/resources/thumbnails/029/145/582/small_2x/astrology-wheel-with-zodiac-signs-vintage-frame-divine-magic-hand-drawn-antique-illustration-png.png'} name={'TALK TO ASTROLOGER'} />
<Tabs nav={'Puja'} image={'https://static.vecteezy.com/system/resources/thumbnails/029/145/582/small_2x/astrology-wheel-with-zodiac-signs-vintage-frame-divine-magic-hand-drawn-antique-illustration-png.png'} name={'PUJA'} />
<Tabs nav={'Store'} image={'https://static.vecteezy.com/system/resources/thumbnails/029/145/582/small_2x/astrology-wheel-with-zodiac-signs-vintage-frame-divine-magic-hand-drawn-antique-illustration-png.png'} name={'STORE'} />
<Tabs nav={'Filter'} image={'https://static.vecteezy.com/system/resources/thumbnails/029/145/582/small_2x/astrology-wheel-with-zodiac-signs-vintage-frame-divine-magic-hand-drawn-antique-illustration-png.png'} name={'ASTRO REPORTS'} />
<Tabs nav={'Magzine'} image={'https://static.vecteezy.com/system/resources/thumbnails/029/145/582/small_2x/astrology-wheel-with-zodiac-signs-vintage-frame-divine-magic-hand-drawn-antique-illustration-png.png'} name={'MAGAZINE'} />
<Tabs nav={'Course'} image={'https://static.vecteezy.com/system/resources/thumbnails/029/145/582/small_2x/astrology-wheel-with-zodiac-signs-vintage-frame-divine-magic-hand-drawn-antique-illustration-png.png'} name={'ASTROLOGY COURSES'} />
<Tabs nav={'Blog'} image={'https://static.vecteezy.com/system/resources/thumbnails/029/145/582/small_2x/astrology-wheel-with-zodiac-signs-vintage-frame-divine-magic-hand-drawn-antique-illustration-png.png'} name={'BLOG'} />
<Tabs nav={'HorceScope'} image={'https://static.vecteezy.com/system/resources/thumbnails/029/145/582/small_2x/astrology-wheel-with-zodiac-signs-vintage-frame-divine-magic-hand-drawn-antique-illustration-png.png'} name={'Horoscope'} />




</View>


            </ScrollView>
        </>
    );
};

export default CustomDrawerContent;