import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from '../../../utils/css/comoncss/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActivityTab from './Activity';
import Favorites from '../../../Commponents/UserDashBoardComp/Favorites/Favorites';
import MyOrders from './common/Pages/MyOrders';
import MyCallChat from './common/Pages/MyCallChatHistory';
import { getData } from '../../../Apis/ListsApi/ListPostApi';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { remove } from '../../../store/Slice/UserData';

const UserDashboard = () => {
    const see = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const [activeTab, setActiveTab] = useState('My Favorites');

    const [data, setData] = useState([])
    const isFocused = useIsFocused(); // Hook to track focus state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const maincover = await getData('customer/customer_details', {}, see[0]?.token);
                if (maincover?.status === 401) { LogOut() }
                setData(maincover?.data?.user_info);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error cases here, such as displaying an error message to the user
            }
        };

        if (isFocused) {
            fetchData();
        }
    }, [isFocused]); // Dependency on isFocused to refetch data when component is focused

    const LogOut = async () => {
        await AsyncStorage.removeItem('persist:root');
        dispatch(remove());
        ToastAndroid.show('You have been logged out', ToastAndroid.SHORT);
        navigation.navigate('Login');
    }
    return (
        <>

            <ScrollView style={[style.bgwhite]}>
                <View style={{
                    backgroundColor: '#fff4dd', paddingVertical: responsiveWidth(5),
                    paddingHorizontal: responsiveWidth(5)
                }}>

                    <View>

                        <View style={{ alignItems: 'center' }}>
                            <Image style={{ borderRadius: 100 }} width={responsiveWidth(30)} height={responsiveHeight(15)} source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/astrologer/1651230408.webp' }} />
                            <View style={{ alignItems: 'center', gap: responsiveHeight(1), paddingBottom: responsiveHeight(2), justifyContent: 'space-between', width: '80%', marginTop: responsiveHeight(2), borderBottomWidth: 2, borderBottomColor: '#ea871e' }}>
                                <Text style={[style.black, { fontSize: responsiveFontSize(2.7), fontWeight: '400' }]}>Hello, <Text style={[style.black, { fontSize: responsiveFontSize(2.9), fontWeight: 'bold' }]}>{data?.fname}</Text></Text>
                                <View style={{ flexDirection: 'row', gap: responsiveWidth(4) }}>
                                    <Text style={[style.comoncolor2, { fontSize: responsiveFontSize(1.7), fontWeight: 'bold' }]}>{data?.email}</Text>

                                    <TouchableOpacity onPress={() => navigation.navigate('Profile', { data: data })}><Icon color='#ea871e' size={19} name="edit" /></TouchableOpacity>
                                </View>
                            </View>

                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginVertical: responsiveHeight(2) }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Adress')} style={[style.bgcomoncolor2, {
                            flexDirection: 'row',
                            width: '48%',
                            height: responsiveHeight(13),
                            justifyContent: 'space-between',
                            paddingHorizontal: responsiveWidth(8),
                            borderRadius: 14,
                            alignItems: 'center'
                        }]}>
                            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: responsiveHeight(5), fontSize: responsiveFontSize(1.8) }}>
                                Saved Addresses
                            </Text>
                            <View style={{ height: '100%', paddingVertical: responsiveHeight(2.5) }}>
                                <Icon color='white' size={19} name="home" />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Members')} style={[style.bgcomoncolor, {
                            flexDirection: 'row',
                            width: '48%',
                            height: responsiveHeight(13),
                            justifyContent: 'space-between',
                            paddingHorizontal: responsiveWidth(8),
                            borderRadius: 14,
                            alignItems: 'center'
                        }]}>
                            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: responsiveHeight(5), fontSize: responsiveFontSize(1.8) }}>
                                Members
                            </Text>
                            <View style={{ height: '100%', paddingVertical: responsiveHeight(2.5) }}>
                                <Icon color='white' size={19} name="users" />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Wallet', { see: see })} style={[style.bgcomoncolor, {
                            flexDirection: 'row',
                            width: '100%',
                            height: responsiveHeight(15),
                            justifyContent: 'space-between',
                            paddingHorizontal: responsiveWidth(10),
                            borderRadius: 14,
                            alignItems: 'center'
                        }]}>
                            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: responsiveHeight(3), fontSize: responsiveFontSize(2.4) }}>
                                My Wallet
                            </Text>
                            <View style={{ height: '100%', paddingVertical: responsiveHeight(4) }}>
                                <Icon color='white' size={25} name="inr" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={[style.bgwhite, {
                    paddingVertical: responsiveWidth(5),
                    height: '100%',
                    paddingHorizontal: responsiveWidth(5)
                }]}>


                    <View>



                    </View>






                    <View>
                        <View style={{ borderBottomWidth: 3, paddingVertical: responsiveHeight(1.3), borderBottomColor: '#ea871e', width: '35%' }}>
                            <Text style={{ fontWeight: 'bold', color: 'black' }}>My Activity</Text>
                        </View>


                        <View>

                            <ScrollView horizontal contentContainerStyle={{ marginVertical: responsiveHeight(3) }}>
                                <ActivityTab name={'My Favorites'} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <ActivityTab name={'My Orders'} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <ActivityTab name={'My Subscriptions'} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <ActivityTab name={'My Call/Chat History'} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <ActivityTab name={'My Call Request'} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <ActivityTab name={'My Magazine'} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <ActivityTab name={'My Reports'} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <ActivityTab name={'My Daily Horoscope'} activeTab={activeTab} setActiveTab={setActiveTab} />
                            </ScrollView>


                            <View>
                                <View style={{ borderStyle: 'dashed', borderBottomWidth: 1, paddingBottom: responsiveHeight(1.6), borderBottomColor: 'grey', width: '100%' }}>
                                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: responsiveFontSize(2) }}>{activeTab}</Text>
                                </View>

                                <View style={{ marginVertical: responsiveHeight(2) }}>
                                    {activeTab === 'My Favorites' ? <Favorites /> : activeTab == 'My Orders' ? <MyOrders /> : activeTab == 'My Call/Chat History' ? <MyCallChat /> :
                                        <View style={{ paddingVertical: responsiveHeight(10) }}>
                                            <Text style={[{ color: 'grey', textAlign: 'center', fontWeight: 'bold' }]}>No {activeTab} Found</Text>
                                        </View>
                                    }
                                </View>
                            </View>

                        </View>


                    </View>


                </ScrollView>
            </ScrollView>
        </>
    );
};


export default UserDashboard;
