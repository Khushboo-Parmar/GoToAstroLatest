import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { getData } from '../../Apis/ListsApi/ListPostApi';
import StoreCard from '../Cards/StoreCards';
import ActiveEndigator from '../Loader/ActiveEndicator';


export default function Store({ navigation, slug }) {
    const [dataa, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData(`store/${slug}`, { limit: 9, offset: 0 })
            if (data?.status == false) {
                var product = await getData(`store/getProducts`, { limit: 9, offset: 0 })
                setData(product?.data?.list)                
            } else {
                setData(data?.data?.list)
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {dataa?.length >= 1 ? (
                    dataa.map((item, index) => (
                        <View key={index} style={{ width: '50%' }}>
                            <StoreCard navigation={navigation} data={item} />
                        </View>
                    ))
                ) : (
                    <ActiveEndigator />
                )}
            </View>
        </>
    )
}