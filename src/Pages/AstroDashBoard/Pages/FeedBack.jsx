import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from '../../../utils/css/comoncss/style';
import StarRating from 'react-native-star-rating-widget';
import { getData } from '../../../Apis/ListsApi/ListPostApi';

const FeedBack = ({ see }) => {
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getData('astrologer/feadback_list', { limit: 5, offset: 0, type: 'astrologer_chat' }, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUaGVfY2xhaW0iLCJhdWQiOiJUaGVfQXVkIiwiaWF0IjoxNzIwMjQyOTczLCJuYmYiOjE3MjAyNDI5ODMsImV4cCI6MTcyMDI0NjU3MywiZGF0YSI6eyJpZCI6IjIyIiwibmFtZSI6Ik5lZXJhaiIsImxuYW1lIjpudWxsLCJzbHVnIjoibmVlcmFqLWFzdHJvIiwibW9iaWxlIjoiNzc0ODAxODE4OCIsImltYWdlIjoiNTgzMSIsInNob3J0X2Rlc2NyaXB0aW9uIjoidGVzdCIsImRlc2NyaXB0aW9uIjoiPHA-dGVzdDxcL3A-IiwiZG9iIjoiIiwiaG91cl9iaXJ0aCI6bnVsbCwiYWRkcmVzcyI6InRlc3QiLCJnZW9sb2NhdGlvbiI6IjcyNTYiLCJsYXRpdHVkZSI6IjMyOCIsImxvbmdpdHVkZSI6IjE3IiwicGluY29kZSI6IjQ1NTAwMSIsImJhbmtfYWNjIjoiNzg3ODc4Nzg3OCIsInN0YXR1cyI6IjEiLCJpc19kZWxldGUiOiIwIiwiY3JlYXRlZF9hdF9ieSI6IjEiLCJ1cGRhdGVkX2F0X2J5IjoiMSIsImNyZWF0ZWRfYXQiOiIyMDIxLTA1LTAxIDE1OjI3OjU3IiwidXBkYXRlZF9hdCI6IjIwMjQtMDctMDEgMTk6MzE6MzQiLCJvdHBfY2hlY2siOiI5MDU1MDkiLCJpc19tb2JpbGVfdmVyaWZ5IjoiMCIsInBhc3N3b3JkIjpudWxsLCJycGFzc3dvcmQiOm51bGwsImVtYWlsIjoibWFsYWthci5uZWVyYWpAZ21haWwuY29tIiwiY2F0ZV9pZCI6IiIsImlzX2NoYXQiOiIwIiwiaXNfY2FsbCI6IjAiLCJwcmljZSI6IjE1Iiwic2FsZV9wcmljZSI6IjEiLCJkaXNfcGVyY2VudCI6IjkzIiwiaXNfYnVzeSI6IjAiLCJsYW5nX2lkIjoiMSIsInByaWNlX2N1cnJlbmN5IjoiMSIsInNhbGVfcHJpY2VfY3VycmVuY3kiOiIxIiwiaXNfaG90IjoiMCIsImlzX2NlcnRpZmllZCI6IjAiLCJiYW5rX25hbWUiOiJ0ZXN0IiwiYWNjX2hvbGRlcl9uYW1lIjoidGVzdCIsImFjY190eXBlIjoiMSIsImJhbmtfYWRkcmVzcyI6InRlc3QiLCJjYWxsX25hbWUiOiI5ODc2NTQxMjMwIiwiY2FsbF9ubyI6Ijk4NzY1NDEyMyIsImVucXVpcnlfaWQiOiIwIiwiZmluYWxfcHJpY2UiOiIxIiwiZmluYWxfY3VycmVuY3kiOiIxIiwib3JkZXJfYnkiOiI0IiwiY2hhdF9kYXRlX2F2YWlsYWJsZSI6IiIsImNhbGxfZGF0ZV9hdmFpbGFibGUiOiIxNzE5ODQxNjIwIiwiaXNfcXVldWUiOiIwIiwiYWdlbnRfaWQiOiIiLCJhZ2VudF9wYXNzIjoiIiwiY3VzdG9tZXJfaWQiOiJhc3Ryb2xvZ2VyXzIyIiwibXlfYWN0aXZpdHkiOiIxNzE5ODQyNDk0IiwiaW5mb3JtYXRpb24iOiIiLCJhcmVhX29mX2V4cGVydGlzZSI6IiIsImNvbW1pc3Npb24iOiI1MCIsImdzdGluIjoiIiwicHVibGlzaGVkX25hbWUiOiJOZWVyYWogQXN0cm8iLCJhY2NfaWZzYyI6IiIsImFzdHJvbG9nZXJfaWQiOiJHVDEwMTIyIiwicGFuX25vIjoiIiwiYWFkaGFyX25vIjoiIiwiaXNfYWN0aXZlIjoiMCIsImNoYXRfZGlzYWJsZWQiOiIwIiwiY2FsbF9kaXNhYmxlZCI6IjEiLCJyZXF1ZXN0Y2FsbGJhY2tfZGlzYWJsZWQiOiIxIiwicmVmZXJyYWxfaWQiOiJORUUxMjIiLCJsb2dpbl9pZCI6IjIyIiwiY291bnRyeV9jb2RlIjoiOTEiLCJhY2NlcHQiOiIxIiwiZ29vZ2xlX2lkIjoiMTE1NzkzMjEwMDY2MTgxNDk1MzE5IiwiZmFjZWJvb2tfaWQiOm51bGwsImFjY2VwdF9pcCI6IiIsImFjY2VwdF90aW1lIjoiMjAyMi0wOC0xOSAwMDowMDowMCIsImZhY2Vib29rIjoiIiwiaW5zdGFncmFtIjoiIiwibGlua2VkaW4iOiIiLCJ5b3V0dWJlIjoiIiwidHdpdHRlciI6IiIsImR1bW15X3JhdGluZyI6IjQuNiIsImV4b3RlbF9tb2JpbGUiOiI3NzQ4MDE4MTg4IiwiZXhvdGVsX2NvdW50cnlfY29kZSI6IjkxIiwiY2FsbF9mcmVlIjoiMSIsImNoYXRfZnJlZSI6IjEiLCJpbWFnZV9uYW1lIjoiMTY0NzUzNDI5OS53ZWJwIiwidXNlcl90eXBlIjoiYXN0cm9sb2dlciJ9fQ.tbSLxU4-Qp0Q7JvJBifnybr6kLJr8WOGSAnNRKhAYNQ');
                setFeedbackList(response?.data?.lists || []); // Ensure to handle empty response or null lists
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const renderItem = ({ item, index }) => (
        <View key={index} style={{
            marginBottom: responsiveHeight(2),
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#ea871e',
            borderRadius: 10,
            paddingVertical: responsiveHeight(3),
            paddingHorizontal: responsiveWidth(7),
            shadowColor: '#ea871e',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 5,
        }}>
            <View style={{ marginTop: responsiveHeight(1.5), marginBottom: responsiveHeight(1) }}>
                <Text style={[style.black, { fontSize: responsiveFontSize(1.8), fontWeight: '500' }]}>{item.fname}</Text>
                <StarRating
                    style={{ marginTop: responsiveHeight(0.5), marginBottom: responsiveHeight(0.5) }}
                    rating={item.rating}
                    starSize={13}
                />
            </View>
            <Text style={{ color: 'black', fontWeight: '400', fontSize: responsiveFontSize(1.4) }}>{item.feedback ? item.feedback : 'No Feedbacks'}</Text>
            <Text style={[style.black, { fontSize: responsiveFontSize(1.5) }]}>{new Date(item.date).toDateString()}</Text>
        </View>
    );

    const renderEmptyComponent = () => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: responsiveHeight(20) }}>
            <Text style={[style.comoncolor2, { fontSize: responsiveFontSize(1.5), textAlign: 'center' }]}>No feedbacks available</Text>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <View style={{ borderBottomWidth: 3, paddingVertical: 10, borderBottomColor: '#ea871e', width: '45%' }}>
                <Text style={{ fontWeight: 'bold', color: 'black' }}>My Feedback</Text>
            </View>
            <FlatList
                data={feedbackList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()} // Assuming id is a unique identifier
                contentContainerStyle={{ paddingHorizontal: responsiveWidth(4), paddingTop: responsiveHeight(2) }}
                ListEmptyComponent={renderEmptyComponent}
            />
        </View>
    );
};

export default FeedBack;
