import { ScrollView, Text, View } from "react-native";
import Header from "../../comon/HeaderFooter/Header";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Addas from "../../comon/Ads/Ads";
import style from "../../utils/css/comoncss/style";
import Category from "./Category";
import Banner from "./Banner";
import BlogCategory from "./BlogCategory";
import { useEffect, useState } from "react";
import { getData } from "../../Apis/ListsApi/ListPostApi";
import ActiveEndigator from "../../comon/Loader/ActiveEndicator";

export default function Blog() {
    const [dataa, setData] = useState([]);
    const [loadieng, setLoadieng] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const data = await getData(`blogs/get_most_recent`, {});
                setData(data?.result)
                setLoadieng(!loadieng)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Header top={'Blogs'} />

            <ScrollView style={[style.bgwhite, {
                paddingVertical: responsiveWidth(5),
                height: '100%',
                paddingHorizontal: responsiveWidth(5)
            }]}>
                <Addas />


                {loadieng ?

                    <>
                        <View>
                            <View style={{ borderBottomWidth: 3, paddingVertical: 10, borderBottomColor: '#ea871e', width: '35%' }}>
                                <Text style={{ fontWeight: 'bold', color: 'black' }}>Recent Blogs</Text>
                            </View>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: responsiveHeight(3) }}>
                                {dataa?.slice(0, 5)?.map((i) => (
                                    <Banner item={i} />

                                ))}
                            </ScrollView>
                        </View>

                        <View style={{ marginVertical: responsiveHeight(1), gap: responsiveHeight(3) }}>
                            <View style={{ borderBottomWidth: 3, paddingVertical: 10, borderBottomColor: '#ea871e', width: '35%' }}>
                                <Text style={{ fontWeight: 'bold', color: 'black' }}>Category</Text>
                            </View>
                            <Category />
                        </View>



                        <View style={{ marginVertical: responsiveHeight(3) }}>
                            <BlogCategory text={'Alternative astrology'} image={'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1689598849.webp'} />

                            {/* <BlogCategory text={'Falit Astrology '} image={'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1685082472.webp'} />


                <BlogCategory text={'Saturn '} image={'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1646301755.webp'} /> */}

                        </View>
                    </>

                    : <View style={{ paddingVertical: responsiveHeight(4) }}>
                        <ActiveEndigator />
                    </View>
                }



            </ScrollView>
        </>
    )
}