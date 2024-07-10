import Header from "../../../comon/HeaderFooter/Header";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import style from "../../../utils/css/comoncss/style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import CoursesCard from "../../../comon/Cards/CoursesCards";
export default function CoursesPage(){
    return(
        <>
        <Header top={'Courses'} />

        <ScrollView style={[style.bgwhite, {
                paddingVertical: responsiveWidth(5),
                height: '100%',
                paddingHorizontal: responsiveWidth(5)
            }]}>

                <View>
                    <Text style={[style.black,{fontWeight:'bold'}]}>LEARN ASTROLOGY AND GET CERTIFIED</Text>
                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.4),marginVertical:responsiveHeight(2)}}>
                    The Institute of Indian Astrology and Vedic Sciences (IIVSc) भारतीय ज्‍योतिष एवं वैदिक विज्ञान संस्‍थान is an institute run by Jyotish Sagar Pvt Ltd. Jyotish Sagar has created its niche in the astrology world and has become a popular brand name. Since March 1997, Jyotish Sagar is engaged in publishing one of leading astrological magazines ‘Jyotish Sagar’. We conduct workshops, seminars and research associated with astrology and we also publish periodicals and books and manufacture wide range of Astro-Vastu products.
                    </Text>
                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.4)}}>
                    With this experience it’s our endeavor to spread the learnings and teachings of Astrological science.
                    </Text>
                </View>

                <View style={{marginVertical:responsiveHeight(5)}}>
                    <CoursesCard />
                </View>


                <View style={{marginBottom:responsiveHeight(3)}} >
  
  <View style={{gap:responsiveHeight(1)}}>
  <Text style={[style.black,{fontWeight:'bold'}]}>SALIENT FEATURES :</Text>
                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.4)}}>
                    Along with complete study material.
                        </Text>

                        <Text style={{color:'grey',fontSize:responsiveFontSize(1.4)}}>
                        Study material shall be in Printed Books prepared by the institute
                        </Text>

                        <Text style={{color:'grey',fontSize:responsiveFontSize(1.4)}}>
                        24 hours help line regarding the study material.
                        </Text>
                        <Text style={{color:'grey',fontSize:responsiveFontSize(1.4)}}>
                        Classical & Modern Astrology both are included.
                        </Text>
  </View>

                        <View style={{flexDirection:'row',gap:10,marginVertical:responsiveHeight(2.5)}}>
                        <TouchableOpacity
                        style={[ {
                            width: '45%',
                            alignItems: 'center',
                            paddingVertical: responsiveWidth(3),
                            borderRadius: 8,
                            borderColor:'#1761e2',
                            borderWidth:1
                        }]}
                    >
                        <Text
                            style={[style.comoncolor,{
                                fontWeight: 'bold',
                                fontSize: responsiveFontSize(1.6),
                            }]}
                        >
                           FEE STRUCTURE
                        </Text>
                    </TouchableOpacity>
                        <TouchableOpacity
                        style={[style.bgcomoncolor, {
                            width: '49%',
                            alignItems: 'center',
                            paddingVertical: responsiveWidth(3),
                            borderRadius: 8
                        }]}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: responsiveFontSize(1.6),
                            }}
                        >
                           DOWNLOAD BROCHURE
                        </Text>
                    </TouchableOpacity>
                        </View>
           </View>
 

                </ScrollView>
        </>
    )
}