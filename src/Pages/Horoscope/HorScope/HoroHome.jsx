import { Image, ScrollView, Text, View } from "react-native";
import style from "../../../utils/css/comoncss/style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import HoroSopeBar from "../HoroscopeBar/HoroScopeBAr";
import AriesHoroscope from "../Card";
export default function HoroHome({navigation}){
    return(
        <>
        <View>
<Text style={[style.comoncolor2,{fontWeight:'bold',fontSize:responsiveFontSize(2.5),textAlign:'center'}]}>Horoscope</Text>
                    <Text style={{textAlign:'center', color:'grey',fontSize:responsiveFontSize(1.4),marginVertical:responsiveHeight(2)}}>
                    Horoscopes have been a part of natural culture for centuries, and their popularity continues to grow in the ultramodern period. It is an astrological cast that offers a glance into a person’s future grounded on their zodiac sign. Astrology is the study of the movement and positioning of celestial bodies and their impact on mortal lives. In this guide, we will explore everything you need to know about it, including its uses, benefits, types, and frequently asked questions. 
                    </Text>
</View>

<View>
<Text style={[style.black,{fontWeight:'bold'}]}>What’s a Horoscope?</Text>
                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.4),marginVertical:responsiveHeight(2)}}>
                    A horoscope is a prediction of events that might be in a person’s life predicated on their astrological sign. There are twelve astrological signs, and each sign represents a precise set of personality traits and characteristics. It is created by studying the alignment and movement of celestial bodies, such as the sun, moon, and planets, and how they influence human affairs. Based on this study, astrologers can predict how the celestial bodies will affect an individual’s daily life.
                    </Text>
</View>

<View>
<Text style={[style.black,{fontWeight:'bold'}]}>Uses of Horoscope</Text>
                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.4),marginVertical:responsiveHeight(2)}}>
                    Horoscopes can be exercised for a variety of purposes. One of the most common uses is to gain insight into personal relationships. By concluding the traits and characteristics of your astrological sign, you can gain a better understanding of how you interact with others and how to upgrade your connections. It can also be used to gain insight into career choices, monetary decisions, and other major life events. 
                    </Text>
</View>

<View>
<Text style={[style.comoncolor2,{fontWeight:'bold',textAlign:'center'}]}>Benefits of Horoscope</Text>
                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.4),marginVertical:responsiveHeight(2),textAlign:'center'}}>
                    The benefits of horoscopes are subjective and vary from person to person. While some individuals find value in reading and believe they give insights into their personality traits, connections, or future episodes, others may view them as distractions or banish them entirely. 
                    </Text>
</View>

<View>
<Text style={[style.comoncolor2,{fontWeight:'bold',fontSize:responsiveFontSize(2),textAlign:'center'}]}>Here are some potential advantages that people associate with horoscopes </Text>
                    <Text style={{textAlign:'center', color:'grey',fontSize:responsiveFontSize(1.4),marginBottom:responsiveHeight(1),marginTop:responsiveHeight(2)}}>
                    <Text style={{fontWeight:'bold',color:'black'}}>Self-reflection and self-mindfulness:</Text> Horoscopes can encourage individuals to reflect on their thoughts, feelings, and conducts. By reading about their zodiac sign’s characteristics and tendencies, some people find that offer a framework for self-analysis and personal growth. 
                    </Text>

                    <Text style={{textAlign:'center', color:'grey',fontSize:responsiveFontSize(1.4),marginVertical:responsiveHeight(1)}}>
                    <Text style={{fontWeight:'bold',color:'black'}}>Guidance and decision-making:</Text> It sometimes gives general advice or predictions for the day, week, month, or year choices. 
                    </Text>

                    <Text style={{textAlign:'center', color:'grey',fontSize:responsiveFontSize(1.4),marginVertical:responsiveHeight(1)}}>
                    <Text style={{fontWeight:'bold',color:'black'}}>Validation and affirmation: </Text> It can provide a sense of validation and affirmation. When individuals read something that resonates with their current gests or emotions, it can offer reassurance that they aren’t alone in their struggles or joys. 
                    </Text>

                    <Text style={{textAlign:'center', color:'grey',fontSize:responsiveFontSize(1.4),marginVertical:responsiveHeight(1)}}>
                    <Text style={{fontWeight:'bold',color:'black'}}>Entertainment and curiosity: </Text> For many people, horoscopes are purely a form of distraction. They enjoy reading about astrological signs, compatibility, and general predictions without taking them too seriously. It can be an amusing way to pass the time and spark curiosity about the mysteries of the universe. 
                    </Text>
</View>

<View style={{marginTop:responsiveHeight(2)}}>
<Text style={[style.comoncolor2,{fontWeight:'bold',textAlign:'center'}]}>How Can Horoscopes Help You? </Text>
                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.4),marginVertical:responsiveHeight(2),textAlign:'center'}}>
                    Horoscopes can help individuals in a number of ways. For illustration, if you’re floundering with a decision, it may offer guidance and sapience that can help you make the right choice. It can also help you prepare for challenges and openings that may arise in the future, giving you a better chance of success. Also, it can help you ameliorate your connections and gain a better understanding of those around you.
                    </Text>
</View>

<HoroSopeBar text={['Yesterday','Daily','Tomorrow','Weekly','Monthly','Year 2023']} />


<View style={{marginVertical:responsiveHeight(2)}}>
    <AriesHoroscope image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/775.webp'} navigation={navigation} />
    <AriesHoroscope image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/785.webp'} navigation={navigation} />
    <AriesHoroscope image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/778.webp'} navigation={navigation} />

</View>
        </>
    )
}