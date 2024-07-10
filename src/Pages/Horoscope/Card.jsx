import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const AriesHoroscope = ({navigation,image}) => {

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.horoscopeImg}>
                    <Image
                        source={{ uri: image }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.horoscopeData}>
                    <Text style={styles.title}>Leo</Text>
                    <View style={styles.ariesDataDetails}>
                        <Text style={styles.description}>
                            Aries is the first Zodiac Sign in Astrology, represented by the symbol of the ‘Ram’, a male sheep with long horns.
                        </Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('HorceDetail')} >
                            <Text style={styles.readMore}>Read More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.dayPanel}>
                <TouchableOpacity >
                    <Text style={styles.dayLabel}>Daily Aries Horoscope</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.dayLabel}>Yesterday Aries Horoscope</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.dayLabel}>Tomorrow Aries Horoscope</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.dayLabel}>Weekly Aries Horoscope</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.dayLabel}>Monthly Aries Horoscope</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.dayLabel}>Yearly Aries Horoscope</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: responsiveWidth(3),
        borderRadius: 10,
        shadowColor: '#ea871e',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        marginHorizontal: responsiveWidth(3),
        marginBottom: responsiveHeight(3),
    },
    box: {
        flexDirection: 'row',
        justifyContent:'space-between',
        gap:20,
        marginBottom: responsiveHeight(3),
        paddingHorizontal:responsiveWidth(2),
        alignItems:'center'
    },
    horoscopeImg: {
        justifyContent: 'center',
    },
    image: {
        width: responsiveWidth(25),
        height: responsiveHeight(20),
    },
    horoscopeData: {
       
    },
    title: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#000000',
    },
    ariesDataDetails: {
        marginTop: responsiveHeight(1),
    },
    description: {
        fontSize: responsiveFontSize(1.4),
        color: '#333333',
        lineHeight: responsiveHeight(2),
        width: responsiveWidth(40),
    },
    readMore: {
        fontSize: responsiveFontSize(1.8),
        color: '#ea871e',
        marginTop: responsiveHeight(1),
    },
    dayPanel: {
        marginTop: responsiveHeight(2),
    },
    dayLabel: {
        color:'black',fontSize:responsiveFontSize(1.5),
        fontWeight:'400',
        letterSpacing:0.5,
        marginTop: responsiveHeight(1),
        borderTopWidth:1,
        borderColor:'#aaa',
        padding:responsiveHeight(2),

    },
});

export default AriesHoroscope;
