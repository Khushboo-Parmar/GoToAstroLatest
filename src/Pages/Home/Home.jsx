import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import Ioni from 'react-native-vector-icons/Ionicons';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
// import ganeshji from "../../../../assets/images/ganeshji.png";
import { useNavigation } from '@react-navigation/native';
import Header from '../../comon/HeaderFooter/Header';
import Addas from '../../comon/Ads/Ads';
import Corosel from './Corosel';
import { MultipleSelectList } from "react-native-dropdown-select-list";
import Banner from '../Blog/Banner';
import style from '../../utils/css/comoncss/style';
import PujaCard from '../Front/Puja/PujaCards';
import CategryCard from '../Front/Category/CategoryCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../../comon/HeaderFooter/Footer';

const theme = {

    primaryColor: '#0f61c2',
    secondaryColor: '#ff6347',
    tertiaryColor: '#ea871e',
    backgroundColor: 'white',
    textColor: '#333',
    lightTextColor: '#aaa',
    buttonTextColor: '#fff',
};

const Home = () => {
    const navigation = useNavigation();
    const [select, setSelect] = useState([])

    const data = [
        { label: 'English', value: 'TALK TO ASTROLOGER' },
        { label: 'Hindi', value: 'ASTRO REPORTS' },
    ];

    const images = {
        astro: 'https://www.baglamukhipanditsurajguru.com/assets/images/a7.jpg',
        store: 'https://d2vvtb6c5o2opz.cloudfront.net/estore_categories/1646202959.webp',
        puja: 'https://as1.ftcdn.net/v2/jpg/07/55/78/56/1000_F_755785666_6y8psafNaAakH0s9dEiNRPxWnRxMSEuj.jpg',
        magazine: 'https://d2vvtb6c5o2opz.cloudfront.net/magazine/1646202205.webp',
        blog: 'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1692881863.webp',
        reports: 'https://d2vvtb6c5o2opz.cloudfront.net/reports/1686227325.webp',
    };

    return (
        <>
            <Header top={<Text>Hello, </Text>} />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View>
                    <MultipleSelectList
                        setSelected={setSelect}
                        data={data}
                        save="key"
                        label="value"
                        placeholder="Search"
                        searchPlaceholder="Search Options"
                        inputStyles={{ color: 'grey' }}
                        dropdownStyles={{ borderColor: '#ea871e' }}
                        checkBoxStyles={{ borderColor: '#ea871e' }}
                        dropdownTextStyles={{ color: 'black' }}
                        boxStyles={{
                            borderColor: '#ea871e',
                            height: responsiveHeight(7),
                            alignItems: 'center',
                            borderRadius: 30,
                            paddingHorizontal: responsiveWidth(10)
                        }}
                    />
                </View>
                <View style={{ marginTop: responsiveHeight(2) }}>
                    <Addas navigation={navigation} />
                </View>




                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.services}>

                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Store', { name: 'STORE' })} style={styles.serviceItem}>
                            <Image source={{ uri: images.astro }} style={styles.serviceImage} />
                        </TouchableOpacity>
                        <Text style={styles.serviceText}>STORE</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Puja', { name: 'TALK TO ASTROLOGER' })} style={styles.serviceItem}>
                            <Image source={{ uri: images.puja }} style={styles.serviceImage} />
                        </TouchableOpacity>
                        <Text style={styles.serviceText}>POOJA</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }} >
                        <TouchableOpacity style={styles.serviceItem} onPress={() => navigation.navigate('Filter', { name: 'ASTRO REPORTS' })}>
                            <Image source={{ uri: images.reports }} style={styles.serviceImage} />
                        </TouchableOpacity>
                        <Text style={styles.serviceText}>REPORTS</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }} >
                        <TouchableOpacity style={styles.serviceItem} onPress={() => navigation.navigate('Magzine', { name: 'TALK TO ASTROLOGER' })}>
                            <Image source={{ uri: images.magazine }} style={styles.serviceImage} />
                        </TouchableOpacity>
                        <Text style={styles.serviceText}>Magazine</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }} >
                        <TouchableOpacity style={styles.serviceItem} onPress={() => navigation.navigate('Blog', { name: 'TALK TO ASTROLOGER' })}>
                            <Image source={{ uri: images.blog }} style={styles.serviceImage} />

                        </TouchableOpacity>
                        <Text style={styles.serviceText}>BLOG</Text>
                    </View>

                </ScrollView>


                <View style={{ marginVertical: responsiveHeight(3) }}>
                    <Corosel />
                </View>

                <View style={styles.consultation}>
                    <View style={styles.consultationTextContainer}>
                        <Text style={styles.consultationText}>Need a consultation?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Filter', { name: 'TALK TO ASTROLOGER' })} style={styles.consultationButton}>
                            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 2 }}>
                                <Ioni name="planet" size={responsiveFontSize(3)} color={theme.secondaryColor} />
                                <Text style={[style.black, { fontSize: responsiveFontSize(1.4) }]}>Talk to Astrologers</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                    <Image source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/epooja/1649232939.webp' }} style={styles.ganeshaImage} />
                </View>

                <View style={{ gap: responsiveHeight(1), marginVertical: responsiveHeight(0) }}>
                    <Text style={[style.comoncolor2, { textAlign: 'center', fontSize: responsiveFontSize(2.5), fontWeight: 'bold' }]}>Astrology Blog</Text>
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.3), width: '100%' }}>
                        Read Astrology, Vastu and Religious Articles, Celebrity Horoscope Analysis, Articles on Festivals, Brief Biographies of Saints, Regular Series etc.
                    </Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: responsiveHeight(3) }}>
                        <Banner image={'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1692881863.webp'} />
                        <Banner image={'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1691222005.webp'} />
                        <Banner image={'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1691151847.webp'} />
                        <Banner image={'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1662719044.webp'} />
                    </ScrollView>
                </View>



                <View style={{ gap: responsiveHeight(1), marginVertical: responsiveHeight(0) }}>
                    <Text style={[style.comoncolor2, { textAlign: 'center', fontSize: responsiveFontSize(2.5), fontWeight: 'bold' }]}>Store</Text>
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.3), width: '100%' }}>
                        Read Astrology, Vastu and Religious Articles, Celebrity Horoscope Analysis, Articles on Festivals, Brief Biographies of Saints, Regular Series etc.
                    </Text>
                    <CategryCard navigation={navigation} image={'https://5.imimg.com/data5/QD/BD/MY-3456141/astrology-gemstones-500x500.png'} name={'Gemstone'} />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Magzine')}>

                    <ImageBackground source={{ uri: 'https://gotoastro.com/front-assets/images/e-Magazine.jpg' }} style={{ gap: responsiveHeight(1), marginVertical: responsiveHeight(0) }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: responsiveWidth(5), paddingVertical: responsiveHeight(3) }}>
                            <View style={{ width: '50%' }}>
                                <Text style={[style.white, { textAlign: 'left', fontSize: responsiveFontSize(2.5), fontWeight: 'bold' }]}>Magazine</Text>
                                <Text style={{ marginTop: responsiveHeight(1), textAlign: 'left', color: 'white', fontWeight: '300', fontSize: responsiveFontSize(1.3), width: '100%' }}>
                                    Read Astrology, Vastu and Religious Articles, Celebrity Horoscope Analysis, Articles on Festivals, Brief Biographies of Saints, Regular Series etc.
                                </Text>
                            </View>


                            <View style={{ width: '48%', marginBottom: responsiveHeight(2), position: 'relative' }}>
                                <Image
                                    style={{ width: '100%', height: responsiveHeight(25), resizeMode: 'contain' }}
                                    source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/magazine/1698047887.webp' }}
                                />
                                <View style={{
                                    position: 'absolute',
                                    bottom: 10,
                                    left: '45%',
                                    transform: [{ translateX: -24 }], // Adjust based on icon size
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: 48, // Adjust based on icon size and spacing
                                    gap: 10
                                }}>
                                    <TouchableOpacity style={{
                                        backgroundColor: 'white',
                                        padding: responsiveWidth(2),
                                        borderRadius: 50,
                                        justifyContent: 'center', height: responsiveHeight(3.8)
                                    }}>
                                        <Icon name="shopping-cart" size={responsiveFontSize(1.5)} color={'black'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{
                                        backgroundColor: 'white',
                                        padding: responsiveWidth(2),
                                        borderRadius: 50,
                                        justifyContent: 'center', height: responsiveHeight(3.8)
                                    }}>
                                        <Icon name="heart" size={responsiveFontSize(1.5)} color={'black'} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </ImageBackground>
                </TouchableOpacity>

                <View style={{ gap: responsiveHeight(1), marginTop: responsiveHeight(2) }}>
                    <Text style={[style.comoncolor2, { textAlign: 'center', fontSize: responsiveFontSize(2.5), fontWeight: 'bold' }]}>Puja</Text>
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.3), width: '100%' }}>
                        Read Astrology, Vastu and Religious Articles, Celebrity Horoscope Analysis, Articles on Festivals, Brief Biographies of Saints, Regular Series etc.
                    </Text>

                    <>
                        <TouchableOpacity onPress={() => navigation.navigate('Filter', { name: 'PUJA' })} style={{
                            backgroundColor: 'white',
                            shadowColor: '#ea871e',
                            width: '48%',
                            borderRadius: 4,
                            shadowOffset: { width: 0, height: 10 },
                            shadowOpacity: 0.3,
                            shadowRadius: 30,
                            elevation: 3,
                            alignItems: 'center',
                            paddingBottom: responsiveHeight(2),
                            gap: responsiveHeight(1.2), marginVertical: responsiveHeight(2)
                        }}>

                            <Image style={{ width: '100%', height: responsiveHeight(13) }} source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/epoojah_categories/1686224744.webp' }} />
                            <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(1.4) }}>Birth Related Sanskar Puja</Text>
                        </TouchableOpacity>
                    </>
                </View>
            </ScrollView>

            <View style={[style.bgwhite]}>
                <Footer to={'TALK TO ASTROLOGER'}
                    tab={[{
                        name: 'Store',
                        nav: 'Store',
                        icon: 'warehouse'
                    }, {
                        name: 'Talk',
                        nav: 'Filter',
                        icon: 'mobile'
                    }, {
                        name: 'HorceScope',
                        nav: 'HorceScope',
                        icon: 'globe-africa'
                    }

                    ]}


                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        padding: responsiveWidth(5),
        backgroundColor: 'white',
        paddingBottom: responsiveHeight(5)
    },
    greeting: {
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: theme.textColor,
    },
    horoscopeButton: {
        backgroundColor: theme.primaryColor,
        paddingVertical: responsiveHeight(1.5),
        paddingHorizontal: responsiveWidth(5),
        borderRadius: responsiveWidth(2),
        marginBottom: responsiveHeight(2),
    },
    horoscopeButtonText: {
        color: theme.buttonTextColor,
        fontSize: responsiveFontSize(2),
    },
    searchInput: {
        height: responsiveHeight(6),
        borderColor: theme.lightTextColor,
        borderWidth: 1,
        borderRadius: responsiveWidth(2),
        paddingHorizontal: responsiveWidth(3),
        marginBottom: responsiveHeight(2),
        backgroundColor: '#fff',
        color: 'black',
    },
    services: {
        flexDirection: 'row',
        gap: responsiveHeight(2.8),
        // marginBottom: responsiveHeight(2),
    },

    consultation: {
        backgroundColor: '#fff',
        padding: responsiveWidth(5),
        borderRadius: responsiveWidth(2),
        marginBottom: responsiveHeight(3),
        marginTop: responsiveHeight(3),
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: theme.secondaryColor,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    consultationTextContainer: {
        flex: 1,
    },
    consultationText: {
        fontSize: responsiveFontSize(2),
        marginBottom: responsiveHeight(1),
        color: theme.textColor,
    },
    consultationButton: {
        backgroundColor: 'white',
        paddingVertical: responsiveHeight(1),
        // paddingHorizontal: responsiveWidth(5),
        alignItems: 'center',
        borderRadius: responsiveWidth(2),
        borderWidth: 1,
        borderColor: theme.secondaryColor,
    },
    consultationButtonText: {
        color: "black",
        fontSize: responsiveFontSize(1.8)
    },
    ganeshaImage: {
        width: responsiveWidth(35),
        height: responsiveWidth(25),
        marginLeft: responsiveWidth(5),
    },
    servicesHeaderText: {
        fontSize: responsiveFontSize(3.5),
        textAlign: 'center',
        color: theme.textColor,
        marginBottom: responsiveHeight(2),
    },
    servicesSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    freeButton: {
        backgroundColor: theme.secondaryColor,
        paddingVertical: responsiveHeight(1.5),
        paddingHorizontal: responsiveWidth(10),
        borderRadius: responsiveWidth(2),
    },
    premiumButton: {
        backgroundColor: theme.tertiaryColor,
        paddingVertical: responsiveHeight(1.5),
        paddingHorizontal: responsiveWidth(10),
        borderRadius: responsiveWidth(2),
    },
    buttonText: {
        color: theme.buttonTextColor,
        fontSize: responsiveFontSize(2),
    },

    serviceItem: {
        width: responsiveWidth(18),
        height: responsiveWidth(18),
        borderRadius: responsiveWidth(10),
        borderWidth: 1,
        borderColor: '#000',
        overflow: 'hidden',
    },
    serviceImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    serviceText: {
        fontSize: responsiveFontSize(1.3),
        color: 'black',
        marginTop: responsiveHeight(1),
        fontWeight: 'bold'
    },
});

export default Home;

