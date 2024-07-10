import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import style from "../../../utils/css/comoncss/style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Header from "../../../comon/HeaderFooter/Header";
import Addas from "../../../comon/Ads/Ads";
import HoroCard from "../HoroscopeDetail/HorcopeCard";
import HoroSing from "../HoroscopeDetail/HorcopeSingsCrad";
import { CountryPicker } from "react-native-country-codes-picker";
import { useState } from "react";
import ActivityTab from "../../DashBoard/UserDashBoard/Activity";

export default function Aries({ navigation }) {
  const [show, setShow] = useState(false)
  const [no, setNo] = useState('+91')
  const [activeTab, setActiveTab] = useState('General');


  return (
    <>
      <Header top={'Aries'} />
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



        <View style={{ justifyContent: 'center', alignItems: 'center', gap: responsiveHeight(2), marginVertical: responsiveHeight(3) }}>
          <Image style={{ width: responsiveWidth(28), height: responsiveHeight(15) }} source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/780.webp' }} />
          <Text style={[style.comoncolor2, {
            fontWeight: 'bold',
            fontSize: responsiveFontSize(3),
            textAlign: 'center'
          }]}>2023</Text>
        </View>

        <ScrollView horizontal contentContainerStyle={{ marginBottom: responsiveHeight(1) }}>
          <ActivityTab isNew={true} name={'General'} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ActivityTab name={'Health'} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ActivityTab name={"Family Happiness"} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ActivityTab name={"Economic Happiness"} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ActivityTab name={'Job and Career'} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ActivityTab name={'Trade and Business'} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ActivityTab isNew={true} name={'Remedial Remedy'} activeTab={activeTab} setActiveTab={setActiveTab} />
        </ScrollView>

        <View>
          <Text style={[style.black, { fontWeight: 'bold' }]}>{activeTab}</Text>
          <Text style={{ color: 'grey', fontSize: responsiveFontSize(1.4), marginVertical: responsiveHeight(2) }}>
            This transit of Saturn will prove to be a relief for the people of Aries. In the past transit period, the obstacles that were arising in career etc. and the situations of homelessness etc. that had arisen, will improve to some extent. At the same time, the support of luck will start coming, due to which the expected success will be achieved in the works and the economic condition will also improve.
          </Text>
        </View>

        <View style={[style.bgcomoncolor2, {
          marginVertical: responsiveHeight(2), paddingVertical: responsiveHeight(2), shadowColor: '#ea871e',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 5, borderRadius: 10
        }]}>

          <View style={[style.white, { paddingHorizontal: responsiveHeight(2), gap: responsiveHeight(1) }]}>
            <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(1.9) }]}>
              Transform Your Life with Expert Guidance:
            </Text>
            <Text style={[style.white, { fontWeight: '400', fontSize: responsiveFontSize(1.5) }]}>
              <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(1.5) }]}>Sign Up</Text> for <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(1.5) }]}>Free</Text>  and have a <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(1.5) }]}>Personal Astrology Consultation</Text>  Today with India's Top Astrologers</Text>
          </View>


          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: responsiveHeight(2), paddingHorizontal: responsiveWidth(5) }}>
              <TouchableOpacity onPress={() => setShow(!show)}>
                <TextInput
                  style={[{
                    width: responsiveWidth(15), height: responsiveHeight(6.5),
                    borderColor: '#ccc',
                    borderWidth: 1,
                    borderRadius: 5,
                    //  paddingLeft: responsiveHeight(3),
                    marginBottom: responsiveHeight(0), backgroundColor: 'white', textAlign: 'center'
                  }]}
                  placeholder={`${no}`}
                  editable={false}
                  placeholderTextColor={'grey'}
                />
              </TouchableOpacity>

              <TextInput
                style={[{
                  width: '80%', height: responsiveHeight(6.5),
                  borderColor: '#ccc',
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingLeft: responsiveHeight(2),
                  marginBottom: responsiveHeight(0), backgroundColor: 'white'
                }]}
                placeholderTextColor={'grey'}
                placeholder="Enter Your Mobile Number"
              />
            </View>

            {show ?
              <View >
                <CountryPicker
                  show={show}
                  searchMessage="Search"
                  onClose={() => setShow(false)}
                  pickerButtonOnPress={(item) => {
                    setNo(item?.dial_code);
                    setShow(false);
                  }}
                />
              </View> : ''
            }
          </View>

          <View style={{ width: '100%', paddingHorizontal: responsiveWidth(5) }}>
            <TouchableOpacity
              style={[style.bgcomoncolor, {
                width: '100%',
                borderRadius: 10,
                paddingHorizontal: responsiveWidth(2),
                paddingVertical: responsiveHeight(2),
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: responsiveWidth(4),
              }]}
            >
              <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: responsiveFontSize(1.7) }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={[style.white, { marginTop: responsiveHeight(1), fontWeight: '400', fontSize: responsiveFontSize(1.3), paddingHorizontal: responsiveWidth(5) }]}>By proceeding, I Agree to <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }]}>Terms and conditions</Text>  & <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }]}>Privacy Policy</Text></Text>
        </View>

        <View style={{ marginVertical: responsiveHeight(2), gap: responsiveHeight(4) }}>
          <Text style={[style.black, { fontWeight: 'bold', textAlign: 'center' }]}>Aries Compatibility With Other Signs</Text>


          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <HoroSing navigation={navigation} text={' & Sagittarius'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/784.webp'} image2={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/778.webp'} />
            <HoroSing navigation={navigation} text={' & Sagittarius'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/784.webp'} image2={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/786.webp'} />
            <HoroSing navigation={navigation} text={' & Sagittarius'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/784.webp'} image2={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/785.webp'} />
            <HoroSing navigation={navigation} text={' & Sagittarius'} image={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/784.webp'} image2={'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/horoscope_sign/782.webp'} />
          </View>
        </View>

      </ScrollView>
    </>
  )
}