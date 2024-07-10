import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Header from "../../../comon/HeaderFooter/Header";
import style from "../../../utils/css/comoncss/style";
import Addas from "../../../comon/Ads/Ads";
import { getData } from "../../../Apis/ListsApi/ListPostApi";
import ActiveEndicator from "../../../comon/Loader/ActiveEndicator";
import { useNavigation } from "@react-navigation/native";
import SubCard from "./SubCard";

const SubCategory = (props) => {
    const [dataa, setData] = useState([]);
    const navigation = useNavigation();
    const [slug, setSlug] = useState(props?.route?.params?.slug);
    console.warn('Here', slug)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData(`store/${slug}`, { limit: 20, offset: 0 });

                if (data?.status == false) {
                    var product = await getData(`store/getProducts`, { limit: 9, offset: 0 })
                    setData(product?.data?.list)
                } else {
                    setData(data?.data?.list ? data?.data?.list : undefined);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [slug]);

    const renderCategory = ({ item }) => (
        <SubCard
            navigation={navigation}
            nav={'Filter'}
            item={item}
            slug={slug}
        />
    );

    return (
        <>
            <Header top={<Text>{slug?.charAt(0).toUpperCase() + slug?.slice(1)}{'\n'}</Text>} />

            <FlatList
                style={[style.bgwhite, {
                    paddingVertical: responsiveWidth(5),
                    paddingHorizontal: responsiveWidth(5),
                }]}
                data={dataa}
                renderItem={renderCategory}
                keyExtractor={(item, index) => `${item.id}_${index}`}
                ListHeaderComponent={<Addas />}
                ListEmptyComponent={<View style={{ paddingVertical: responsiveHeight(5) }}>{dataa === undefined ? <Text style={[style.comoncolor2, { textAlign: 'center', fontSize: responsiveFontSize(1.7), paddingVertical: responsiveHeight(10) }]}>No Products Found</Text> : <ActiveEndicator />}</View>}
                numColumns={2} // Adjust as needed based on your design
            />
        </>
    );
};

export default SubCategory;
