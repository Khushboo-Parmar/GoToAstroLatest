import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from '../../utils/css/comoncss/style';
import { getData } from '../../Apis/ListsApi/ListPostApi';
import ActiveEndigator from '../Loader/ActiveEndicator';

export default function AstroReport({ navigation }) {
  const [dataa, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData('reports/reports_list', {
        limit: 9,
        offset: 0,
      });
      setData(data?.data?.results || []);
      setLoading(false);
    };
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ReportDetail')}
      style={{
        backgroundColor: 'white',
        shadowColor: '#ea871e',
        width: '48%',
        borderRadius: 5,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 30,
        elevation: 3,
        alignItems: 'center',
        paddingBottom: responsiveHeight(2),
        gap: responsiveHeight(1.2),
        position: 'relative',
        marginBottom: responsiveHeight(2),
      }}
    >
      {item.discount && (
        <View
          style={{
            position: 'absolute',
            top: responsiveHeight(1),
            left: responsiveWidth(1),
            backgroundColor: '#ff6347',
            paddingVertical: responsiveHeight(0.5),
            paddingHorizontal: responsiveWidth(2),
            borderRadius: 5,
            zIndex: 9999,
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.2) }}>
            {item.discount}
          </Text>
        </View>
      )}
      <Image style={{ width: '100%', height: responsiveHeight(13) }} source={{ uri: item.full_path_image }} />
      <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(1.4) }}>
        {item.title}
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10, alignItems: 'center' }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(1.5) }}>
          <Icon color={'black'} size={10} name="inr" /> {item.price} <Text style={{ color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.2) }}> /Min</Text>
        </Text>
        {item.originalPrice && (
          <>
            <Text style={{ color: 'black' }}>|</Text>
            <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: responsiveFontSize(1.5), textDecorationLine: 'line-through' }}>
              <Icon color={'grey'} size={10} name="inr" /> {item.originalPrice} <Text style={{ color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.2) }}> /Min</Text>
            </Text>
          </>
        )}
      </View>
      <View style={{ alignItems: 'center', width: '100%' }}>
        <TouchableOpacity
          style={[
            style.bgcomoncolor,
            { width: '80%', alignItems: 'center', paddingVertical: responsiveWidth(1.8), borderRadius: 5 },
          ]}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }}>Generate Now</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );


  console.log(dataa[0]?.slug)
  return (
    <>
      {loading ?
        <View style={{ alignItems: 'center', justifyContent: 'center', height: '75%' }}>
          <View>
            <ActiveEndigator />
          </View>
        </View>
        :
        <FlatList
          data={dataa}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: responsiveHeight(2), paddingTop: responsiveHeight(2) }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          ListEmptyComponent={() => (!loading && <Text style={[style.comoncolor2,{textAlign:'center'}]}>No reports available.</Text>)}
        />
      }
    </>
  );
}
