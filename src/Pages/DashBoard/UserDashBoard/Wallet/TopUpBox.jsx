import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import style from "../../../../utils/css/comoncss/style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default function TopUpBox({ price ,toprated}) {
    return (
        <TouchableOpacity style={{
            shadowColor: '#ff6347',
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderWidth: 1,
            borderColor: '#ea871e',
            backgroundColor: 'white',
            paddingHorizontal: responsiveWidth(4),
            paddingVertical: responsiveHeight(4),
            width: '48%',  // Adjust the width to fit three items in a row
            justifyContent: 'space-between',
            height: responsiveHeight(22),
            borderRadius: 10,
            position: 'relative', // Required for absolute positioning of badge
        }}>
            
            {toprated ?
            <View style={[style.bgcomoncolor,{
                position: 'absolute',
                top: -responsiveHeight(1),
                left: responsiveWidth(1),
                // backgroundColor: '#ff6347',
                paddingHorizontal: responsiveWidth(2),
                paddingVertical: responsiveHeight(0.5),
                borderRadius: 5,
                zIndex: 1
            }]}>
                <Text style={{ color: 'white', fontWeight: 'bold',fontSize:responsiveFontSize(1.2) }}>
                <Icon color='white' size={10} name="star" /> Most Popular
                </Text>
            </View>
            :''    
        }


            <Text style={[style.black, { textAlign: 'center', fontWeight: 'bold', fontSize: responsiveFontSize(3) }]}>
                <Icon color='#ea871e' size={20} name="inr" /> {price}
            </Text>
            <TouchableOpacity
                style={[style.bgcomoncolor2, {
                    width: '100%',
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingHorizontal: responsiveWidth(2),
                    paddingVertical: responsiveHeight(1.5),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: '#ea871e'
                }]}
            >
                <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: responsiveFontSize(1.5) }}>
                    Pay Now 
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}