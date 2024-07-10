import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from '../../utils/css/comoncss/style';

export default function BlogBox({ item, navigation }) {
    const formattedDate = new Date(item?.created_at).toDateString(); // Format the date here

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('BlogDetail',{slug:item?.slug})}
            style={{
                marginHorizontal: responsiveWidth(2),
                marginBottom: responsiveHeight(2),
                backgroundColor: 'white',
                shadowColor: '#ea871e',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 1.6,
                paddingBottom: responsiveHeight(3),
            }}
        >
            <View>
                <Image
                    style={{ width: '100%', height: responsiveHeight(25) }}
                    source={{
                        uri: 'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1646301755.webp',
                    }}
                />
            </View>

            <View style={{ paddingHorizontal: responsiveWidth(4), paddingTop: responsiveHeight(2), gap: responsiveHeight(2) }}>
                <Text
                    style={{
                        fontWeight: '500',
                        color: 'black',
                        fontSize: responsiveFontSize(1.7),
                    }}
                >
                    {item?.main_title}
                </Text>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: responsiveHeight(1) }}>
                    <Text style={[style.comoncolor2, { fontSize: responsiveFontSize(1.4), fontWeight: 'bold' }]}>
                        By - <Text>{item?.auther}</Text>
                    </Text>
                    <Text style={{ fontWeight: 'bold', color: 'grey', fontSize: responsiveFontSize(1.5) }}>
                        {formattedDate} {/* Render the formatted date here */}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
