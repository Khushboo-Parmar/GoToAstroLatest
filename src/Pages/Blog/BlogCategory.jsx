import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from '../../utils/css/comoncss/style';
import { useNavigation } from '@react-navigation/native';
import BlogBox from './BlogBox';
import { getData } from '../../Apis/ListsApi/ListPostApi';

export default function BlogCategory({ text, image }) {
    const navigation = useNavigation()

    const [dataa, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData('blogs/blogs_list', {});
                setData(data?.data)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    return (
        <ScrollView style={{ paddingVertical: responsiveHeight(1) }}>
            <View
                style={{
                    marginBottom: responsiveHeight(3),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <View style={{ borderBottomWidth: 3, paddingVertical: 10, borderBottomColor: '#ea871e' }}>
                    <Text style={{ fontWeight: 'bold', color: 'black' }}>{text}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={[style.comoncolor2, { fontWeight: 'bold' }]}>See All</Text>
                </TouchableOpacity>
            </View>

           {dataa?.slice(0, 2)?.map((i) => (
                <BlogBox  navigation={navigation} item={i} />
            ))} 
            <View style={{ opacity: 0.3, borderBottomWidth: 1, marginTop: 20, borderBottomColor: '#ea871e', width: '100%' }}></View>
        </ScrollView>
    );
}
