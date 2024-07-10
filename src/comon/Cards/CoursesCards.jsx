import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from '../../utils/css/comoncss/style';


export default function CoursesCard({ course }) {
    const [activeTab, setActiveTab] = useState('Year 1');

    return (
        <>
            <TouchableOpacity
                style={{
                    backgroundColor: 'white',
                    borderRadius: 15,
                    shadowColor: '#ea871e',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 8,
                    elevation: 3,
                    padding: responsiveWidth(5),
                    marginBottom: responsiveHeight(2),
                    width: '100%',
                    borderWidth:1,gap:responsiveHeight(2)
                }}
            >
                <Image
                    style={{
                        width: '100%',
                        height: responsiveHeight(20),
                        borderRadius: 10,
                    }}
                    source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/course_1.webp' }}
                />
                <View style={{ paddingVertical: responsiveHeight(1),gap:responsiveHeight(2) }}>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(2),
                            fontWeight: 'bold',
                            color: '#333',
                        }}
                    >
                        Diploma in Astrological Sciences
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: responsiveHeight(1) }}>
                        <Text
                            style={[style.black, {
                                fontSize: responsiveFontSize(1.4),
                                fontWeight: 'thin', color: 'grey'
                            }]}
                        >
                            - Duration : 6 months
                        </Text>
                        <Text
                            style={{
                                fontSize: responsiveFontSize(1.4),
                                color: '#999',
                            }}
                        >
                            (CASc)
                        </Text>
                    </View>

                    <View style={{gap:responsiveHeight(1)}}>
                        <Text
                            style={[style.comoncolor2, {
                                fontSize: responsiveFontSize(2),
                                fontWeight: 'bold',
                            }]}
                        >
                            Course Content
                        </Text>

                        <View style={{gap:responsiveHeight(1),marginVertical:responsiveHeight(1)}}>
                            <Text style={[style.black,{fontSize:responsiveFontSize(1.4)}]}>Kundali Vigyan</Text>
                            <Text style={[style.black,{fontSize:responsiveFontSize(1.4)}]}>Introductory Predective Astrology</Text>
                            <Text style={[style.black,{fontSize:responsiveFontSize(1.4)}]}>Introductory Ashtakvarga</Text>
                            <Text style={[style.black,{fontSize:responsiveFontSize(1.4)}]}>Introductory Gochar Vigyan</Text>
                            <Text style={[style.black,{fontSize:responsiveFontSize(1.4)}]}>Introductory Muhurtashastra</Text>
                            <Text style={[style.black,{fontSize:responsiveFontSize(1.4)}]}>Introductory Remedial Astrology</Text>
                        </View>
                    </View>

                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={[style.bgcomoncolor, {
                            width: '100%',
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
                            Enroll Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
      style={{
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#ea871e',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        padding: responsiveWidth(5),
        marginBottom: responsiveHeight(2),
        width: '100%',
        borderWidth: 1,
        gap: responsiveHeight(2),
      }}
    >
      <Image
        style={{
          width: '100%',
          height: responsiveHeight(20),
          borderRadius: 10,
        }}
        source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/front-assets/images/course_1.webp' }}
      />
      <View style={{ paddingVertical: responsiveHeight(1), gap: responsiveHeight(2) }}>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          Diploma in Astrological Sciences
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: responsiveHeight(1) }}>
          <Text
            style={{
              fontSize: responsiveFontSize(1.4),
              fontWeight: 'thin',
              color: 'grey',
            }}
          >
            - Duration : 6 months
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(1.4),
              color: '#999',
            }}
          >
            (CASc)
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity
            onPress={() => setActiveTab('Year 1')}
            style={{
              borderBottomWidth: activeTab === 'Year 1' ? 2 : 0,
              borderBottomColor: activeTab === 'Year 1' ? '#1761e2' : 'transparent',
              paddingVertical: responsiveHeight(1),
            }}
          >
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontWeight: 'bold',
                color: activeTab === 'Year 1' ? '#1761e2' : '#333',
              }}
            >
              Year 1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab('Year 2')}
            style={{
              borderBottomWidth: activeTab === 'Year 2' ? 2 : 0,
              borderBottomColor: activeTab === 'Year 2' ? '#1761e2' : 'transparent',
              paddingVertical: responsiveHeight(1),
            }}
          >
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontWeight: 'bold',
                color: activeTab === 'Year 2' ? '#1761e2' : '#333',
              }}
            >
              Year 2
            </Text>
          </TouchableOpacity>
        </View>

        <View>
        <View style={{gap:responsiveHeight(1),marginVertical:responsiveHeight(1)}}>
                            <Text style={[style.black,{fontSize:responsiveFontSize(1.4)}]}>Kundali Vigyan</Text>
                            <Text style={[style.black,{fontSize:responsiveFontSize(1.4)}]}>Introductory Predective Astrology</Text>
                            <Text style={[style.black,{fontSize:responsiveFontSize(1.4)}]}>Introductory Ashtakvarga</Text>
                            <Text style={[style.black,{fontSize:responsiveFontSize(1.4)}]}>Introductory Gochar Vigyan</Text>
                            <Text style={[style.black,{fontSize:responsiveFontSize(1.4)}]}>Introductory Muhurtashastra</Text>
                            <Text style={[style.black,{fontSize:responsiveFontSize(1.4)}]}>Introductory Remedial Astrology</Text>
                        </View>
        </View>
        
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={[style.bgcomoncolor,{
            width: '100%',
            alignItems: 'center',
            paddingVertical: responsiveWidth(3),
            borderRadius: 8,
          }]}
        >
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: responsiveFontSize(1.6),
            }}
          >
            Enroll Now
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
        </>
    )
}