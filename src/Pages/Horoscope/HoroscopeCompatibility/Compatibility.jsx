import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Header from "../../../comon/HeaderFooter/Header";
import style from "../../../utils/css/comoncss/style";
import Addas from "../../../comon/Ads/Ads";
import HoroSing from '../HoroscopeDetail/HorcopeSingsCrad';
import HoroSopeBar from '../HoroscopeBar/HoroScopeBAr';
import AriesHoroscope from '../Card';

export default function Compatibility({ navigation }) {
    return (
        <>
            <Header top={'Leo - Taurus'} />
            <ScrollView style={[style.bgwhite, {
                paddingVertical: responsiveWidth(5),
                height: '100%',
                paddingHorizontal: responsiveWidth(5)
            }]}>
                <Addas />

                <View style={{ marginVertical: responsiveHeight(2), gap: responsiveHeight(4) }}>
                    <Text style={[style.black, { fontWeight: 'bold', textAlign: 'center', fontSize: responsiveFontSize(2) }]}>Leo and Taurus Compatibility</Text>
                    <View style={{ alignItems: 'center', gap: responsiveHeight(2) }}>
                        <Image style={{
                            width: responsiveWidth(20),
                            height: responsiveHeight(10),
                            borderRadius: responsiveWidth(7.5),
                        }} source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/784.webp' }} />

                        <View style={{ gap: responsiveHeight(0.8) }}>
                            <Text style={[style.comoncolor2, {
                                fontWeight: 'bold',
                                fontSize: responsiveFontSize(2),
                                textAlign: 'center'
                            }]}>Leo & Taurus</Text>
                        </View>

                        <Image style={{
                            width: responsiveWidth(20),
                            height: responsiveHeight(10),
                            borderRadius: responsiveWidth(7.5),  // Add border radius to make the image circular
                        }} source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/778.webp' }} />
                    </View>
                </View>

                <View style={{ marginVertical: responsiveHeight(2),gap:responsiveHeight(2) }}>

                    <View>
                        <Text style={[style.black, { fontWeight: 'bold' }]}>Finding Harmony in Contrasts: Exploring the Compatibility of Leo and Taurus</Text>
                        <Text style={{ color: 'grey', fontSize: responsiveFontSize(1.4), marginVertical: responsiveHeight(1) }}>
                            When it comes to love and relationships, Leo and Taurus are two signs that share some similarities, but also have significant differences. Leo is a fire sign, while Taurus is an earth sign, and this elemental contrast can make or break their compatibility.
                        </Text>
                        <Text style={{ color: 'grey', fontSize: responsiveFontSize(1.4), marginVertical: responsiveHeight(1) }}>
                            In this article, we’ll delve into the pros and cons of Leo and Taurus compatibility, exploring how they complement each other, where they clash, and what they need to make their relationship work. We’ll also look at how they fare in marriage and sexual compatibility.
                        </Text>
                    </View>

                    <View>
                        <Text style={[style.black, { fontWeight: 'bold' }]}>Pros of Leo and Taurus Compatibility:</Text>
                        <Text style={{ color: 'grey', fontSize: responsiveFontSize(1.4), marginVertical: responsiveHeight(1) }}>
                            1.Mutual admiration and respect: Both Leo and Taurus value loyalty, stability, and commitment in relationships. They admire each other’s strengths and feel secure in each other’s company.
                            2.Complementary strengths: Leo is confident, outgoing, and passionate, while Taurus is grounded, sensual, and nurturing. They can balance each other’s energies and make each other feel fulfilled.
                            3.Shared love for luxury: Leo and Taurus enjoy the finer things in life, from good food to expensive possessions. They can indulge in these pleasures together and create a comfortable home environment.
                            4.Strong physical attraction: Leo and Taurus have an intense sexual chemistry that can keep their relationship passionate and exciting.
                        </Text>
                    </View>

                    <View>
                        <Text style={[style.black, { fontWeight: 'bold' }]}>Cons of Leo and Taurus Compatibility:</Text>
                        <Text style={{ color: 'grey', fontSize: responsiveFontSize(1.4), marginVertical: responsiveHeight(1) }}>
                            Stubbornness and clashes of will: Leo and Taurus are both fixed signs, which means they can be stubborn and set in their ways. They may clash when they have different opinions or priorities.
                            Ego clashes: Leo loves attention and admiration, while Taurus values stability and security. If Leo’s ego is not kept in check, it can lead to conflicts with Taurus.
                            Different communication styles: Leo is direct and expressive, while Taurus is more reserved and practical. This can lead to misunderstandings and hurt feelings if they don’t learn to communicate effectively.
                            Different spending habits: While both Leo and Taurus enjoy luxury, Leo is more likely to spend money impulsively, while Taurus is more cautious and practical.
                        </Text>
                    </View>

                    <View>
                        <Text style={[style.black, { fontWeight: 'bold' }]}>Marriage Compatibility:</Text>
                        <Text style={{ color: 'grey', fontSize: responsiveFontSize(1.4), marginVertical: responsiveHeight(1) }}>
                            Leo and Taurus can have a strong and lasting marriage if they learn to appreciate each other’s strengths and work through their differences. Leo’s passion and enthusiasm can keep the relationship exciting, while Taurus’ stability and nurturing nature can provide a secure foundation.
                        </Text>
                    </View>

                    <View>
                        <Text style={[style.black, { fontWeight: 'bold' }]}>Sexual Compatibility:</Text>
                        <Text style={{ color: 'grey', fontSize: responsiveFontSize(1.4), marginVertical: responsiveHeight(1) }}>
                            Leo and Taurus have a high level of sexual compatibility, as they share a strong physical attraction and enjoy sensuality and pleasure. However, they may need to work on communication and intimacy to ensure a fulfilling sex life.
                        </Text>
                    </View>
                </View>
                <HoroSopeBar text={['Yesterday','Daily','Tomorrow','Weekly','Monthly','Year 2023']} />

                <View style={{ marginVertical: responsiveHeight(2), gap: responsiveHeight(4) }}>
                        <Text style={[style.black, { fontWeight: 'bold', textAlign: 'center' }]}>Leo Compatibility With Other Signs</Text>


                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            <HoroSing navigation={navigation} text={' & Sagittarius'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/784.webp'} image2={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/778.webp'} />
                            <HoroSing navigation={navigation} text={' & Sagittarius'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/784.webp'} image2={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/786.webp'} />
                            <HoroSing navigation={navigation} text={' & Sagittarius'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/784.webp'} image2={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/785.webp'} />
                            <HoroSing navigation={navigation} text={' & Sagittarius'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/784.webp'} image2={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/782.webp'} />


                        </View>
                    </View>

                    <View style={{marginVertical:responsiveHeight(1)}}>
    <AriesHoroscope image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/775.webp'} navigation={navigation} />
    <AriesHoroscope image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/785.webp'} navigation={navigation} />
    <AriesHoroscope image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/778.webp'} navigation={navigation} />

</View>

            </ScrollView>
        </>
    )
}