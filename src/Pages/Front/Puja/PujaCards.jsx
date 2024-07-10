import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import Header from "../../../comon/HeaderFooter/Header";
import Addas from "../../../comon/Ads/Ads";
import style from "../../../utils/css/comoncss/style";
import { getData } from "../../../Apis/ListsApi/ListPostApi";
import { useNavigation } from "@react-navigation/native";

const PujaCard = ({ image, name }) => {
  const [dataa, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData('puja', { limit: 20, offset: 0 });
        setData(data?.data?.categorieList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const renderPujaItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Filter', { name: 'PUJA', slug: item?.slug })}
      style={{
        backgroundColor: 'white',
        shadowColor: '#ea871e',
        width: '48%',
        borderRadius: 4,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 30,
        elevation: 3,
        alignItems: 'center',
        paddingBottom: responsiveHeight(1),
        marginVertical: responsiveHeight(1.2),
        marginRight: '2%'
      }}>
      <Image style={{ width: '100%', height: responsiveHeight(13) }} source={{ uri: item?.image_full_path }} />
      <Text style={{ marginVertical: responsiveHeight(1), textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(1.4) }}>{item?.name}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Header top={'Puja'} />
      <FlatList
        style={[style.bgwhite, {
          paddingVertical: responsiveWidth(5),
          paddingHorizontal: responsiveWidth(5),
        }]}
        data={dataa}
        renderItem={renderPujaItem}
        keyExtractor={(item, index) => `${item.id}_${index}`}
        ListHeaderComponent={<Addas />}
        numColumns={2} // Adjust as needed based on your design
      />
    </>
  );
};

export default PujaCard;
