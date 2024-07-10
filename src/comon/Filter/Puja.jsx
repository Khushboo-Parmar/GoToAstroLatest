import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { getData } from '../../Apis/ListsApi/ListPostApi';
import ActiveEndigator from '../Loader/ActiveEndicator';
import PujaCard from '../Cards/PujaCard';

export default function PujaPage({navigation}){
    const [dataa,setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData('astrologer/astrologer_list', { limit: 9, offset: 0 })
            setData(data?.data?.astrologer)
        }
        fetchData();
    }, []);
    return(
        <>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {dataa?.length >= 1 ? (
                dataa.map((item, index) => (
                    <View key={index} style={{ width: '50%' }}>
                        <PujaCard navigation={navigation} data={item} />
                    </View>
                ))
            ) : (
              <ActiveEndigator />
            )}
        </View>
        </>
    )
}