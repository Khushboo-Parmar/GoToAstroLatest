import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import style from '../../../utils/css/comoncss/style';
import FavCat from './FavCategory';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import PujaCard from '../../../comon/Cards/PujaCard';
import { useIsFocused } from '@react-navigation/native';
import { getData } from '../../../Apis/ListsApi/ListPostApi';
import { useSelector } from 'react-redux';
import AstroCard from '../../../comon/Cards/AstroCards';
import ActiveEndigator from '../../../comon/Loader/ActiveEndicator';

export default function Favorites({ navigation }) {
    const [activeTab, setActiveTab] = useState('Astrologers');
    const see = useSelector((state) => state.user);
    const [data, setData] = useState([]);
    const isFocused = useIsFocused();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const maincover = await getData('favorite/my_astrologer_list', { limit: 2, offset: 0 }, see[0]?.token);
                setData(maincover?.messages?.astrologer || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        if (isFocused) {
            fetchData();
        }
    }, [isFocused]);

    return (
        <View style={style.bgwhite}>
            <ScrollView horizontal contentContainerStyle={{ marginVertical: responsiveHeight(1) }}>
                <FavCat name={'Astrologers'} activeTab={activeTab} setActiveTab={setActiveTab} />
                <FavCat name={'Pandits'} activeTab={activeTab} setActiveTab={setActiveTab} />
                <FavCat name={'Puja'} activeTab={activeTab} setActiveTab={setActiveTab} />
                <FavCat name={'Magazine'} activeTab={activeTab} setActiveTab={setActiveTab} />
                <FavCat name={'Store'} activeTab={activeTab} setActiveTab={setActiveTab} />
                <FavCat name={'Blogs'} activeTab={activeTab} setActiveTab={setActiveTab} />
            </ScrollView>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                {activeTab === 'Puja' ? (
                            <View style={{ width: '50%' }}>

                    <PujaCard />
                    </View>
                ) : activeTab === 'Astrologers' ? (
                    loading ? (
                        <Text style={[style.comoncolor2, { textAlign: 'center', width: '100%', marginVertical: responsiveHeight(10) }]}>
                           <ActiveEndigator />
                        </Text>
                    ) : data.length >= 1 ? (
                        data.map((item, index) => (
                            <View key={index} style={{ width: '50%' }}>
                                <AstroCard navigation={navigation} data={item} />
                            </View>
                        ))
                    ) : (
                        <Text style={[style.comoncolor2, { textAlign: 'center', width: '100%', marginVertical: responsiveHeight(10) }]}>
                            No astrologers found
                        </Text>
                    )
                ) : (
                    <View style={{ paddingVertical: responsiveHeight(10),width:'100%' }}>
                        <Text style={{ color: 'grey', textAlign: 'center', fontWeight: 'bold' }}>No {activeTab} Found</Text>
                    </View>
                )}
            </View>
        </View>
    );
}
