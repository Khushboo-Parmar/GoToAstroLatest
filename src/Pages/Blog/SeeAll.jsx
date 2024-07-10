import { ScrollView } from "react-native";
import style from "../../utils/css/comoncss/style";
import { responsiveWidth } from "react-native-responsive-dimensions";
import Addas from "../../comon/Ads/Ads";
import Header from "../../comon/HeaderFooter/Header";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import BlogBox from "./BlogBox";

export default function SeeAll(props) {
    const [data, setData] = useState(props?.route?.params?.data)
    const navigation = useNavigation()
    return (
        <>
            <Header top={'All Blogs'} />
            <ScrollView style={[style.bgwhite, {
                paddingVertical: responsiveWidth(5),
                height: '100%',
                paddingHorizontal: responsiveWidth(5)
            }]}>
                <Addas navigation={navigation} />


                {data?.slice(0, 10)?.map((i) => (
                    <BlogBox navigation={navigation} item={i} />
                ))}
            </ScrollView>
        </>
    )
}