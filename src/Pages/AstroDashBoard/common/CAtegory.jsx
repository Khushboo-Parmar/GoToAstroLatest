import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/FontAwesome5';
import style from "../../../utils/css/comoncss/style";

export default function Category({ name, icon, isSelected, onSelect,count }) {
    return (
        <>
            <TouchableOpacity
                onPress={() => onSelect(name)}
                style={{
                    flexDirection: 'row',
                    marginRight: responsiveHeight(2),
                    height: responsiveHeight(5),
                    justifyContent: 'center',
                    gap: responsiveHeight(1),
                    paddingHorizontal: responsiveWidth(5),
                    paddingVertical: responsiveWidth(2),
                    borderWidth: 1,
                    borderColor: '#ea871e',
                    borderRadius: 100,
                    alignItems: 'center',
                    backgroundColor: isSelected ? '#ea871e' : '#FFFFFF',position:'relative'
                }}>
                <Icon color={isSelected ? '#FFFFFF' : '#ea871e'} size={10} name={icon} />
                <Text style={[style.black, { fontSize: responsiveFontSize(1.3), color: isSelected ? '#FFFFFF' : '#000000' }]}>{name}</Text>
            
            
             {count ? 
               <View
               style={[style.bgcomoncolor2, {
                 position: 'absolute',
                 right: -5,
                 top: 1,
                 borderRadius: 8,
                 width: 16,
                 height: 16,
                 justifyContent: 'center',
                 alignItems: 'center',
               }]}
             >
               <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>1</Text>
             </View>:'' 
            }
            </TouchableOpacity>
        </>
    );
}
