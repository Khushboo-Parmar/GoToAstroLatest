import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/FontAwesome';
import style from "../../../utils/css/comoncss/style";
import { useEffect, useState } from "react";
import { getData } from "../../../Apis/ListsApi/ListPostApi";
import ActiveEndigator from "../../../comon/Loader/ActiveEndicator";

export default function CallBackQue({ see }){
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchChatHistory = async () => {
            try {
                const response = await getData('astrologer/call_chat_history', { start: 5, length: 10 }, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUaGVfY2xhaW0iLCJhdWQiOiJUaGVfQXVkIiwiaWF0IjoxNzIwMjQyOTczLCJuYmYiOjE3MjAyNDI5ODMsImV4cCI6MTcyMDI0NjU3MywiZGF0YSI6eyJpZCI6IjIyIiwibmFtZSI6Ik5lZXJhaiIsImxuYW1lIjpudWxsLCJzbHVnIjoibmVlcmFqLWFzdHJvIiwibW9iaWxlIjoiNzc0ODAxODE4OCIsImltYWdlIjoiNTgzMSIsInNob3J0X2Rlc2NyaXB0aW9uIjoidGVzdCIsImRlc2NyaXB0aW9uIjoiPHA-dGVzdDxcL3A-IiwiZG9iIjoiIiwiaG91cl9iaXJ0aCI6bnVsbCwiYWRkcmVzcyI6InRlc3QiLCJnZW9sb2NhdGlvbiI6IjcyNTYiLCJsYXRpdHVkZSI6IjMyOCIsImxvbmdpdHVkZSI6IjE3IiwicGluY29kZSI6IjQ1NTAwMSIsImJhbmtfYWNjIjoiNzg3ODc4Nzg3OCIsInN0YXR1cyI6IjEiLCJpc19kZWxldGUiOiIwIiwiY3JlYXRlZF9hdF9ieSI6IjEiLCJ1cGRhdGVkX2F0X2J5IjoiMSIsImNyZWF0ZWRfYXQiOiIyMDIxLTA1LTAxIDE1OjI3OjU3IiwidXBkYXRlZF9hdCI6IjIwMjQtMDctMDEgMTk6MzE6MzQiLCJvdHBfY2hlY2siOiI5MDU1MDkiLCJpc19tb2JpbGVfdmVyaWZ5IjoiMCIsInBhc3N3b3JkIjpudWxsLCJycGFzc3dvcmQiOm51bGwsImVtYWlsIjoibWFsYWthci5uZWVyYWpAZ21haWwuY29tIiwiY2F0ZV9pZCI6IiIsImlzX2NoYXQiOiIwIiwiaXNfY2FsbCI6IjAiLCJwcmljZSI6IjE1Iiwic2FsZV9wcmljZSI6IjEiLCJkaXNfcGVyY2VudCI6IjkzIiwiaXNfYnVzeSI6IjAiLCJsYW5nX2lkIjoiMSIsInByaWNlX2N1cnJlbmN5IjoiMSIsInNhbGVfcHJpY2VfY3VycmVuY3kiOiIxIiwiaXNfaG90IjoiMCIsImlzX2NlcnRpZmllZCI6IjAiLCJiYW5rX25hbWUiOiJ0ZXN0IiwiYWNjX2hvbGRlcl9uYW1lIjoidGVzdCIsImFjY190eXBlIjoiMSIsImJhbmtfYWRkcmVzcyI6InRlc3QiLCJjYWxsX25hbWUiOiI5ODc2NTQxMjMwIiwiY2FsbF9ubyI6Ijk4NzY1NDEyMyIsImVucXVpcnlfaWQiOiIwIiwiZmluYWxfcHJpY2UiOiIxIiwiZmluYWxfY3VycmVuY3kiOiIxIiwib3JkZXJfYnkiOiI0IiwiY2hhdF9kYXRlX2F2YWlsYWJsZSI6IiIsImNhbGxfZGF0ZV9hdmFpbGFibGUiOiIxNzE5ODQxNjIwIiwiaXNfcXVldWUiOiIwIiwiYWdlbnRfaWQiOiIiLCJhZ2VudF9wYXNzIjoiIiwiY3VzdG9tZXJfaWQiOiJhc3Ryb2xvZ2VyXzIyIiwibXlfYWN0aXZpdHkiOiIxNzE5ODQyNDk0IiwiaW5mb3JtYXRpb24iOiIiLCJhcmVhX29mX2V4cGVydGlzZSI6IiIsImNvbW1pc3Npb24iOiI1MCIsImdzdGluIjoiIiwicHVibGlzaGVkX25hbWUiOiJOZWVyYWogQXN0cm8iLCJhY2NfaWZzYyI6IiIsImFzdHJvbG9nZXJfaWQiOiJHVDEwMTIyIiwicGFuX25vIjoiIiwiYWFkaGFyX25vIjoiIiwiaXNfYWN0aXZlIjoiMCIsImNoYXRfZGlzYWJsZWQiOiIwIiwiY2FsbF9kaXNhYmxlZCI6IjEiLCJyZXF1ZXN0Y2FsbGJhY2tfZGlzYWJsZWQiOiIxIiwicmVmZXJyYWxfaWQiOiJORUUxMjIiLCJsb2dpbl9pZCI6IjIyIiwiY291bnRyeV9jb2RlIjoiOTEiLCJhY2NlcHQiOiIxIiwiZ29vZ2xlX2lkIjoiMTE1NzkzMjEwMDY2MTgxNDk1MzE5IiwiZmFjZWJvb2tfaWQiOm51bGwsImFjY2VwdF9pcCI6IiIsImFjY2VwdF90aW1lIjoiMjAyMi0wOC0xOSAwMDowMDowMCIsImZhY2Vib29rIjoiIiwiaW5zdGFncmFtIjoiIiwibGlua2VkaW4iOiIiLCJ5b3V0dWJlIjoiIiwidHdpdHRlciI6IiIsImR1bW15X3JhdGluZyI6IjQuNiIsImV4b3RlbF9tb2JpbGUiOiI3NzQ4MDE4MTg4IiwiZXhvdGVsX2NvdW50cnlfY29kZSI6IjkxIiwiY2FsbF9mcmVlIjoiMSIsImNoYXRfZnJlZSI6IjEiLCJpbWFnZV9uYW1lIjoiMTY0NzUzNDI5OS53ZWJwIiwidXNlcl90eXBlIjoiYXN0cm9sb2dlciJ9fQ.tbSLxU4-Qp0Q7JvJBifnybr6kLJr8WOGSAnNRKhAYNQ');
                console.warn(response);
                setChatHistory(response?.data?.result || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchChatHistory();
    }, []);

    const renderItem = ({ item }) => (
        <View style={{ borderColor: '#ea871e', borderWidth: 1, borderRadius: 10, paddingHorizontal: responsiveWidth(5), paddingVertical: responsiveHeight(2), gap: responsiveHeight(2) }}>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ gap: responsiveHeight(1) }}>
                    <Text style={[style.comoncolor2, { fontWeight: '400' }]}>
                        Customer
                    </Text>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: responsiveFontSize(1.9) }}>
                        Ajay Sharma
                    </Text>
                </View>
                <View style={{ gap: responsiveHeight(1) }}>
                    <Text style={[style.comoncolor2, { fontWeight: '400', textAlign: 'right' }]}>
                        Date
                    </Text>
                    <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.5) }}>
                        18/12/2022
                    </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ gap: responsiveHeight(1) }}>
                    <Text style={[style.comoncolor2, { fontWeight: '400' }]}>
                        Call Query
                    </Text>
                    <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.5) }}>
                        Financial
                    </Text>
                </View>
                <View style={{ gap: responsiveHeight(1) }}>
                    <Text style={[style.comoncolor2, { fontWeight: '400', textAlign: 'right' }]}>
                        Time Slot
                    </Text>
                    <Text style={{ fontWeight: '500', color: 'black', fontSize: responsiveFontSize(1.5) }}>
                        04:00 PM - 08:00 PM
                    </Text>
                </View>
            </View>

            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#ea871e',
                        width: '50%',
                        alignItems: 'center',
                        paddingVertical: responsiveWidth(2),
                        borderRadius: 100,
                    }}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }}>Missed</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#ea871e',
                        width: responsiveHeight(3.5),
                        height: responsiveHeight(3.5),
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: responsiveWidth(1.8),
                        borderRadius: 100,
                    }}
                >
                    <Icon color='white' size={10} name="podcast" />
                </TouchableOpacity>


            </View>

        </View>
    )

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActiveEndigator />
            </View>
        );
    }
    return (
        <>
            <View style={{ borderBottomWidth: 3, paddingVertical: 10, borderBottomColor: '#ea871e', width: '45%' }}>
                <Text style={{ fontWeight: 'bold', color: 'black' }}>My Call Request</Text>
            </View>


            <FlatList
                data={chatHistory}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()} // Assuming id is a unique identifier
                contentContainerStyle={{ paddingHorizontal: responsiveWidth(4), paddingTop: responsiveHeight(2) }}
                ListEmptyComponent={<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: responsiveHeight(20) }}>
                    <Text style={[style.comoncolor2, { fontSize: responsiveFontSize(1.5), textAlign: 'center' }]}>No Call/Chat History available</Text>
                </View>}
            />
        </>
    )
}



