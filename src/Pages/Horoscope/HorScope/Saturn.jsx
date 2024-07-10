import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import style from '../../../utils/css/comoncss/style';
import HoroCard from '../HoroscopeDetail/HorcopeCard';

export default function Saturn({navigation}) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const shortText = `How will Saturn's transit in Aquarius be for you? [January, 2023 to March, 2025] On January 17, 2023, at 18:04, Saturn will leave its own sign Capricorn and enter its Mooltrikona sign Aquarius and will remain in this sign till March 29, 2025. Saturn's zodiac change brings many ups and downs in every person's life according to the transitory results. While some people will be free from their half-and-half and half-and-half, many people will come under the control of their half-and-half and half-and-half. Similarly, other auspicious results will also be obtained.`;

    const longText = `How will Saturn's transit in Aquarius be for you? [January, 2023 to March, 2025] On January 17, 2023, at 18:04, Saturn will leave its own sign Capricorn and enter its Mooltrikona sign Aquarius and will remain in this sign till March 29, 2025. Saturn's zodiac change brings many ups and downs in every person's life according to the transitory results. While some people will be free from their half-and-half and half-and-half, many people will come under the control of their half-and-half and half-and-half. Similarly, other auspicious results will also be obtained. How will this zodiac change be for people with different birth signs? An attempt has been made to anticipate this in the following pages. Transit of Saturn Transit of Gold : for Gemini, Scorpio, Capricorn Transit of Copper : for Taurus, Virgo, Aquarius Transit of Silver : For Cancer, Libra, Pisces Transit of Iron : For Aries, Leo, Sagittarius people Transit of Saturn according to zodiac sign Aries: Shani is kind to you, will do your welfare. Taurus: There will be no hindrance in luck, but the work will be done in half. Gemini: Even though you have come out from the eighth floor, still please convince Shani. Cancer: Ashtam's dhaiya, chant Shani mantra brother. Singh: It is the turn of domestic problems, make preparations to celebrate Shani. Virgo: Got freedom from Kantak, but don't leave the devotion of Shani. Libra: Freedom from Dhaiya is done, but now Kantak is suffering. Scorpio: Good days are gone, now it is the turn of Dhaiya. Sagittarius: Good days are coming, fulfill your wishes. Capricorn: Wait two and a half years, Shani's burden is still there. Kumbh: It is in the middle of the year, which does not bring auspicious results. Pisces: Sade Sati has started, now there will be delay in works. Who are in Shani's loop? • The people of Sagittarius are getting free from Sade Sati. • Gemini and Libra people are getting free from Dhaiya. • Virgo people are getting free from the clutches of Kantak. • People with Capricorn, Aquarius and Pisces will remain in the clutches of Sade Sati. • People with Cancer and Scorpio will remain under the control of Dhaiya. • People of Libra will come in the trap of Kantak. • Gemini and Leo people will remain under the inauspicious effect of transit. • This transit of Shani will be most auspicious for Virgo, Libra and Aries people. The results of Shani given here and in the following pages are only on the basis of transit and are said in general. Auspicious results will be affected by the effects of conditions etc. during this period of the Jatak. In addition to this, transit results are also affected on the basis of Saturn's position in birth chart and Ashtakavarga.`;

    return (
        <View style={{marginBottom:responsiveHeight(3)}}>
            <Text style={[style.comoncolor2, { fontWeight: 'bold', fontSize: responsiveFontSize(2.5), textAlign: 'center' }]}>Saturn In Aquarius 2023</Text>
            <Text style={{ textAlign: 'center', color: 'grey', fontSize: responsiveFontSize(1.4), marginVertical: responsiveHeight(2) }}>
                {expanded ? longText : shortText}
            </Text>
            <TouchableOpacity onPress={toggleExpanded}>
                <Text style={{ textAlign: 'center', color: '#ea871e'}}>
                    {expanded ? 'Read Less' : 'Read More'}
                </Text>
            </TouchableOpacity>

            <ScrollView
            style={{ flexDirection: 'row' ,marginVertical:responsiveHeight(2)}}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <HoroCard navigation={navigation} text={'Aries'} date={'Mar 21 - Apr 20'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/784.webp'} />
            <HoroCard navigation={navigation} text={'Aries'} date={'Mar 21 - Apr 20'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/776.webp'} />
            <HoroCard navigation={navigation} text={'Aries'} date={'Mar 21 - Apr 20'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/780.webp'} />
            <HoroCard navigation={navigation} text={'Aries'} date={'Mar 21 - Apr 20'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/775.webp'} />
        </ScrollView>
        </View>
    );
}
