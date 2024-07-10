import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import style from '../../../utils/css/comoncss/style';

export default function ActivityTab({ name, activeTab, setActiveTab, isNew }) {
    const isActive = activeTab === name;

    return (
        <TouchableOpacity
            style={{
                position: 'relative',
                marginBottom: responsiveHeight(2), // Add margin bottom for spacing between items
                alignSelf: 'flex-start',paddingTop:responsiveHeight(1),alignItems:'center',justifyContent:'centers' // Align items to the start of the parent (left side)
            }}
            onPress={() => setActiveTab(name)}
        >
            {isNew && (
                <View
                    style={{
                        position: 'absolute',
                        top: responsiveWidth(1),
                        right: responsiveWidth(3),
                        backgroundColor: '#ff5733', // Background color for the new badge
                        width: responsiveWidth(10),
                        height: responsiveHeight(2.4),
                        justifyContent: 'center',
                        alignItems: 'center',zIndex:999,borderRadius:3
                    }}
                >
                    <Text style={{ color: 'white', fontSize: responsiveFontSize(1.2), fontWeight: 'bold' }}>New</Text>
                </View>
            )}

            <TouchableOpacity
                style={{ 
                    width: responsiveWidth(40), 
                    borderWidth: 1, 
                    borderRadius: 5, 
                    paddingHorizontal: responsiveWidth(2), 
                    paddingVertical: responsiveHeight(1.5), 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    backgroundColor: isActive ? '#ea871e' : '#fff',
                    marginRight: responsiveWidth(4),
                    borderColor: isActive ? '#ea871e' : '#000'
                }}
                onPress={() => setActiveTab(name)}
            >
                <Text style={{ fontWeight: 'bold', color: isActive ? '#fff' : 'black', fontSize: responsiveFontSize(1.5) }}>
                    {name}
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}
