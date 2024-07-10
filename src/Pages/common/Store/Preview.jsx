import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const Preview = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={[styles.videoContainer, styles.shadow]} onPress={() => onPress(item)}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.videoPreview}
                    source={{uri:item.banner}}
                />
            </View>
            <Text style={styles.desc}>{item.desc}</Text>
        </TouchableOpacity>
    
    );
};

const styles = StyleSheet.create({
    videoContainer: {
        width: 275,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        backgroundColor:'white'
    },
    videoPreview: {
        width: 275,
        height: 140,
        borderRadius: 8,
        resizeMode: 'cover',
    },
    desc: {
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 24,
        marginTop: 18,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    shadow: {
        shadowColor: '#ea871e',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 30,
        elevation: 3,  
    }
});

export default Preview;