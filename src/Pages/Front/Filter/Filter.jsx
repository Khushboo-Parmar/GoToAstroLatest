import { ScrollView, Text, View } from "react-native";
import style from "../../../utils/css/comoncss/style";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Header from "../../../comon/HeaderFooter/Header";
import Addas from "../../../comon/Ads/Ads";
import AstroReport from "../../../comon/Cards/AstroReportCard";
import Search from "../../../comon/Filter/Search/SearchFilter";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../../comon/HeaderFooter/Footer";
import { useState } from "react";
import TalkToAstro from "../../../comon/Filter/TalkToAtro";
import Store from "../../../comon/Filter/Store";
import PujaPage from "../../../comon/Filter/Puja";


export default function Filter(props) {
    const navigation = useNavigation()
    const [price, setPrice] = useState([])
    const [name, setName] = useState('')
    const [slug, setSlug] = useState(props?.route?.params?.slug)
    const [page, setPage] = useState('Talk')

    const [filter, setFilter] = useState('')
    return (
        <>
            <Header top={<Text>Find &amp; Talk {'\n'}To Astrologers</Text>} />

            <ScrollView style={[style.bgwhite, {
                paddingVertical: responsiveWidth(5),
                height: '100%',
                paddingHorizontal: responsiveWidth(5)
            }]}>
                <Addas navigation={navigation} />

                <Search setFilter={setFilter} page={page} setPrice={setPrice} setName={setName} />


                <View style={{ marginVertical: responsiveHeight(0) }}>


                    {props?.route?.params?.name === 'TALK TO ASTROLOGER'
                        ?
                        <TalkToAstro price={price} navigation={navigation} name={name} />
                        : props?.route?.params?.name === 'ASTRO REPORTS' ?
                            <AstroReport filter={filter} setPage={setPage} price={price} navigation={navigation} />
                            : props?.route?.params?.name === 'PUJA' ?
                                <PujaPage navigation={navigation} /> :
                                <Store slug={slug} navigation={navigation} />}




                </View>
            </ScrollView>

            <View style={[style.bgwhite]}>
                <Footer to={'TALK TO ASTROLOGER'}
                    tab={[{
                        name: 'Home',
                        nav: 'Home',
                        icon: 'home'
                    }, {
                        name: 'Blog',
                        nav: 'Blog',
                        icon: 'tv'
                    }, {
                        name: 'HorceScope',
                        nav: 'HorceScope',
                        icon: 'globe-africa'
                    }
                        , {
                        name: 'Call',
                        nav: 'Filter',
                        icon: 'mobile'
                    }
                    ]}


                />
            </View>
        </>
    )
}