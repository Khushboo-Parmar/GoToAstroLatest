import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import style from '../../../utils/css/comoncss/style';
import Icon from 'react-native-vector-icons/FontAwesome';

const ViewAdd = () => {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={{ alignSelf: 'flex-end' }}><Icon name="user-plus" size={20} color='Black' style={styles.icon} />
            </TouchableOpacity>
            <View>
                <TouchableOpacity style={[styles.card, style.bgcomoncolor2, styles.shadow]}>
                    <View>
                        <View style={styles.cardItem}>
                            <Text style={styles.value}>John Doe</Text>
                        </View>
                        <View style={styles.cardItem}>
                            <Icon name="venus-mars" size={20} color='white' style={styles.icon} />
                            <Text style={styles.value}>Male</Text>
                        </View>
                        <View style={styles.cardItem}>
                            <Icon name="calendar" size={20} color='white' style={styles.icon} />
                            <Text style={styles.value}>10/03/2010 | 01:04 AM</Text>
                        </View>
                        <View style={styles.cardItem}>
                            <Icon name="map-marker" size={20} color='white' style={styles.icon} />
                            <Text style={styles.value}>Dewas, Madhya Pradesh, India</Text>
                        </View>
                    </View>

                    <View style={styles.badgeContainer}>
                        <Text style={styles.badge}>Self</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.card, style.bgcomoncolor, styles.shadow]}>
                    <View>
                        <View style={styles.cardItem}>
                            <Text style={styles.value}>John Doe</Text>
                        </View>
                        <View style={styles.cardItem}>
                            <Icon name="venus-mars" size={20} color='white' style={styles.icon} />
                            <Text style={styles.value}>Male</Text>
                        </View>
                        <View style={styles.cardItem}>
                            <Icon name="calendar" size={20} color='white' style={styles.icon} />
                            <Text style={styles.value}>10/03/2010 | 01:04 AM</Text>
                        </View>
                        <View style={styles.cardItem}>
                            <Icon name="map-marker" size={20} color='white' style={styles.icon} />
                            <Text style={styles.value}>Dewas, Madhya Pradesh, India</Text>
                        </View>
                    </View>

                    <View style={styles.badgeContainer}>
                        <Text style={styles.badge}>Self</Text>
                    </View>
                </TouchableOpacity>
            </View>



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: responsiveWidth(5),

    },
    card: {
        padding: responsiveWidth(3),
        borderRadius: 22,
        backgroundColor: '#333',
        position: 'relative',
        marginTop: responsiveHeight(2),
    },
    cardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: responsiveWidth(2),
    },
    value: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: '400',
        color: 'white',
    },
    icon: {
        marginRight: responsiveWidth(2),
        // color:'black'
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 8, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    badgeContainer: {
        position: 'absolute',
        right: responsiveWidth(0),
    },
    badge: {
        backgroundColor: 'blue',
        color: '#fff',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5,
    },
});

export default ViewAdd;
