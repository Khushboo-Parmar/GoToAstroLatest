import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import Header from '../../comon/HeaderFooter/Header';
import Addas from '../../comon/Ads/Ads';
import AriesHoroscope from './Card';
import style from '../../utils/css/comoncss/style';
import HoroHome from './HorScope/HoroHome';
import ActivityTab from '../DashBoard/UserDashBoard/Activity';
import HoroDaily from './HorScope/HoroDaily';
import Saturn from './HorScope/Saturn';
import Footer from '../../comon/HeaderFooter/Footer';

export default function Horoscope({ navigation }) {
    const [activeTab, setActiveTab] = useState('Horoscope Home');
    return (
        <>
                  <Header top={'Horoscope'} />
            <ScrollView style={[style.bgwhite, {
            paddingVertical: responsiveWidth(5),
            height: '100%',
            paddingHorizontal: responsiveWidth(5)
        }]}>
            <Addas />
            <ScrollView horizontal contentContainerStyle={{ marginBottom: responsiveHeight(1) }}>
                                <ActivityTab  name={'Horoscope Home'} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <ActivityTab name={'Daily Horoscope'} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <ActivityTab name={"Tomorrow's Horoscope"} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <ActivityTab name={"Yesterday's Horoscope"} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <ActivityTab name={'Weekly Horoscope'} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <ActivityTab name={'Monthly Horoscope'} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <ActivityTab isNew={true} name={'Horoscope 2023'} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <ActivityTab isNew={true} name={'Saturn in Aquarius 2023 '} activeTab={activeTab} setActiveTab={setActiveTab} />
                            </ScrollView>

{activeTab === 'Horoscope Home' ? <HoroHome navigation={navigation} />:activeTab == 'Daily Horoscope' ? <HoroDaily name={'Daily'} navigation={navigation} /> 
:activeTab === "Tomorrow's Horoscope" ? <HoroDaily name={"Tomorrow's"} navigation={navigation} /> : 
activeTab === "Yesterday's Horoscope" ? <HoroDaily name={"Yesterday's"} navigation={navigation} /> :
activeTab === "Weekly Horoscope" ? <HoroDaily name={"Weekly"} navigation={navigation} /> :
activeTab === "Monthly Horoscope" ? <HoroDaily name={"Monthly"} navigation={navigation} /> :
activeTab === "Horoscope 2023" ? <HoroDaily name={"YEARLY"} navigation={navigation} /> :<Saturn navigation={navigation} />
}







            </ScrollView>
            <View style={{position:'absolute',bottom:responsiveHeight(2)}}>
        <Footer home={true} />
        </View>
        </>
    );
}



