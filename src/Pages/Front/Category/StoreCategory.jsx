import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import style from "../../../utils/css/comoncss/style";
import Header from "../../../comon/HeaderFooter/Header";
import Addas from "../../../comon/Ads/Ads";
import CategryCard from "./CategoryCard";
import { getData } from "../../../Apis/ListsApi/ListPostApi";
import ActiveEndicator from "../../../comon/Loader/ActiveEndicator";

const StoreCategory = ({ navigation }) => {
    const [dataa, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData('store', { limit: 20, offset: 0 });
                // setData(data?.data?.categorieList);
                setData(data?.data?.lists);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const renderCategory = ({ item }) => (
        <CategryCard navigation={navigation} item={item} />
    );

    return (
        <>
            <Header top={'Store'} />

            <FlatList
                style={[style.bgwhite, {
                    paddingVertical: responsiveWidth(5),
                    paddingHorizontal: responsiveWidth(5),
                    height:'100%'
                }]}
                data={dataa}
                renderItem={renderCategory}
                keyExtractor={(item, index) => `${item.id}_${index}`}
                ListHeaderComponent={<Addas />}
                ListEmptyComponent={<View style={{paddingVertical:responsiveHeight(5)}}><ActiveEndicator /></View>}
                numColumns={2} // Adjust as needed based on your design
            />
        </>
    );
};

export default StoreCategory;
