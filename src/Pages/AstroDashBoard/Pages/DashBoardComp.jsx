import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import style from "../../../utils/css/comoncss/style";
import Icon from 'react-native-vector-icons/FontAwesome';
import { PieChart } from "react-native-gifted-charts";
import Time from "../common/time";
import { getApi } from "../../../Apis/ListsApi/ListGetApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Clipboard from "@react-native-clipboard/clipboard";
export default function DashComp() {
    const see = useSelector((state) => state.user)
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUaGVfY2xhaW0iLCJhdWQiOiJUaGVfQXVkIiwiaWF0IjoxNzIwMjQyOTczLCJuYmYiOjE3MjAyNDI5ODMsImV4cCI6MTcyMDI0NjU3MywiZGF0YSI6eyJpZCI6IjIyIiwibmFtZSI6Ik5lZXJhaiIsImxuYW1lIjpudWxsLCJzbHVnIjoibmVlcmFqLWFzdHJvIiwibW9iaWxlIjoiNzc0ODAxODE4OCIsImltYWdlIjoiNTgzMSIsInNob3J0X2Rlc2NyaXB0aW9uIjoidGVzdCIsImRlc2NyaXB0aW9uIjoiPHA-dGVzdDxcL3A-IiwiZG9iIjoiIiwiaG91cl9iaXJ0aCI6bnVsbCwiYWRkcmVzcyI6InRlc3QiLCJnZW9sb2NhdGlvbiI6IjcyNTYiLCJsYXRpdHVkZSI6IjMyOCIsImxvbmdpdHVkZSI6IjE3IiwicGluY29kZSI6IjQ1NTAwMSIsImJhbmtfYWNjIjoiNzg3ODc4Nzg3OCIsInN0YXR1cyI6IjEiLCJpc19kZWxldGUiOiIwIiwiY3JlYXRlZF9hdF9ieSI6IjEiLCJ1cGRhdGVkX2F0X2J5IjoiMSIsImNyZWF0ZWRfYXQiOiIyMDIxLTA1LTAxIDE1OjI3OjU3IiwidXBkYXRlZF9hdCI6IjIwMjQtMDctMDEgMTk6MzE6MzQiLCJvdHBfY2hlY2siOiI5MDU1MDkiLCJpc19tb2JpbGVfdmVyaWZ5IjoiMCIsInBhc3N3b3JkIjpudWxsLCJycGFzc3dvcmQiOm51bGwsImVtYWlsIjoibWFsYWthci5uZWVyYWpAZ21haWwuY29tIiwiY2F0ZV9pZCI6IiIsImlzX2NoYXQiOiIwIiwiaXNfY2FsbCI6IjAiLCJwcmljZSI6IjE1Iiwic2FsZV9wcmljZSI6IjEiLCJkaXNfcGVyY2VudCI6IjkzIiwiaXNfYnVzeSI6IjAiLCJsYW5nX2lkIjoiMSIsInByaWNlX2N1cnJlbmN5IjoiMSIsInNhbGVfcHJpY2VfY3VycmVuY3kiOiIxIiwiaXNfaG90IjoiMCIsImlzX2NlcnRpZmllZCI6IjAiLCJiYW5rX25hbWUiOiJ0ZXN0IiwiYWNjX2hvbGRlcl9uYW1lIjoidGVzdCIsImFjY190eXBlIjoiMSIsImJhbmtfYWRkcmVzcyI6InRlc3QiLCJjYWxsX25hbWUiOiI5ODc2NTQxMjMwIiwiY2FsbF9ubyI6Ijk4NzY1NDEyMyIsImVucXVpcnlfaWQiOiIwIiwiZmluYWxfcHJpY2UiOiIxIiwiZmluYWxfY3VycmVuY3kiOiIxIiwib3JkZXJfYnkiOiI0IiwiY2hhdF9kYXRlX2F2YWlsYWJsZSI6IiIsImNhbGxfZGF0ZV9hdmFpbGFibGUiOiIxNzE5ODQxNjIwIiwiaXNfcXVldWUiOiIwIiwiYWdlbnRfaWQiOiIiLCJhZ2VudF9wYXNzIjoiIiwiY3VzdG9tZXJfaWQiOiJhc3Ryb2xvZ2VyXzIyIiwibXlfYWN0aXZpdHkiOiIxNzE5ODQyNDk0IiwiaW5mb3JtYXRpb24iOiIiLCJhcmVhX29mX2V4cGVydGlzZSI6IiIsImNvbW1pc3Npb24iOiI1MCIsImdzdGluIjoiIiwicHVibGlzaGVkX25hbWUiOiJOZWVyYWogQXN0cm8iLCJhY2NfaWZzYyI6IiIsImFzdHJvbG9nZXJfaWQiOiJHVDEwMTIyIiwicGFuX25vIjoiIiwiYWFkaGFyX25vIjoiIiwiaXNfYWN0aXZlIjoiMCIsImNoYXRfZGlzYWJsZWQiOiIwIiwiY2FsbF9kaXNhYmxlZCI6IjEiLCJyZXF1ZXN0Y2FsbGJhY2tfZGlzYWJsZWQiOiIxIiwicmVmZXJyYWxfaWQiOiJORUUxMjIiLCJsb2dpbl9pZCI6IjIyIiwiY291bnRyeV9jb2RlIjoiOTEiLCJhY2NlcHQiOiIxIiwiZ29vZ2xlX2lkIjoiMTE1NzkzMjEwMDY2MTgxNDk1MzE5IiwiZmFjZWJvb2tfaWQiOm51bGwsImFjY2VwdF9pcCI6IiIsImFjY2VwdF90aW1lIjoiMjAyMi0wOC0xOSAwMDowMDowMCIsImZhY2Vib29rIjoiIiwiaW5zdGFncmFtIjoiIiwibGlua2VkaW4iOiIiLCJ5b3V0dWJlIjoiIiwidHdpdHRlciI6IiIsImR1bW15X3JhdGluZyI6IjQuNiIsImV4b3RlbF9tb2JpbGUiOiI3NzQ4MDE4MTg4IiwiZXhvdGVsX2NvdW50cnlfY29kZSI6IjkxIiwiY2FsbF9mcmVlIjoiMSIsImNoYXRfZnJlZSI6IjEiLCJpbWFnZV9uYW1lIjoiMTY0NzUzNDI5OS53ZWJwIiwidXNlcl90eXBlIjoiYXN0cm9sb2dlciJ9fQ.tbSLxU4-Qp0Q7JvJBifnybr6kLJr8WOGSAnNRKhAYNQ'
    const [wallet,setWallet] = useState()
    const checkWallet = async () =>{
        const maincover = await getApi('customer/wallet/balance', see[0]?.token )
        setWallet(maincover?.data)

    }

    const pieData = [
        {
            value: wallet?.total_credit_funds ? wallet?.total_credit_funds : 150,
            color: '#ea871e',
            //   gradientCenterColor: '#1761e2',
            focused: true,
        },
        { value:  wallet?.wallet_amount ? wallet?.wallet_amount : 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE' },
        { value: wallet?.total_withdraw_funds ? wallet?.total_withdraw_funds :16, color: '#BDB2FA', gradientCenterColor: '#8F80F3' },
    ];
    const [data, setData] = useState([])


    const fetchData = async () => {
        const maincover = await getApi('astrologer/schedule_call_back', see[0]?.token)
        setData(maincover?.data?.timeSlot)
    }

    useEffect(() => {
        checkWallet()
        fetchData();
    }, [])
    return (
        <>
            <View style={{ marginTop: responsiveHeight(2), paddingHorizontal: responsiveWidth(7), gap: responsiveHeight(1.5) }} >

                <View style={{ alignItems: 'center', gap: responsiveHeight(1.9) }}>
                    <PieChart
                        data={pieData}
                        donut
                        showGradient
                        sectionAutoFocus
                        radius={90}
                        innerRadius={60}
                        innerCircleColor={'#232B5D'}
                        centerLabelComponent={() => {
                            return (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text
                                        style={{ fontSize: responsiveFontSize(2), color: 'white', fontWeight: 'bold' }}>
                                        <Icon color='white' size={15} name="inr" /> {wallet?.total_credit_funds ? wallet?.total_credit_funds : '0.00'}
                                    </Text>
                                    <Text style={{ fontSize: 14, color: 'white' }}>{wallet?.total_credit_funds ? 'Excellent' :'Low Funds'}</Text>
                                </View>
                            );
                        }}
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View
                            style={{
                                height: 10,
                                width: 10,
                                borderRadius: 5,
                                backgroundColor: '#ea871e',
                                marginRight: 10,
                            }}
                        />

                        <Text style={[style.comoncolor2, { fontSize: responsiveFontSize(1.6) }]}>Personal Wallet : <Icon color='#ea871e' size={12} name="inr" /> 1235.00</Text>
                    </View>
                </View>

                <View style={{ gap: responsiveHeight(1) }} >

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={[style.comoncolor, { fontSize: responsiveFontSize(1.7), marginTop: 10 }]}>Personal Wallet</Text>
                            <Text style={[style.comoncolor2, { fontSize: responsiveFontSize(2), marginTop: 10, fontWeight: 'bold' }]}><Icon color='#ea871e' size={15} name="inr" /> 1235.00</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[style.comoncolor, { fontSize: responsiveFontSize(1.7), marginTop: 10 }]}>Income</Text>
                            <Text style={[style.comoncolor2, { fontSize: responsiveFontSize(2), marginTop: 10, fontWeight: 'bold' }]}><Icon color='#ea871e' size={15} name="inr" /> 306.79</Text>
                        </View>
                    </View>

                    <View style={{ borderWidth: 0.6, borderStyle: 'dashed', borderColor: 'grey' }} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={[style.comoncolor, { fontSize: responsiveFontSize(1.7), marginTop: 10 }]}>Commissions</Text>
                            <Text style={[style.comoncolor2, { fontSize: responsiveFontSize(2), marginTop: 10, fontWeight: 'bold' }]}><Icon color='#ea871e' size={15} name="inr" /> 0.00</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[style.comoncolor, { fontSize: responsiveFontSize(1.7), marginTop: 10 }]}>Net Amount</Text>
                            <Text style={[style.comoncolor2, { fontSize: responsiveFontSize(2), marginTop: 10, fontWeight: 'bold' }]}><Icon color='#ea871e' size={15} name="inr" /> 156.79</Text>
                        </View>
                    </View>

                    <View style={{ borderWidth: 0.6, borderStyle: 'dashed', borderColor: 'grey' }} />

                    <View style={{ alignItems: 'center', marginTop: responsiveHeight(1) }}>
                        <Text style={[style.comoncolor, { fontSize: responsiveFontSize(1.7), marginTop: 10, fontWeight: 'bold' }]}>Total PaidTill Date</Text>
                        <Text style={[style.comoncolor2, { fontSize: responsiveFontSize(2.6), marginTop: 10, fontWeight: 'bold' }]}><Icon color='#ea871e' size={16} name="inr" /> {wallet?.total_credit_funds ? total_credit_funds+total_withdraw_funds+wallet_amount : '0.00'}</Text>
                    </View>


                </View>

            </View>


            <View>
                <View style={[style.bgcomoncolor2, {
                    borderRadius: 15,
                    padding: responsiveWidth(4),
                    marginVertical: responsiveHeight(3),
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    elevation: 5,
                    height: responsiveHeight(25),
                    justifyContent: 'center'
                }]}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(1.9), marginBottom: responsiveHeight(0.5), fontWeight: 'bold' }}>Display Name</Text>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(2.6), fontWeight: 'bold' }}>Neeraj Astro</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(1.4), marginTop: 5 }}>Ongoing Promotion</Text>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(1.6), marginTop: 5, fontWeight: 'bold' }}>NO</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={{ color: 'white', fontSize: responsiveFontSize(1.4), marginTop: 10 }}>GotoAstro ID</Text>
                        <Text style={{ color: 'white', fontSize: responsiveFontSize(1.6), marginTop: 5, fontWeight: 'bold' }}>GT10122</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: responsiveHeight(2), justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(1.4), marginTop: 5 }}>Referral Code</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(2) }}>
                                <Text onPress={() => Clipboard.setString('NEE122')}
                                    style={{
                                        color: 'white', fontSize: responsiveFontSize(1.6),
                                        marginTop: 5, fontWeight: 'bold'
                                    }}>NEE122</Text>
                                <Text onPress={() => Clipboard.setString('NEE122')} style={{ fontWeight: '300', fontSize: responsiveFontSize(1.3), color: 'white' }}>copy</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(1.4), marginTop: 5 }}>Current Rate</Text>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(1.6), marginTop: 5, fontWeight: 'bold' }}><Icon color='white' size={12} name="inr" /> 1</Text>
                        </View>
                    </View>
                </View>
            </View>


            <View style={{ marginVertical: responsiveHeight(1), borderWidth: 0.6, borderStyle: 'dashed', borderColor: 'grey' }} />

            <View>
                <View style={{ borderBottomWidth: 3, paddingVertical: 10, borderBottomColor: '#ea871e', width: '85%' }}>
                    <Text style={{ fontWeight: 'bold', color: 'black' }}>Your Availability for Today and Tomorrow</Text>
                </View>


                <View style={{ width: '100%' }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <Time fetchData2={fetchData} item={item} see={see[0]?.token} />}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginVertical: responsiveHeight(3),
                            justifyContent: 'space-between',
                        }}
                    />
                </View>

            </View>

        </>
    )
}