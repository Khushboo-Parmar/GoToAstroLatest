import { Image, ScrollView, Text, View } from "react-native";
import style from "../../../utils/css/comoncss/style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Header from "../../../comon/HeaderFooter/Header";
import Addas from "../../../comon/Ads/Ads";
import HoroCard from "./HorcopeCard";
import Icon from 'react-native-vector-icons/FontAwesome';
import HoroSing from "./HorcopeSingsCrad";
import HoroSopeBar from "../HoroscopeBar/HoroScopeBAr";

export default function HoroscopeDetail({navigation}){
    return(
        <>
        <Header top={'Leo'} />
            <ScrollView style={[style.bgwhite, {
            paddingVertical: responsiveWidth(5),
            height: '100%',
            paddingHorizontal: responsiveWidth(5)
        }]}>
            <Addas />

            <ScrollView
            style={{ flexDirection: 'row' }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <HoroCard navigation={navigation} text={'Aries'} date={'Mar 21 - Apr 20'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/784.webp'} />
            <HoroCard navigation={navigation} text={'Aries'} date={'Mar 21 - Apr 20'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/776.webp'} />
            <HoroCard navigation={navigation} text={'Aries'} date={'Mar 21 - Apr 20'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/780.webp'} />
            <HoroCard navigation={navigation} text={'Aries'} date={'Mar 21 - Apr 20'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/775.webp'} />
        </ScrollView>

<View>

<View style={{alignItems:'center',marginVertical:responsiveHeight(2)}}>
    <Image style={{width:responsiveHeight(20),height:responsiveHeight(20)}} source={{uri:'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/775.webp'}} />
</View>

<View>
<Text style={[style.black,{fontWeight:'bold'}]}>LEO : DEFINITION AND FACTS - GOTOASTRO</Text>
                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.4),marginVertical:responsiveHeight(2)}}>
                    Leo is the fifth zodiac sign, represented by the Lion, the king of animals. People born between July 23 and August 22 are said to be Leos. Leo is a fiery and male sign. The Sun, the king of planets is the ruling planet of this zodiac sign and that is also fiery planet. The zodiac sign and its ruling planet both are with fiery element, due to this combination this sign become very fiery indeed. Add to that the male quality, and sign’s symbol of a Loin makes a lot of sense. Those born under this sign are said to be very independent in nature, radiant, energetic, and full of positivity. Leos are ambitious, confident, charismatic personalities, and warm-hearted who always bring energy and positivity. They are known for their strong personalities, and leadership qualities. They are known for their boldness and courage. They are known for their ability to inspire and motivate others. Leo is a fixed sign, it indicates that those born under this sign are generally resistant to change and tend to be steadfast in their opinions and beliefs. They are associated with the qualities of loyalty, honor, and integrity. 
                    </Text>

                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.4),marginVertical:responsiveHeight(2)}}>
                    Leo is the fifth zodiac sign, represented by the Lion, the king of animals. People born between July 23 and August 22 are said to be Leos. Leo is a fiery and male sign. The Sun, the king of planets is the ruling planet of this zodiac sign and that is also fiery planet. The zodiac sign and its ruling planet both are with fiery element, due to this combination this sign become very fiery indeed. Add to that the male quality, and sign’s symbol of a Loin makes a lot of sense. Those born under this sign are said to be very independent in nature, radiant, energetic, and full of positivity. Leos are ambitious, confident, charismatic personalities, and warm-hearted who always bring energy and positivity. They are known for their strong personalities, and leadership qualities. They are known for their boldness and courage. They are known for their ability to inspire and motivate others. Leo is a fixed sign, it indicates that those born under this sign are generally resistant to change and tend to be steadfast in their opinions and beliefs. They are associated with the qualities of loyalty, honor, and integrity. 
                    </Text>
</View>

<View style={{ gap: responsiveHeight(2), marginVertical: responsiveHeight(2) }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>Ruling Planet </Text>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>The Sun</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>Nature</Text>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>Fixed</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>Element</Text>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>Fiery Sign </Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>Planet of Luck </Text>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>Mars</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>Planet of Career </Text>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>Venus</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>Planet of Money</Text>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>Mercury</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>Planet of Love</Text>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>Saturn</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>Planet of Career </Text>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>Venus</Text>
                    </View>

                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>Likes</Text>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4),width:'80%' }}>Independence, Freedom, Adventures, Natural Places, Hill Station, Parties and ceremonies, Lavish Life etc.  </Text>
                    </View>
             
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4), }}>Dislikes</Text>
                        <Text style={{ color:'grey',fontSize:responsiveFontSize(1.4),width:'80%' }}>Subordination, Waiting, Receiving Instructions, Repeated work, Narrow Minded Person etc.  </Text>
                    </View>

                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.4),marginVertical:responsiveHeight(1)}}>
                    When reading the personality description of these traits above, please keep in mind that the ones discussed here are mainly indicative of the influence of their element, and the influence of their ruling planet. The position of other celestial bodies at the very moment of their birth could change, or temper them to vast extent. 
                    </Text>

                </View>

                <HoroSopeBar />

                <View style={{marginVertical:responsiveHeight(2),gap:responsiveHeight(4)}}>
<Text style={[style.black,{fontWeight:'bold',textAlign:'center'}]}>Leo Compatibility With Other Signs</Text>
                
                
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    <HoroSing navigation={navigation} text={' & Sagittarius'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/784.webp'} image2={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/778.webp'} />
                    <HoroSing  navigation={navigation} text={' & Sagittarius'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/784.webp'} image2={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/786.webp'} />
                    <HoroSing  navigation={navigation} text={' & Sagittarius'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/784.webp'} image2={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/785.webp'} />
                    <HoroSing  navigation={navigation} text={' & Sagittarius'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/784.webp'} image2={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/782.webp'} />

                
                </View>
                </View>

</View>

        </ScrollView>
        </>
    )
}