import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import style from "../../utils/css/comoncss/style";
import Icon from 'react-native-vector-icons/FontAwesome';
import Category from "./common/CAtegory";
import { PieChart } from "react-native-gifted-charts";
import { useState } from "react";
import DashComp from "./Pages/DashBoardComp";
import CallBackQue from "./Pages/CallBackQue";
import Wallet from "./Pages/Wallet";
import FeedBack from "./Pages/FeedBack";
import { useSelector } from "react-redux";
import { getData } from "../../Apis/ListsApi/ListPostApi";


export default function AstroDashBoard({ navigation }) {
    const [selected, setSelected] = useState('DashBoard')
    const see = useSelector((state) => state.user)


    const handleCategorySelect = (category) => {
        setSelected(category);
    };

    const fetchData = async (url, c) => {
        // console.warn(url)
        try {
            const response = await getData(url, { is_chat: `${c}`, next_time: '0000' }, see);
            console.warn(response)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <ImageBackground source={require('../../../assets/images/bg.png')} style={[style.bgwhite, {
                paddingVertical: responsiveWidth(5),
                height: '100%',
                paddingHorizontal: responsiveWidth(5)
            }]}>

                <ScrollView>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <TouchableOpacity >
                                <Image width={45} height={45} style={{ borderRadius: 10 }} source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/astrologer/1647534299.webp' }} />
                            </TouchableOpacity>
                            <View>
                                <Text style={[style.comoncolor2, { fontWeight: 'bold', fontSize: responsiveFontSize(2.4) }]}>Hey,</Text>
                                <Text style={[style.comoncolor2, { fontWeight: '600', fontSize: responsiveFontSize(2.2) }]}>Astro Neeraj</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                            <Icon color='#78411b' size={20} name="bars" />
                        </TouchableOpacity>
                    </View>


                    {/* <View style={{ marginVertical: responsiveHeight(2) }}>

                        <View style={{ flexDirection: 'row', gap: 10, marginVertical: responsiveHeight(1.3) }}>
                            <View style={{ width: '48%', borderWidth: 1, borderColor: '#ea871e', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: responsiveWidth(5), paddingVertical: responsiveHeight(2), alignItems: 'center' }}>
                                <Text style={[style.black, { fontSize: responsiveFontSize(1.8), fontWeight: 'bold' }]}>
                                    Chat
                                </Text>
                                <TouchableOpacity onPress={() => fetchData('astrologer/chat_status', 1)} style={{ borderColor: '#ea871e', borderWidth: 1, borderRadius: 100, height: responsiveHeight(4), width: responsiveHeight(4), alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon color='#ea871e' size={13} name="wechat" />
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: '48%', borderWidth: 1, borderColor: '#ea871e', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: responsiveWidth(5), paddingVertical: responsiveHeight(2), alignItems: 'center' }}>
                                <Text style={[style.black, { fontSize: responsiveFontSize(1.8), fontWeight: 'bold' }]}>
                                    Call
                                </Text>
                                <TouchableOpacity onPress={() => fetchData('astrologer/call_status', 1)} style={{ borderColor: '#ea871e', borderWidth: 1, borderRadius: 100, height: responsiveHeight(4), width: responsiveHeight(4), alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon color='#ea871e' size={13} name="phone" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ borderWidth: 1, borderColor: '#ea871e', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: responsiveWidth(5), paddingVertical: responsiveHeight(2), alignItems: 'center' }}>
                            <Text style={[style.black, { fontSize: responsiveFontSize(1.8), fontWeight: 'bold' }]}>
                                Queue
                            </Text>
                            <TouchableOpacity onPress={() => fetchData('astrologer/queue_status', 1)} style={{ borderColor: '#ea871e', borderWidth: 1, borderRadius: 100, height: responsiveHeight(4), width: responsiveHeight(4), alignItems: 'center', justifyContent: 'center' }}>
                                <Icon color='#ea871e' size={13} name="send" />
                            </TouchableOpacity>
                        </View>

                    </View> */}

                    <ScrollView style={{ flexDirection: 'row', marginVertical: responsiveHeight(2.5) }} horizontal>
                        <Category name={'DashBoard'} icon={'user-alt'} isSelected={selected === 'DashBoard'} onSelect={handleCategorySelect} />
                        <Category count={true} name={'Call/Chat'} icon={'fax'} isSelected={selected === 'Call/Chat'} onSelect={handleCategorySelect} />
                        <Category count={true} name={'Callback queue'} icon={'microphone'} isSelected={selected === 'Callback queue'} onSelect={handleCategorySelect} />
                        <Category name={'Wallet'} icon={'google-wallet'} isSelected={selected === 'Wallet'} onSelect={handleCategorySelect} />
                        <Category name={'Call/Chat History'} icon={'history'} isSelected={selected === 'Call/Chat History'} onSelect={handleCategorySelect} />
                        <Category name={'My Feedback'} icon={'quote-left'} isSelected={selected === 'My Feedback'} onSelect={handleCategorySelect} />
                        <Category name={'My Holiday'} icon={'calendar'} isSelected={selected === 'My Holiday'} onSelect={handleCategorySelect} />
                        <Category name={'Support Request'} icon={'headphones'} isSelected={selected === 'Support Request'} onSelect={handleCategorySelect} />
                        <Category name={'Settlement History'} icon={'cc-visa'} isSelected={selected === 'Settlement History'} onSelect={handleCategorySelect} />
                    </ScrollView>



                    {selected == 'DashBoard' ? <DashComp /> : selected == 'Wallet' ? <Wallet see={see[0]?.token} /> : selected == 'My Feedback' ? <FeedBack see={see[0]?.token} /> : <CallBackQue see={see[0]?.token} />}










                </ScrollView>

            </ImageBackground>
        </>
    )
}