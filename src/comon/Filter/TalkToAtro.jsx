import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AstroCard from '../Cards/AstroCards';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { getData } from '../../Apis/ListsApi/ListPostApi';
import ActiveEndigator from '../Loader/ActiveEndicator';
import style from '../../utils/css/comoncss/style';

export default function TalkToAstro({ navigation, price, name }) {
    const [dataa, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(false);
            const data = await getData('astrologer/astrologer_list', {
                limit: 9,
                offset: 0,
                'min-price': price[0],
                'max-price': price[1],
                query: name
            });
            console.warn(data);
            setData(data?.data?.astrologer || []);
        };
        fetchData();
    }, [price, name]);

    const renderItem = ({ item }) => (
        <View style={{ width: '50%' }}>
            <AstroCard navigation={navigation} data={item} />
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            {loading ? (
                <ActiveEndigator />
            ) : (
                <FlatList
                    data={dataa}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    ListEmptyComponent={
                        <Text style={[style.comoncolor2, { textAlign: 'center', width: '100%', marginVertical: responsiveHeight(20) }]}>
                            No astrologers found
                        </Text>
                    }
                    contentContainerStyle={{ alignItems: 'center' }}
                />
            )}
        </View>
    );
}
