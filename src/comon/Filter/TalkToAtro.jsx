import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AstroCard from '../Cards/AstroCards'; // Adjust the import path as needed
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { getData } from '../../Apis/ListsApi/ListPostApi';
import ActiveEndigator from '../Loader/ActiveEndicator';
import style from '../../utils/css/comoncss/style';

export default function TalkToAstro({ navigation, price, name }) {
    const [dataa, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await getData('astrologer/astrologer_list', {
                limit: 9,
                offset: 0,
                'min-price': price[0],
                'max-price': price[1],
                query: name
            });
            console.warn(data)
            setData(data?.data?.astrologer || []);
            setLoading(false);
        };
        fetchData();
    }, [price, name]);

    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
            {loading ? (
                <ActiveEndigator />
            ) : dataa.length >= 1 ? (
                dataa.map((item, index) => (
                    <View key={index} style={{ width: '50%' }}>
                        <AstroCard navigation={navigation} data={item} />
                    </View>
                ))
            ) : (
                <Text style={[style.comoncolor2, { textAlign: 'center', width: '100%', marginVertical: responsiveHeight(10), }]}>
                    No astrologers found
                </Text>
            )}
        </View>
    );
}
